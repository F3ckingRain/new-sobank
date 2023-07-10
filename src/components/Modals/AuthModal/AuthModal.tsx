import React from 'react';

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
import { setPhoneNumber, setSendingSms } from '@/store/reducers/UserSlice/UserSlice';

const AuthModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigateWithParams();

  const modal = useAppSelector(state => state.modalReducer);
  const { isAuth, sendingSmsCode, changingPhone, autologinToken } = useAppSelector(
    state => state.userReducer,
  );

  const { time, minutes, seconds } = useTimer({ initTimer: 60, paused: !sendingSmsCode });

  const isAuthModalOpened = modal.opened && modal.name === 'auth-modal';
  const showChangePhone = !autologinToken && sendingSmsCode && !changingPhone;

  const closeModalHandler = () => {
    if (!isAuth && !sendingSmsCode) {
      dispatch(setPhoneNumber(''));
    }
    dispatch(closeModal());
  };

  const autologinBtnHandler = () => {
    dispatch(ConfirmAutologinCode());
  };

  const changePhoneBtnHandler = () => {
    dispatch(ChangePhoneNumber());
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

        <div className={styles.authModal__content}>
          <div className={styles.content__phoneTitle}>Укажите ваш номер телефона</div>

          <PhoneInput disabled={!changingPhone} />

          {showChangePhone && (
            <button
              className={styles.content__changePhoneBtn}
              type="button"
              onClick={changePhoneBtnHandler}
            >
              Изменить номер телефона
            </button>
          )}

          {sendingSmsCode && (
            <div className={styles.codeBlock}>
              <div className={styles.codeBlock__label}>
                Введите код подтверждение из смс
              </div>

              <CodeInput />

              {time === 0 ? (
                <button
                  className={clsx(styles.sendCodeBtn, styles.sendCodeBtn__active)}
                  type="button"
                >
                  Отправить код повторно
                </button>
              ) : (
                <div
                  className={styles.sendCodeBtn}
                >{`Не пришёл код? Запросите повторно через\n${minutes} : ${seconds}`}</div>
              )}
            </div>
          )}

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
