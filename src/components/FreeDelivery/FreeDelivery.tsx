import React, { FC } from 'react';

import clsx from 'clsx';

import styles from './FreeDelivery.module.scss';

interface FreeDeliveryProps {
  type?: 'white' | 'blue';
}
const FreeDelivery: FC<FreeDeliveryProps> = ({ type = 'white' }) => (
  <div className={clsx(styles.freeDelivery, styles[type])}>free</div>
);

export default FreeDelivery;
