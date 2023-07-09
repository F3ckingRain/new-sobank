import Cookies from 'js-cookie';

import { getTokenFromUrl } from '@/utils/autoLogin';

interface UserType {
  isAuth: boolean;
  phoneNumber: string;
  code: string;
  sendingSmsCode: boolean;
  changingPhone?: boolean;
  autologinToken?: string;
}

const initialState: UserType = {
  isAuth: !!Cookies.get('Bearer'),
  phoneNumber: '',
  code: '',
  sendingSmsCode: false,
  changingPhone: undefined,
  autologinToken: getTokenFromUrl(),
};

export default initialState;
