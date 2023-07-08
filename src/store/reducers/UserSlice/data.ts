import Cookies from 'js-cookie';

interface UserType {
  isAuth: boolean;
  phoneNumber: string;
  code: string;
  sendingSmsCode: boolean;
}

const initialState: UserType = {
  isAuth: !!Cookies.get('Bearer'),
  phoneNumber: '',
  code: '',
  sendingSmsCode: false,
};

export default initialState;
