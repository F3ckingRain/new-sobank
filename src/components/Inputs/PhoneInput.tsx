import React, { FC } from 'react';

import FormInput from '@/components/Inputs/FormInput';
import { SendSms } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { resetMask, validatePhone } from '@/utils/validation';

interface PhoneInputProps {
  disabled: boolean;
}
const PhoneInput: FC<PhoneInputProps> = ({ disabled }) => {
  const dispatch = useAppDispatch();

  const { phoneNumber } = useAppSelector(state => state.userReducer);

  const inputHandler = (value: string) => {
    const unmaskedValue = resetMask(value);

    if (unmaskedValue.length === 11) {
      dispatch(SendSms(unmaskedValue));
    }
  };

  return (
    <FormInput
      value={phoneNumber}
      id="phoneInput"
      mask="+7-(999)-999-99-99"
      minLength={18}
      onInput={inputHandler}
      validator={validatePhone}
      containerInputStyle={{ marginTop: 20 }}
      disabled={disabled}
    />
  );
};

export default PhoneInput;
