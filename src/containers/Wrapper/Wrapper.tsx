import React, { CSSProperties, FC } from 'react';

import styles from './Wrapper.module.scss';

interface WrapperProps {
  children: React.ReactNode;
  style?: CSSProperties;
}
const Wrapper: FC<WrapperProps> = ({ children, style }) => (
  <section className={styles.wrapper} style={style}>
    {children}
  </section>
);

export default Wrapper;
