import React, { FC } from 'react';

import styles from './PopularProducts.module.scss';

import ScrollContainer from '@/containers/ScrollContainer/ScrollContainer';

interface ProductCard {
  title: string;
  subtitle: string;
  image: string;
}
const ProductCardItem: FC<ProductCard> = ({ title, image, subtitle }) => (
  <div className={styles.cardItem}>
    <img className={styles.cardItem__image} src={image} alt="" />
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
