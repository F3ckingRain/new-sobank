import React, { CSSProperties, FC, useCallback } from 'react';

import FormInput from '@/components/Inputs/FormInput';
import { SendSms } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { resetMask, validatePhone } from '@/utils/validation';

interface PhoneInputProps {
  disabled?: boolean;
  callBack?: (value: string) => void;
  containerStyle?: CSSProperties;
}
const PhoneInput: FC<PhoneInputProps> = ({ disabled, callBack, containerStyle }) => {
  const dispatch = useAppDispatch();

  const { phoneNumber } = useAppSelector(state => state.userReducer);

  const containerStyleParam: CSSProperties = {
    marginTop: 20,
    ...containerStyle,
  };

  const inputHandler = useCallback(
    (value: string) => {
      const unmaskedValue = resetMask(value);

      if (callBack) {
        return callBack(unmaskedValue);
      }

      if (unmaskedValue.length === 11) {
        return dispatch(SendSms(unmaskedValue));
      }

      return undefined;
    },
    [phoneNumber, callBack],
  );

  return (
    <FormInput
      value={phoneNumber}
      id="phoneInput"
      mask="+7-(999)-999-99-99"
      minLength={18}
      onInput={inputHandler}
      validator={validatePhone}
      containerInputStyle={containerStyleParam}
      disabled={disabled}
    />
  );
};

export default PhoneInput;
