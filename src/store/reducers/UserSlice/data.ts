import Cookies from 'js-cookie';

interface UserType {
  isAuth: boolean;
  phoneNumber: string;
  code: string;
}

const initialState: UserType = {
  isAuth: !!Cookies.get('Bearer'),
  phoneNumber: '',
  code: '',
};

export default initialState;
