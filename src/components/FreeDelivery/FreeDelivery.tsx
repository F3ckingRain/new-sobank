import React, { FC } from 'react';

import clsx from 'clsx';

import styles from './FreeDelivery.module.scss';

import CounterItem from '@/components/CounterItem/CounterItem';

interface IFreeDelivery {
  list: string[];
  type?: 'white' | 'blue';
}

const FreeDelivery: FC<IFreeDelivery> = ({ list, type = 'white' }) => (
  <div className={clsx(styles.freeDelivery, styles[type])}>
    <div className={styles.freeDelivery__title}>Бесплатная доставка до дома</div>
    <div className={styles.freeDelivery__content}>
      {list.map((el, index) => (
        <CounterItem str={el} id={index + 1} key={`${el}_${index + 1}`} />
      ))}
    </div>
  </div>
);

export default FreeDelivery;
