import React, { FC } from 'react';

import styles from './PopularProducts.module.scss';

import CashBackSvg from '@/components/SVG/Products/CashBackSvg';
import CaskoSvg from '@/components/SVG/Products/CaskoSvg';
import CreditCardSvg from '@/components/SVG/Products/CreditCardSvg';
import CreditCashSvg from '@/components/SVG/Products/CreditCashSvg';
import HypothecSvg from '@/components/SVG/Products/HypothecSvg';
import InvestmentSvg from '@/components/SVG/Products/InvestmentSvg';
import ScrollContainer from '@/containers/ScrollContainer/ScrollContainer';
import { productType } from '@/themes/types';

interface ProductCard {
  title: string;
  subtitle: string;
  image: productType;
}

const renderSvg = (type: productType) => {
  switch (type) {
    case 'creditCard':
      return <CreditCardSvg />;
    case 'creditCash':
      return <CreditCashSvg />;
    case 'cashback':
      return <CashBackSvg />;
    case 'casko':
      return <CaskoSvg />;
    case 'hypothec':
      return <HypothecSvg />;
    case 'investment':
      return <InvestmentSvg />;
    default:
      return <CreditCardSvg />;
  }
};
const ProductCardItem: FC<ProductCard> = ({ title, image, subtitle }) => (
  <div className={styles.cardItem}>
    <div className={styles.cardItem__image}>{renderSvg(image)}</div>
    <div className={styles.content}>
      <div className={styles.content__title}>{title}</div>
      <div className={styles.content__subtitle}>{subtitle}</div>
    </div>
  </div>
);
const PopularProducts: FC<{ list: ProductCard[] }> = ({ list }) => (
  <div className={styles.popularProducts}>
    <div className={styles.popularProducts__title}>Популярные продукты</div>
    <ScrollContainer>
      {list.map((el, index) => (
        <ProductCardItem {...el} key={`${el.title}_${index + 1}`} />
      ))}
    </ScrollContainer>
  </div>
);

export default PopularProducts;
