import React, { CSSProperties, FC } from 'react';

import clsx from 'clsx';

import styles from './CustomButton.module.scss';

export interface CustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: CSSProperties;
  additionalClassname?: string;
}
const CustomButton: FC<CustomButtonProps> = ({
  children,
  onClick,
  style,
  additionalClassname,
}) => (
  <button
    type="button"
    className={clsx(styles.button, additionalClassname)}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

export default CustomButton;
