import React, { FC } from 'react';

import styles from './InstallmetnPartners.module.scss';

import installmentPartners, {
  InstallmentProps,
} from '@/components/InstallmentPartners/data';
import { CURRENT_THEME } from '@/config/themeConfig';
import ScrollContainer from '@/containers/ScrollContainer/ScrollContainer';

const InstallmentChildItem: FC<InstallmentProps> = ({ image, title }) => (
  <div className={styles.installmentItem}>
    <div className={styles.imageContainer}>
      <img src={image} alt="" className={styles.imageContainer__img} />
    </div>
    <div className={styles.text}>{title}</div>
  </div>
);
const InstallmentPartners = () => (
  <div className={`${styles[`installmentPartners__${CURRENT_THEME}`]}`}>
    <div className={`${styles[`installmentPartners__${CURRENT_THEME}__title`]}`}>
      Рассрочка в магазинах партнёрах
    </div>

    <ScrollContainer navigable>
      {installmentPartners.map((el, index) => (
        <InstallmentChildItem {...el} key={`${el.title}_${index + 1}`} />
      ))}
    </ScrollContainer>
  </div>
);

export default InstallmentPartners;
