import React, { CSSProperties, FC } from 'react';

import clsx from 'clsx';

import styles from './CustomButton.module.scss';

import { CURRENT_THEME } from '@/config/themeConfig';

export interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  additionalClassname?: string;
  type?: 'button' | 'submit' | 'reset';
}

const CustomButton: FC<CustomButtonProps> = ({
  children,
  onClick,
  style,
  additionalClassname,
  type = 'button',
}) => (
  <button
    type={type}
    className={clsx(`${styles[`button__${CURRENT_THEME}`]}`, additionalClassname)}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
