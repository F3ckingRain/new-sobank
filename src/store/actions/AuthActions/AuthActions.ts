import { AuthApi } from '@/api/AuthApi/AuthApi';
import { setCode, setPhoneNumber } from '@/store/reducers/UserSlice/UserSlice';
import { AppDispatch, AppStore } from '@/store/redux/store';
import { getTokenFromUrl } from '@/utils/autoLogin';

export const GetAutologinData =
  () => (dispatch: AppDispatch, getState: AppStore['getState']) => {
    const { isAuth, phoneNumber } = getState().userReducer;
    const token = getTokenFromUrl();

    if (isAuth || !token || phoneNumber) return;

    dispatch(AuthApi.endpoints.get_autologin_data.initiate({ token }))
      .unwrap()
      .then(res => {
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
