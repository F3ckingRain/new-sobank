import React, { CSSProperties } from 'react';

import styles from './Footer.module.scss';

import Contacts from '@/components/Contacts/Contacts';
import Socials from '@/components/Socials/Socials';
import Wrapper from '@/containers/Wrapper/Wrapper';
import { Landing } from '@/themes/config';
import { currentDomain } from '@/themes/helpers';

const Footer = () => {
  const footerProps = Landing.footer[currentDomain];

  const socialsWrapperStyle: CSSProperties = {
    borderBottom: '1px solid #e7e7e7',
  };

  return (
    <footer className={styles.footer}>
      <Wrapper style={socialsWrapperStyle}>
        <Socials {...footerProps.socials} />
      </Wrapper>
      <Wrapper>
        <Contacts />
      </Wrapper>
      <Wrapper>
        <div className={styles.accordions}>accordions</div>
      </Wrapper>
      <Wrapper>
        <div className={styles.copyright}>copyright</div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
