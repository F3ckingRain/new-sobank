import React from 'react';

import Advantages from '@/components/Advantages/Advantages';
import Banner from '@/components/Banner/Banner';
import MainBlock from '@/components/MainBlock/MainBlock';
import { CURRENT_THEME } from '@/config/themeConfig';
import Wrapper from '@/containers/Wrapper/Wrapper';
import { Landing } from '@/themes/theme';

const CreditCashPage = () => {
  const bannerProps = Landing.banner[CURRENT_THEME].credit_cash;
  const loanProps = Landing.loan[CURRENT_THEME].credit_cash;

  return (
    <>
      <Wrapper style={{ padding: 0 }}>
        <Banner {...bannerProps} />
      </Wrapper>

      {!!loanProps.advantages && (
        <Wrapper>
          <Advantages list={loanProps.advantages} />
        </Wrapper>
      )}

      {!!loanProps.getCredit && <MainBlock {...loanProps.getCredit} />}
    </>
  );
};

export default CreditCashPage;
