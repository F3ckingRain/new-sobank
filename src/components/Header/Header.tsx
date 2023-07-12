import React from 'react';

import styles from './Header.module.scss';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';
import { setModal } from '@/store/reducers/ModalSlice/ModalSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigateWithParams();

  const { viewport } = useAppSelector(state => state.configReducer);

  const logoClickHandler = () => {
    navigate('/');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const unsubscribeClickHandler = () => {
    dispatch(setModal({ name: 'unsubscribe-modal', opened: true }));
  };

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.header__btnLogo}
        onClick={logoClickHandler}
      />
      <button
        type="button"
        className={styles.btnUnsubscribe}
        onClick={unsubscribeClickHandler}
      >
        {viewport === 'mobile'
          ? 'Отписаться\nот звонков'
          : 'Отписаться от рекламных звонков'}
      </button>
    </header>
  );
};

export default Header;
