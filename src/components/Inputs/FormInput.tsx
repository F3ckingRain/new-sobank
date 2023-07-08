import React, { CSSProperties, FC, useEffect, useState } from 'react';

import ReactInputMask from 'react-input-mask';

import styles from './Input.module.scss';

interface FormInputProps {
  value: string;
  id: string;
  placeholder?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
  onInput?: (value: string) => void;
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
  disabled?: string;
}
const FormInput: FC<FormInputProps> = ({
  label,
  onInput,
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
}) => {
  const [inputValue, setInputValue] = useState<string>(value);
  const [touched, setTouched] = useState<boolean>(!!value);
  const [status, setStatus] = useState<boolean | undefined>(initialStatus);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (validator) {
      return setInputValue(validator(e.target.value));
    }
    return setInputValue(e.target.value);
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    if (validator) {
      return setInputValue(validator(e.target.value));
    }
    return setInputValue(e.target.value);
  };

  useEffect(() => {
    if (onChange) {
      onChange(inputValue);
    }
    if (onInput) {
      onInput(inputValue);
    }
  }, [value, inputValue]);

  return (
    <div className={styles.inputContainer} style={containerInputStyle}>
      {!!label && <label htmlFor={id}>{label}</label>}
      {mask ? (
        <ReactInputMask
          mask={mask}
          value={inputValue}
          onInput={inputHandler}
          onChange={changeHandler}
          className={styles.input}
          minLength={minLength}
          alwaysShowMask
          style={inputStyle}
        />
      ) : (
        <input
          className={styles.input}
          value={inputValue}
          onInput={inputHandler}
          style={inputStyle}
        />
      )}
      {status === false && required && errorMessage && <div>{errorMessage}</div>}
    </div>
  );
};

export default FormInput;
