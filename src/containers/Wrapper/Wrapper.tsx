import React, { CSSProperties, FC } from 'react';

import clsx from 'clsx';

import styles from './Wrapper.module.scss';

import { CURRENT_THEME } from '@/config/themeConfig';

interface WrapperProps {
  children: React.ReactNode;
  style?: CSSProperties;
}
const Wrapper: FC<WrapperProps> = ({ children, style }) => (
  <section
    className={clsx(styles.wrapper, `${styles[`wrapper__${CURRENT_THEME}`]}`)}
    style={style}
  >
    {children}
  </section>
);

export default Wrapper;
