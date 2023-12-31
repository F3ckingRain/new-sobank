import React, { CSSProperties } from 'react';

import Advantages from '@/components/Advantages/Advantages';
import Banner from '@/components/Banner/Banner';
import { CURRENT_THEME } from '@/config/themeConfig';
import Wrapper from '@/containers/Wrapper/Wrapper';
import { Landing } from '@/themes/theme';

const CreditCardPage = () => {
  const bannerProps = Landing.banner[CURRENT_THEME].credit_card;
  const loanProps = Landing.loan[CURRENT_THEME].credit_card;

  const bannerWrapperStyle: CSSProperties =
    CURRENT_THEME === 'sobankRedesign'
      ? {
          ...bannerProps.layoutStyle,
        }
      : { padding: 0, ...bannerProps.layoutStyle };

  return (
    <>
      <Wrapper style={bannerWrapperStyle}>
        <Banner {...bannerProps} imageStyle={{ right: 0, bottom: 35 }} />
      </Wrapper>

      {!!loanProps.advantages && (
        <Wrapper>
          <Advantages list={loanProps.advantages.list} />
        </Wrapper>
      )}
      <Wrapper>sfg</Wrapper>
    </>
  );
};

export default CreditCardPage;
