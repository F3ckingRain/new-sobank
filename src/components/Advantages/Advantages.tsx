import React, { FC } from 'react';

import styles from './Advantages.module.scss';

import CashBackSvg from '@/components/SVG/Products/CashBackSvg';
import CreditCashSvg from '@/components/SVG/Products/CreditCashSvg';
import HypothecSvg from '@/components/SVG/Products/HypothecSvg';
import PercentSvg from '@/components/SVG/Products/PercentSvg';
import PeriodSvg from '@/components/SVG/Products/PeriodSvg';
import RefinancingSvg from '@/components/SVG/Products/RefinancingSvg';
import { advantageType } from '@/themes/types';

type AdvantagesProps = { type: advantageType; title: string; subtitle: string }[];

const renderAdvantageSvg = (type: advantageType) => {
  switch (type) {
    case 'limit':
      return <CreditCashSvg />;
    case 'period':
      return <PeriodSvg />;
    case 'delivery':
      return <HypothecSvg />;
    case 'percent':
      return <PercentSvg />;
    case 'cashback':
      return <CashBackSvg />;
    case 'refinance':
      return <RefinancingSvg />;
    default:
      return <CreditCashSvg />;
  }
};
const Advantages: FC<{ list: AdvantagesProps }> = ({ list }) => (
  <div className={styles.advantages}>
    <div className={styles.advantages__title}>Преимущества</div>
    <div className={styles.advantages__content}>
      {list.map((el, index) => (
        <div className={styles.item} key={`${el.title}_${index + 1}`}>
          <div className={styles.item__svgContainer}>{renderAdvantageSvg(el.type)}</div>
          <div className={styles.item__content}>
            <div className={styles.item__title}>{el.title}</div>
            <div className={styles.item__subtitle}>{el.subtitle}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Advantages;
