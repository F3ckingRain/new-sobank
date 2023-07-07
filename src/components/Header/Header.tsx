import React from 'react';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <button type="button" className={styles.header__btnLogo} />
  </header>
);

export default Header;
