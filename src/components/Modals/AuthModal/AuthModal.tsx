import React from 'react';

import clsx from 'clsx';

import styles from './AuthModal.module.scss';

import AuthWindow from '@/components/AuthWindow/AuthWindow';
import { CURRENT_THEME } from '@/config/themeConfig';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { closeModal } from '@/store/reducers/ModalSlice/ModalSlice';
import { setPhoneNumber } from '@/store/reducers/UserSlice/UserSlice';

const AuthModal = () => {
  const dispatch = useAppDispatch();

  const modal = useAppSelector(state => state.modalReducer);
  const { isAuth, sendingSmsCode, changingPhone, autologinToken } = useAppSelector(
    state => state.userReducer,
  );

  const isAuthModalOpened = modal.opened && modal.name === 'auth-modal';

  const closeModalHandler = () => {
    if (!isAuth && !sendingSmsCode) {
      dispatch(setPhoneNumber(''));
    }
    dispatch(closeModal());
  };

  return (
    <div
      className={isAuthModalOpened ? 'modalContainer' : ''}
      onClick={closeModalHandler}
      aria-hidden
    >
      <div
        className={
          isAuthModalOpened
            ? clsx(
                `${styles[`authModal__${CURRENT_THEME}`]}`,
                `${styles[`authModal__${CURRENT_THEME}__active`]}`,
              )
            : styles.authModal
        }
        onClick={event => event.stopPropagation()}
        aria-hidden
      >
        <button
          className={`${styles[`closeBtn__${CURRENT_THEME}`]}`}
          type="button"
          onClick={closeModalHandler}
        />

        <AuthWindow
          changingPhone={changingPhone}
          sendingSmsCode={sendingSmsCode}
          autologinToken={autologinToken}
        />
      </div>
    </div>
  );
};

export default AuthModal;
