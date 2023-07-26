import { setCurrentStep } from '@/store/reducers/UserSlice/UserSlice';
import { AppDispatch } from '@/store/redux/store';

export const SendCreditParameters = () => (dispatch: AppDispatch) => {
  dispatch(setCurrentStep('work_info'));
};
