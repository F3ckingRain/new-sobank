import Cookies from 'js-cookie';

import { Nullable } from '@/types/default';

interface UserType {
  isAuth: boolean;
  phoneNumber: string;
  code: string;
  sendingSmsCode: boolean;
  changingPhone: boolean;
  errorMessage: string;
  autologinToken: Nullable<string>;
}

const initialState: UserType = {
  isAuth: !!Cookies.get('Bearer'),
  phoneNumber: '',
  code: '',
  sendingSmsCode: false,
  changingPhone: true,
  errorMessage: '',
  autologinToken: null,
};

export default initialState;
