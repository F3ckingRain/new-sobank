import React, { CSSProperties, FC } from 'react';

import styles from './Banner.module.scss';

import AuthButton from '@/components/AuthButton/AuthButton';
import { CURRENT_THEME } from '@/config/themeConfig';
import { BannerProps } from '@/themes/types';

interface IBanner extends BannerProps {
  imageStyle?: CSSProperties;
}

const Banner: FC<IBanner> = ({ title, subtitle, btnText, image, imageStyle }) => (
  <div className={`${styles[`banner__${CURRENT_THEME}`]}`}>
    <div className={`${styles[`content__${CURRENT_THEME}`]}`}>
      <div className={`${styles[`content__${CURRENT_THEME}__title`]}`}>{title}</div>
      <div className={`${styles[`content__${CURRENT_THEME}__subtitle`]}`}>{subtitle}</div>
    </div>
    <div className={`${styles[`imgContainer__${CURRENT_THEME}`]}`}>
      <img
        className={`${styles[`imgContainer__${CURRENT_THEME}__img`]}`}
        alt=""
        src={image}
        style={imageStyle}
      />
    </div>
    <AuthButton
      additionalClassname={`${styles[`btnSubmit__${CURRENT_THEME}`]}`}
      style={{ borderRadius: 10 }}
    >
      {btnText}
    </AuthButton>
  </div>
);

export default Banner;
