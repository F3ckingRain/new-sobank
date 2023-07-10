import Cookies from 'js-cookie';

interface UserType {
  isAuth: boolean;
  phoneNumber: string;
  code: string;
  sendingSmsCode: boolean;
  changingPhone: boolean;
  autologinToken?: string;
}

const initialState: UserType = {
  isAuth: !!Cookies.get('Bearer'),
  phoneNumber: '',
  code: '',
  sendingSmsCode: false,
  changingPhone: true,
  autologinToken: undefined,
};

export default initialState;
