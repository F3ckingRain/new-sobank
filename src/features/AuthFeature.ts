import Cookies from 'js-cookie';

import { AuthApi } from '@/api/AuthApi/AuthApi';
import { NavigateType } from '@/hooks/useNavigateWithParams';
import { setModal } from '@/store/reducers/ModalSlice/ModalSlice';
import {
  setIsAuth,
  setPhoneNumber,
  setSendingSms,
} from '@/store/reducers/UserSlice/UserSlice';
import { AppDispatch, AppStore } from '@/store/redux/store';

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
    })
    .catch(err => {
      if (err.status === 404)
        dispatch(AuthApi.endpoints.sign_up.initiate({ phone }))
          .unwrap()
          .then(() => {
            dispatch(setSendingSms(true));
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
