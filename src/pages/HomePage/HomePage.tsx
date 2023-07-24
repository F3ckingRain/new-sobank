import React, { CSSProperties } from 'react';

import Banner from '@/components/Banner/Banner';
import Exchange from '@/components/Exchange/Exchange';
import GetCreditCard from '@/components/GetCreditCard/GetCreditCard';
import InstallmentPartners from '@/components/InstallmentPartners/InstallmentPartners';
import MainBlock from '@/components/MainBlock/MainBlock';
import OurServices from '@/components/OurServices/OurServices';
import PopularProducts from '@/components/PopularProducts/PopularProducts';
import { CURRENT_THEME } from '@/config/themeConfig';
import Wrapper from '@/containers/Wrapper/Wrapper';
import { Landing } from '@/themes/theme';

const HomePage = () => {
  const bannerProps = Landing.banner[CURRENT_THEME].home_page;
  const loanProps = Landing.loan[CURRENT_THEME].home_page;

  const bannerWrapperStyle: CSSProperties =
    CURRENT_THEME === 'sobankRedesign'
      ? {
          ...bannerProps.layoutStyle,
        }
      : { padding: 0, ...bannerProps.layoutStyle };

  return (
    <>
      <Wrapper style={bannerWrapperStyle}>
        <Banner {...bannerProps} />
      </Wrapper>

      {!!loanProps.popularProducts && (
        <Wrapper>
          <PopularProducts list={loanProps.popularProducts.list} />
        </Wrapper>
      )}

      {!!loanProps.freeDelivery && <MainBlock {...loanProps.freeDelivery} />}

      {!!loanProps.freeCard && (
        <Wrapper>
          <GetCreditCard {...loanProps.freeCard} btnText="Получить карту" phoneBlock />
        </Wrapper>
      )}

      {!!loanProps.getCredit && <MainBlock {...loanProps.getCredit} />}

      <Wrapper>
        <InstallmentPartners />
      </Wrapper>

      <Wrapper>
        <OurServices />
      </Wrapper>

      <Wrapper>
        <Exchange />
      </Wrapper>
    </>
  );
};

export default HomePage;
