import React, { FC } from 'react';

import styles from './Socials.module.scss';

import TelegramSvg from '@/components/SVG/Socials/TelegramSvg';
import ViberSvg from '@/components/SVG/Socials/ViberSvg';
import VkSvg from '@/components/SVG/Socials/VkSvg';
import { CURRENT_THEME } from '@/config/themeConfig';
import { SocialsProps, socialType } from '@/themes/types';

const renderSocialSvg = (type: socialType) => {
  switch (type) {
    case 'vk':
      return <VkSvg />;
    case 'telegram':
      return <TelegramSvg />;
    case 'viber':
      return <ViberSvg />;
    default:
      return <VkSvg />;
  }
};
const Socials: FC<SocialsProps> = ({ title, subtitle, links }) => (
  <div className={`${styles[`socialsBlock__${CURRENT_THEME}`]}`}>
    <div className={`${styles[`socialsBlock__${CURRENT_THEME}__title`]}`}>{title}</div>
    <div className={`${styles[`socialsBlock__${CURRENT_THEME}__subtitle`]}`}>
      {subtitle}
    </div>
    <div className={`${styles[`links__${CURRENT_THEME}`]}`}>
      {links.map((el, index) => (
        <a
          href={el.link}
          className={`${styles[`linkItem__${CURRENT_THEME}`]}`}
          target="_blank"
          key={`${el.link}_${index + 1}`}
          rel="noreferrer"
        >
          <div className={`${styles[`linkItem__${CURRENT_THEME}__img`]}`}>
            {renderSocialSvg(el.image)}
          </div>
          <div className={`${styles[`linkItem__${CURRENT_THEME}__name`]}`}>{el.name}</div>
        </a>
      ))}
    </div>
  </div>
);

export default Socials;
