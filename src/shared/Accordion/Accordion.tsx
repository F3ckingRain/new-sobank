import React, { FC, useState } from 'react';

import clsx from 'clsx';

import styles from './Accordion.module.scss';

interface IAccordion {
  title: string;
  children: React.ReactNode;
}
const Accordion: FC<IAccordion> = ({ title, children }) => {
  const [active, setActive] = useState<boolean>(false);
  const activeToggle = () => {
    setActive(prevState => !prevState);
  };

  return (
    <div
      className={
        active ? clsx(styles.accordion, styles.accordion__active) : styles.accordion
      }
    >
      <button className={styles.accordion__title} onClick={activeToggle} aria-hidden>
        {title}
        <div
          className={active ? clsx(styles.arrow, styles.arrow__active) : styles.arrow}
        />
      </button>
      <div
        className={active ? clsx(styles.content, styles.content__active) : styles.content}
        onClick={event => event.stopPropagation()}
        aria-hidden
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
