import React, { FC } from 'react';

import styles from './CounterItem.module.scss';

interface CounterItemProps {
  str: string;
  id: number;
}
const CounterItem: FC<CounterItemProps> = ({ str, id }) => (
  <div className={styles.counterItem}>
    <div className={styles.counterItem__id}>{id}</div>
    <div className={styles.counterItem__text}>{str}</div>
  </div>
);

export default CounterItem;
