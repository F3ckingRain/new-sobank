import React, { CSSProperties } from 'react';

import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import styles from './Footer.module.scss';

import Contacts from '@/components/Contacts/Contacts';
import Socials from '@/components/Socials/Socials';
import Wrapper from '@/containers/Wrapper/Wrapper';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';
import Accordion from '@/shared/Accordion/Accordion';
import { Landing } from '@/themes/config';
import { currentDomain } from '@/themes/helpers';
import { footerLinkType } from '@/themes/types';

const renderAccordionContent = (content: string[] | footerLinkType[]) => {
  const navigate = useNavigateWithParams();
  const { pathname } = useLocation();

  const navigateHandler = (path?: string) => {
    if (!path) return;
    navigate(path);
  };

  if (typeof content[0] === 'string')
    return (content as string[]).map((el, index) => (
      <div className={styles.accordions__text} key={`${el}_${index + 1}`}>
        {el}
      </div>
    ));
  return (content as footerLinkType[]).map((el, index) => (
    <button
      className={
        el.path === pathname
          ? clsx(styles.accordions__link, styles.accordions__linkActive)
          : styles.accordions__link
      }
      onClick={() => navigateHandler(el.path)}
      disabled={!el.path}
      key={`${el.name}_${index + 1}`}
    >
      {el.name}
    </button>
  ));
};

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
        <div className={styles.accordions}>
          {footerProps.accordions.map((el, index) => (
            <Accordion title={el.title} key={`accordion_${index + 1}`}>
              {renderAccordionContent(el.content)}
            </Accordion>
          ))}
        </div>
      </Wrapper>

      <Wrapper>
        <div className={styles.copyright}>{footerProps.copyright}</div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
