import Cookies from 'js-cookie';

import { Nullable } from '@/types/default';

export type CurrentStepType =
  | 'credit_parameters_info'
  | 'work_info'
  | 'additional_info'
  | 'passport_info';

interface UserType {
  isAuth: boolean;
  phoneNumber: string;
  code: string;
  sendingSmsCode: boolean;
  changingPhone: boolean;
  errorMessage: string;
  autologinToken: Nullable<string>;
  currentStep: CurrentStepType;
}

const initialState: UserType = {
  isAuth: !!Cookies.get('Bearer'),
  phoneNumber: '',
  code: '',
  sendingSmsCode: false,
  changingPhone: true,
  errorMessage: '',
  autologinToken: null,
  currentStep: 'credit_parameters_info',
};

export default initialState;
