import React from 'react';

import FormInput from '@/components/Inputs/FormInput';
import { ConfirmCode } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { resetMask } from '@/utils/validation';

const CodeInput = () => {
  const dispatch = useAppDispatch();

  const { phoneNumber, code } = useAppSelector(state => state.userReducer);

  const codeHandler = (value: string) => {
    const unmaskedValue = resetMask(value);

    if (unmaskedValue.length === 4) {
      dispatch(ConfirmCode({ code: unmaskedValue, phone: phoneNumber }));
    }
  };

  return <FormInput value={code} onChange={codeHandler} id="sms-code-input" />;
};

export default CodeInput;
