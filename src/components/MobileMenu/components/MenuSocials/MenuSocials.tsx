import React from 'react';

import styles from './MenuSocials.module.scss';

import Socials from '@/components/Socials/Socials';
import { CURRENT_THEME } from '@/config/themeConfig';
import { Landing } from '@/themes/theme';

const MenuSocials = () => (
  <div className={`${styles[`socials__${CURRENT_THEME}`]}`}>
    <Socials
      title="Хотите получать в будущем уже готовые одобренные предложения?"
      subtitle=""
      links={Landing.footer[CURRENT_THEME].socials.links}
    />
    <div className={`${styles[`divider__${CURRENT_THEME}`]}`} />
    <div className={`${styles[`contacts__${CURRENT_THEME}`]}`}>
      <div className={`${styles[`socials__${CURRENT_THEME}__text`]}`}>
        +7(495)-128-83-34
      </div>
      <div className={`${styles[`socials__${CURRENT_THEME}__text`]}`}>
        support@card-online.su
      </div>
    </div>
  </div>
);

export default MenuSocials;
