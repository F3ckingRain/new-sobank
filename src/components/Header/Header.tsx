import React from 'react';

import styles from './Header.module.scss';

import useNavigateWithParams from '@/hooks/useNavigateWithParams';

const Header = () => {
  const navigate = useNavigateWithParams();

  const clickHandler = () => {
    navigate('/');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={styles.header}>
      <button type="button" className={styles.header__btnLogo} onClick={clickHandler} />
    </header>
  );
};

export default Header;
