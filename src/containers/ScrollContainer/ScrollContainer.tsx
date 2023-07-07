import React, { FC } from 'react';

import styles from './ScrollContainer.module.scss';

interface ScrollContainerProps {
  children: React.ReactNode;
}
const ScrollContainer: FC<ScrollContainerProps> = ({ children }) => (
  <div className={styles.scrollContainer}>{children}</div>
);

export default ScrollContainer;
