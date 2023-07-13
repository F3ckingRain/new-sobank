import React from 'react';

import Advantages from '@/components/Advantages/Advantages';
import Banner from '@/components/Banner/Banner';
import MainBlock from '@/components/MainBlock/MainBlock';
import Wrapper from '@/containers/Wrapper/Wrapper';
import { Landing } from '@/themes/config';
import { currentDomain } from '@/themes/helpers';

const CreditCashPage = () => {
  const bannerProps = Landing.banner[currentDomain].credit_cash;
  const loanProps = Landing.loan[currentDomain].credit_cash;

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
