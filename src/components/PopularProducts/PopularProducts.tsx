import React, { FC } from 'react';

import ScrollContainer from '@/containers/ScrollContainer/ScrollContainer';

interface ProductCard {
  title: string;
  subtitle: string;
  image: string;
}
const ProductCardItem: FC<ProductCard> = ({ title, image, subtitle }) => (
  <div>
    <img src={image} alt="" />
    <div>
      <div>{title}</div>
      <div>{subtitle}</div>
    </div>
  </div>
);
const PopularProducts: FC<{ list: ProductCard[] }> = ({ list }) => (
  <div>
    <div>title</div>
    <ScrollContainer>
      {list.map((el, index) => (
        <ProductCardItem {...el} key={`${el.title}_${index + 1}`} />
      ))}
    </ScrollContainer>
  </div>
);

export default PopularProducts;
