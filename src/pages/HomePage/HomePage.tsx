import React from 'react';

import Banner from '@/components/Banner/Banner';
import FreeDelivery from '@/components/FreeDelivery/FreeDelivery';
import PopularProducts from '@/components/PopularProducts/PopularProducts';
import Wrapper from '@/containers/Wrapper/Wrapper';
import { Landing } from '@/themes/config';
import { currentDomain } from '@/themes/helpers';

const HomePage = () => {
  const bannerProps = Landing.banner[currentDomain].home_page;
  const loanProps = Landing.loan[currentDomain].home_page;

  return (
    <>
      <Wrapper style={{ padding: 0 }}>
        <Banner {...bannerProps} imageStyle={{ right: 3, bottom: 35 }} />
      </Wrapper>

      {!!loanProps.popularProducts && (
        <Wrapper>
          <PopularProducts list={loanProps.popularProducts} />
        </Wrapper>
      )}

      {!!loanProps.freeDelivery && (
        <Wrapper>
          <FreeDelivery list={loanProps.freeDelivery} />
        </Wrapper>
      )}
    </>
  );
};

export default HomePage;
