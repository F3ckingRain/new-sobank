import React, { FC } from 'react';

import styles from './Banner.module.scss';

import AuthButton from '@/components/AuthButton/AuthButton';
import { CURRENT_THEME } from '@/config/themeConfig';
import { BannerProps } from '@/themes/types';

type IBanner = BannerProps & {
  children?: React.ReactNode;
};

const Banner: FC<IBanner> = ({
  title,
  subtitle,
  btnText,
  image,
  imageStyle,
  children,
}) => (
  <div className={`${styles[`banner__${CURRENT_THEME}`]}`}>
    <div className={`${styles[`content__${CURRENT_THEME}`]}`}>
      <div className={`${styles[`content__${CURRENT_THEME}__title`]}`}>{title}</div>
      <div className={`${styles[`content__${CURRENT_THEME}__subtitle`]}`}>{subtitle}</div>
    </div>

    {children}

    <div className={`${styles[`imgContainer__${CURRENT_THEME}`]}`}>
      <img
        className={`${styles[`imgContainer__${CURRENT_THEME}__img`]}`}
        alt=""
        src={image}
        style={imageStyle}
      />
    </div>

    <AuthButton additionalClassname={`${styles[`btnSubmit__${CURRENT_THEME}`]}`}>
      {btnText}
    </AuthButton>
  </div>
);

export default Banner;
