import React from 'react';

import Advantages from '@/components/Advantages/Advantages';
import Banner from '@/components/Banner/Banner';
import Wrapper from '@/containers/Wrapper/Wrapper';
import { Landing } from '@/themes/config';
import { currentDomain } from '@/themes/helpers';

const CreditCardPage = () => {
  const bannerProps = Landing.banner[currentDomain].credit_card;
  const loanProps = Landing.loan[currentDomain].credit_card;

  return (
    <>
      <Wrapper style={{ padding: 0 }}>
        <Banner {...bannerProps} imageStyle={{ right: 0, bottom: 35 }} />
      </Wrapper>

      {!!loanProps.advantages && (
        <Wrapper>
          <Advantages list={loanProps.advantages} />
        </Wrapper>
      )}
      <Wrapper>sfg</Wrapper>
    </>
  );
};

export default CreditCardPage;
