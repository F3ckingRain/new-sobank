import React, { useEffect } from 'react';

import clsx from 'clsx';

import styles from './AuthModal.module.scss';

import CodeInput from '@/components/Inputs/CodeInput';
import PhoneInput from '@/components/Inputs/PhoneInput';
import { ChangePhoneNumber, ConfirmAutologinCode } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';
import { useTimer } from '@/hooks/useTimer';
import { closeModal } from '@/store/reducers/ModalSlice/ModalSlice';
import { setSendingSms } from '@/store/reducers/UserSlice/UserSlice';

const AuthModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigateWithParams();
  const { minutes, seconds } = useTimer({ initTimer: 3600 });

  const modal = useAppSelector(state => state.modalReducer);
  const { sendingSmsCode, changingPhone, autologinToken } = useAppSelector(
    state => state.userReducer,
  );

  const isAuthModalOpened = modal.opened && modal.name === 'auth-modal';
  const showChangePhone = true; //! autologinToken && sendingSmsCode && !changingPhone;

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  const autologinBtnHandler = () => {
    dispatch(ConfirmAutologinCode());
  };

  const changePhoneBtnHandler = () => {
    dispatch(ChangePhoneNumber());
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

          <PhoneInput disabled={changingPhone === false} />

          {showChangePhone && (
            <button
              className={styles.content__changePhoneBtn}
              type="button"
              onClick={changePhoneBtnHandler}
            >
              Изменить номер телефона
            </button>
          )}

          <div className={styles.codeBlock}>
            <div className={styles.codeBlock__label}>dd</div>
            <CodeInput />
          </div>

          {!!autologinToken && (
            <button
              className={styles.autologinBtn}
              type="button"
              onClick={autologinBtnHandler}
            >
              Войти
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
