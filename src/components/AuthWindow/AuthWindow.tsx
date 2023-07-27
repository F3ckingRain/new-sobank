import React, { FC } from 'react';

import clsx from 'clsx';

import styles from './AuthWindow.module.scss';

import CodeInput from '@/components/Inputs/CodeInput';
import PhoneInput from '@/components/Inputs/PhoneInput';
import { CURRENT_THEME } from '@/config/themeConfig';
import { ChangePhoneNumber, ConfirmAutologinCode } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';
import { useTimer } from '@/hooks/useTimer';
import { Nullable } from '@/types/default';

interface AuthWindowProps {
  autologinToken: Nullable<string>;
  sendingSmsCode: boolean;
  changingPhone: boolean;
  callback?: () => void;
}
const AuthWindow: FC<AuthWindowProps> = ({
  changingPhone,
  sendingSmsCode,
  autologinToken,
  callback,
}) => {
  const dispatch = useAppDispatch();

  const showChangePhone = !autologinToken && sendingSmsCode && !changingPhone;

  const { time, minutes, seconds } = useTimer({ initTimer: 60, paused: !sendingSmsCode });

  const autologinBtnHandler = () => {
    dispatch(ConfirmAutologinCode());
  };

  const changePhoneBtnHandler = () => {
    dispatch(ChangePhoneNumber());
  };

  return (
    <div className={`${styles[`authWindow__${CURRENT_THEME}`]}`}>
      <div className={`${styles[`authWindow__${CURRENT_THEME}__phone`]}`}>
        Укажите ваш номер телефона
      </div>

      <PhoneInput disabled={!changingPhone} />

      {showChangePhone && (
        <button
          className={`${styles[`authWindow__${CURRENT_THEME}__changePhoneBtn`]}`}
          type="button"
          onClick={changePhoneBtnHandler}
        >
          Изменить номер телефона
        </button>
      )}

      {sendingSmsCode && (
        <div className={`${styles[`codeBlock__${CURRENT_THEME}`]}`}>
          <div className={`${styles[`codeBlock__${CURRENT_THEME}__label`]}`}>
            Введите код подтверждение из СМС
          </div>

          <CodeInput callback={callback} />

          {time === 0 ? (
            <button
              className={clsx(
                `${styles[`sendCodeBtn__${CURRENT_THEME}`]}`,
                `${styles[`sendCodeBtn__${CURRENT_THEME}__active`]}`,
              )}
              type="button"
            >
              Отправить код повторно
            </button>
          ) : (
            <div
              className={`${styles[`sendCodeBtn__${CURRENT_THEME}`]}`}
            >{`Не пришёл код? Запросите повторно через\n${minutes} : ${seconds}`}</div>
          )}
        </div>
      )}

      {!!autologinToken && (
        <button
          className={`${styles[`autoLoginBtn__${CURRENT_THEME}`]}`}
          type="button"
          onClick={autologinBtnHandler}
        >
          Войти
        </button>
      )}
    </div>
  );
};

export default AuthWindow;
