import React, { FC } from 'react';

import styles from './OurServices.module.scss';

import list, { ServiceItemProps } from '@/components/OurServices/data';
import MobileAppSvg from '@/components/SVG/Services/MobileAppSvg';
import MoneyTransferSvg from '@/components/SVG/Services/MoneyTransferSvg';
import OfflineBankSvg from '@/components/SVG/Services/OfflineBankSvg';
import PromotionSvg from '@/components/SVG/Services/PromotionSvg';
import { CURRENT_THEME } from '@/config/themeConfig';

const serviceSvg: FC<ServiceItemProps['type']> = type => {
  switch (type) {
    case 'mobileApp':
      return <MobileAppSvg />;
    case 'moneyTransfer':
      return <MoneyTransferSvg />;
    case 'offlineBank':
      return <OfflineBankSvg />;
    case 'promotion':
      return <PromotionSvg />;
    default:
      return <MobileAppSvg />;
  }
};
const OurServices = () => (
  <div className={`${styles[`outServices__${CURRENT_THEME}`]}`}>
    <div className={`${styles[`outServices__${CURRENT_THEME}__title`]}`}>
      Наши сервисы
    </div>
    <div className={`${styles[`outServices__${CURRENT_THEME}__list`]}`}>
      {list.map((el, index) => (
        <div
          className={`${styles[`outServices__${CURRENT_THEME}__item`]}`}
          key={`${el.name}_${index + 1}`}
        >
          <div className={styles.svgCircle}>
            <div className={styles.svgCircle__container}>{serviceSvg(el.type)}</div>
          </div>
          <div className={styles.text}>{el.name}</div>
        </div>
      ))}
    </div>
  </div>
);

export default OurServices;
