import Cookies from 'js-cookie';

import { AuthApi } from '@/api/AuthApi/AuthApi';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { NavigateType } from '@/hooks/useNavigateWithParams';
import { setModal } from '@/store/reducers/ModalSlice/ModalSlice';
import {
  setAutologinToken,
  setChangingPhone,
  setCode,
  setIsAuth,
  setPhoneNumber,
  setSendingSms,
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
  dispatch(AuthApi.endpoints.sign_in.initiate({ phone }))
    .unwrap()
    .then(() => {
      dispatch(setSendingSms(true));
      dispatch(setChangingPhone(false));
    })
    .catch(err => {
      if (err.status === 404)
        dispatch(AuthApi.endpoints.sign_up.initiate({ phone }))
          .unwrap()
          .then(() => {
            dispatch(setSendingSms(true));
            dispatch(setChangingPhone(false));
          })
          .catch();
    });
};

export const ConfirmCode = (code: string, phone: string) => (dispatch: AppDispatch) => {
  dispatch(AuthApi.endpoints.confirm.initiate({ phone, code })).then(res => {
    console.log(res);
    // Cookies.set('Bearer', res);
    dispatch(setPhoneNumber(phone));
    dispatch(setIsAuth(true));
  });
};

export const GetAutologinData =
  () => (dispatch: AppDispatch, getState: AppStore['getState']) => {
    const { isAuth, phoneNumber } = getState().userReducer;
    const token = getTokenFromUrl();

    if (isAuth || !token || phoneNumber) return;

    dispatch(AuthApi.endpoints.get_autologin_data.initiate({ token }))
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
