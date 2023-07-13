import Cookies from 'js-cookie';

import { AuthApi } from '@/api/AuthApi/AuthApi';
import { CodeConfirmRequest } from '@/api/AuthApi/types';
import { NavigateType } from '@/hooks/useNavigateWithParams';
import { closeModal, setModal } from '@/store/reducers/ModalSlice/ModalSlice';
import {
  logIn,
  setAutologinToken,
  setChangingPhone,
  setCode,
  logOut,
  setPhoneNumber,
  setSendingSms,
  setErrorMessage,
} from '@/store/reducers/UserSlice/UserSlice';
import { AppDispatch, AppStore } from '@/store/redux/store';
import { getTokenFromUrl } from '@/utils/autoLogin';

export const OpenAuthModal =
  (navigate: NavigateType, path = 'user/credit/credit_params_info') =>
  (dispatch: AppDispatch, getState: AppStore['getState']) => {
    const { isAuth } = getState().userReducer;

    if (!isAuth) return dispatch(setModal({ name: 'auth-modal', opened: true }));

    return navigate(path);
  };

export const SendSms = (phone: string) => (dispatch: AppDispatch) => {
  dispatch(AuthApi.endpoints.signIn.initiate({ phone }))
    .unwrap()
    .then(() => {
      dispatch(setPhoneNumber(phone));
      dispatch(setSendingSms(true));
      dispatch(setChangingPhone(false));
    })
    .catch(err => {
      if (err.status === 404)
        dispatch(AuthApi.endpoints.signUp.initiate({ phone }))
          .unwrap()
          .then(() => {
            dispatch(setPhoneNumber(phone));
            dispatch(setSendingSms(true));
            dispatch(setChangingPhone(false));
          })
          .catch();
    });
};

export const ConfirmCode =
  ({ code, phone }: CodeConfirmRequest) =>
  (dispatch: AppDispatch) => {
    dispatch(AuthApi.endpoints.confirm.initiate({ phone, code }))
      .unwrap()
      .then(res => {
        // Cookies.set('Bearer', res.token);
        // dispatch(setIsAuth(true));
        dispatch(setErrorMessage(''));
        dispatch(closeModal());
      })
      .catch(err => {
        if (err.status === 400) dispatch(setErrorMessage('Вы ввели неверный код'));
      });
  };

export const GetAutologinData =
  () => (dispatch: AppDispatch, getState: AppStore['getState']) => {
    const { isAuth, phoneNumber } = getState().userReducer;
    const token = getTokenFromUrl();

    if (isAuth || !token || phoneNumber) return;

    dispatch(AuthApi.endpoints.getAutologinData.initiate({ token }))
      .unwrap()
      .then(res => {
        dispatch(setAutologinToken(token));
        dispatch(setPhoneNumber(res.phone));
        dispatch(setCode(res.code));
      })
      .catch(err => {
        if (err.status === 404) {
          console.log(err);
        } else {
          console.log(err);
        }
      });
  };

export const ConfirmAutologinCode =
  () => (dispatch: AppDispatch, getState: AppStore['getState']) => {
    const { phoneNumber, code, autologinToken } = getState().userReducer;

    dispatch(
      AuthApi.endpoints.confirmAutologin.initiate({
        phone: phoneNumber,
        code,
        token: autologinToken as string,
      }),
    )
      .unwrap()
      .then(res => {
        Cookies.set('Bearer', res.token);
        dispatch(logIn());
      });
  };

export const ChangePhoneNumber = () => (dispatch: AppDispatch) => {};

export const LogOut = () => (dispatch: AppDispatch) => {};
