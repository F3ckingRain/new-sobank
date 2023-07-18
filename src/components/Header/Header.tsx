import React from 'react';

import clsx from 'clsx';

import styles from './Header.module.scss';

import Tooltip from '@/components/Tooltip/Tooltip';
import { CURRENT_THEME } from '@/config/themeConfig';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';
import { setModal } from '@/store/reducers/ModalSlice/ModalSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigateWithParams();

  const { viewport } = useAppSelector(state => state.configReducer);

  const showNewDesignHeader = CURRENT_THEME === 'sobankRedesign';
  const showCityChanger = showNewDesignHeader && viewport === 'mobile';

  const logoClickHandler = () => {
    navigate('/');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const unsubscribeClickHandler = () => {
    dispatch(setModal({ name: 'unsubscribe-modal', opened: true }));
  };

  return (
    <header className={clsx(styles.header, `${styles[`header__${CURRENT_THEME}`]}`)}>
      <button
        type="button"
        className={clsx(
          styles.header__btnLogo,
          `${styles[`header__btnLogo__${CURRENT_THEME}`]}`,
        )}
        onClick={logoClickHandler}
      />

      <button
        type="button"
        className={clsx(
          styles.btnUnsubscribe,
          `${styles[`btnUnsubscribe__${CURRENT_THEME}`]}`,
        )}
        onClick={unsubscribeClickHandler}
      >
        {viewport === 'mobile'
          ? 'Отписаться\nот звонков'
          : 'Отписаться от рекламных звонков'}
      </button>

      {showNewDesignHeader && (
        <div className={styles.sobankRedesign__container}>
          {showCityChanger ? (
            <button className={styles.sobankRedesign__cityBtn}>name</button>
          ) : (
            <Tooltip />
          )}
          <button className={styles.sobankRedesign__userLogo} />
        </div>
      )}
    </header>
  );
};

export default Header;
