import React, { CSSProperties, FC, useEffect, useState } from 'react';

import ReactInputMask from 'react-input-mask';

import styles from './Input.module.scss';

import { CURRENT_THEME } from '@/config/themeConfig';

interface FormInputProps {
  value: string;
  id: string;
  placeholder?: string;
  checked?: boolean;
  onInput?: (value: string) => void;
  onChange?: (value: string) => void;
  inputStyle?: CSSProperties;
  containerInputStyle?: CSSProperties;
  mask?: string;
  label?: string;
  required?: boolean;
  errorMessage?: string;
  initialStatus?: boolean;
  validator?: (value: string) => string;
  checker?: (value: string) => boolean;
  autoFocus?: boolean;
  minLength?: number;
  autoComplete?: string;
  disabled?: boolean;
}
const FormInput: FC<FormInputProps> = ({
  label,
  checker,
  mask,
  autoComplete,
  autoFocus,
  disabled,
  required,
  onChange,
  value,
  initialStatus,
  errorMessage,
  checked,
  validator,
  placeholder,
  minLength,
  id,
  containerInputStyle,
  inputStyle,
  onInput,
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [touched, setTouched] = useState<boolean>(!!value);
  const [status, setStatus] = useState<boolean | undefined>(initialStatus);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validator) {
      return setInputValue(validator(e.target.value));
    }
    return setInputValue(e.target.value);
  };

  useEffect(() => {
    if (onChange) return onChange(inputValue);
    if (onInput) return onInput(inputValue);

    return undefined;
  }, [inputValue]);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div
      className={`${styles[`inputContainer__${CURRENT_THEME}`]}`}
      style={containerInputStyle}
    >
      {!!label && (
        <label className={`${styles[`label__${CURRENT_THEME}`]}`} htmlFor={id}>
          {label}
        </label>
      )}

      {mask ? (
        <ReactInputMask
          mask={mask}
          id={id}
          value={inputValue}
          onInput={changeHandler}
          className={`${styles[`input__${CURRENT_THEME}`]}`}
          minLength={minLength}
          alwaysShowMask
          autoComplete={autoComplete || 'off'}
          style={inputStyle}
          readOnly={disabled}
          disabled={disabled}
        />
      ) : (
        <input
          className={`${styles[`input__${CURRENT_THEME}`]}`}
          id={id}
          value={inputValue}
          autoComplete={autoComplete || 'off'}
          onInput={changeHandler}
          style={inputStyle}
          readOnly={disabled}
          disabled={disabled}
        />
      )}

      {status === false && required && errorMessage && (
        <div className={`${styles[`errorMessage__${CURRENT_THEME}`]}`}>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default FormInput;
