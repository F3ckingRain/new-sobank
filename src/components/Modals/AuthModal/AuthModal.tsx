import React, { useEffect, useState } from 'react';

import clsx from 'clsx';

import styles from './AuthModal.module.scss';

import PhoneInput from '@/components/Inputs/PhoneInput';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';
import { closeModal } from '@/store/reducers/ModalSlice/ModalSlice';
import { setPhoneNumber, setSendingSms } from '@/store/reducers/UserSlice/UserSlice';

const AuthModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigateWithParams();

  const modal = useAppSelector(state => state.modalReducer);
  const { sendingSmsCode } = useAppSelector(state => state.userReducer);

  const isAuthModalOpened = modal.opened && modal.name === 'auth-modal';

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  useEffect(
    () => () => {
      dispatch(setSendingSms(false));
    },
    [],
  );

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
        <div className={styles.authModal__content}>
          <div className={styles.content__phoneTitle}>Укажите ваш номер телефона</div>
          <PhoneInput />
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
