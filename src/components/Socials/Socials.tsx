import React, { FC } from 'react';

import styles from './Socials.module.scss';

import { SocialsProps } from '@/themes/types';

const Socials: FC<SocialsProps> = ({ title, subtitle, links }) => (
  <div className={styles.socialsBlock}>
    <div className={styles.socialsBlock__title}>{title}</div>
    <div className={styles.socialsBlock__subtitle}>{subtitle}</div>
    <div className={styles.links}>
      {links.map((el, index) => (
        <a
          href={el.link}
          className={styles.linkItem}
          target="_blank"
          key={`${el.link}_${index + 1}`}
          rel="noreferrer"
        >
          <img className={styles.linkItem__img} src={el.image} alt="" />
          <div className={styles.linkItem__name}>{el.name}</div>
        </a>
      ))}
    </div>
  </div>
);

export default Socials;
