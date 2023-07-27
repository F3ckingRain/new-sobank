import React, { CSSProperties, FC, useEffect } from 'react';

import FormInput from '@/components/Inputs/FormInput';
import { ConfirmCode } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { resetMask } from '@/utils/validation';

interface CodeInputProps {
  callback?: () => void;
}

const CodeInput: FC<CodeInputProps> = ({ callback }) => {
  const dispatch = useAppDispatch();

  const { phoneNumber, code, errorMessage } = useAppSelector(state => state.userReducer);

  const containerStyle: CSSProperties = {};

  const inputStyle: CSSProperties = {
    textAlign: 'center',
    letterSpacing: 5,
    backgroundColor: '#fff',
  };

  const codeHandler = (value: string) => {
    const unmaskedValue = resetMask(value);

    if (unmaskedValue.length === 4) {
      if (callback) {
        try {
          dispatch(ConfirmCode({ code: unmaskedValue, phone: phoneNumber }));
          callback();
        } catch {
          console.log('Не удалось отправить данные');
        }
      } else dispatch(ConfirmCode({ code: unmaskedValue, phone: phoneNumber }));
    }
  };

  useEffect(() => {
    const inputCode = document.getElementById('sms-code-input');

    if (inputCode) inputCode.focus();
  }, []);

  return (
    <FormInput
      value={code}
      mask="9 9 9 9"
      onChange={codeHandler}
      id="sms-code-input"
      inputStyle={inputStyle}
      containerInputStyle={containerStyle}
      errorMessage={errorMessage}
      autoFocus
    />
  );
};

export default CodeInput;
