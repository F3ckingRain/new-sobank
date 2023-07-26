import React from 'react';

import clsx from 'clsx';

import styles from './AuthModal.module.scss';

import AuthWindow from '@/components/AuthWindow/AuthWindow';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';
import { closeModal } from '@/store/reducers/ModalSlice/ModalSlice';
import { setPhoneNumber } from '@/store/reducers/UserSlice/UserSlice';

const AuthModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigateWithParams();

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
            ? clsx(styles.authModal, styles.authModal__active)
            : styles.authModal
        }
        onClick={event => event.stopPropagation()}
        aria-hidden
      >
        <button className={styles.closeBtn} type="button" onClick={closeModalHandler} />

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
