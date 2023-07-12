import React, { CSSProperties, FC } from 'react';

import styles from './Banner.module.scss';

import AuthButton from '@/components/AuthButton/AuthButton';
import { BannerProps } from '@/themes/types';

interface IBanner extends BannerProps {
  imageStyle?: CSSProperties;
}

const Banner: FC<IBanner> = ({ title, subtitle, btnText, image, imageStyle }) => (
  <div className={styles.banner}>
    <div className={styles.content}>
      <div className={styles.content__title}>{title}</div>
      <div className={styles.content__subtitle}>{subtitle}</div>
    </div>
    <div className={styles.imgContainer}>
      <img className={styles.imgContainer__img} alt="" src={image} style={imageStyle} />
    </div>
    <AuthButton additionalClassname={styles.btnSubmit} style={{ borderRadius: 10 }}>
      {btnText}
    </AuthButton>
  </div>
);

export default Banner;
