import React, { FC } from 'react';

import { CurrentStepType } from '@/store/reducers/UserSlice/data';

interface FormNavbarProps {
  currentStep: CurrentStepType;
}
const FormNavbar: FC<FormNavbarProps> = ({ currentStep }) => <div>s</div>;

export default FormNavbar;
