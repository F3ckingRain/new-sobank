import React, { FC } from 'react';

import styles from './Banner.module.scss';

import { BannerProps } from '@/themes/types';

const Banner: FC<BannerProps> = ({ title, subtitle, btnText, image }) => (
  <div className={styles.banner}>
    <div className={styles.content}>
      <div className={styles.content__title}>{title}</div>
      <div className={styles.content__subtitle}>{subtitle}</div>
    </div>
    <div className={styles.imgContainer}>
      <img className={styles.imgContainer__img} alt="" src={image} />
    </div>
    <button className={styles.btnSubmit}>{btnText}</button>
  </div>
);

export default Banner;
