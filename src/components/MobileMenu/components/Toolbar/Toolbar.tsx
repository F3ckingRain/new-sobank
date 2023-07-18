import React from 'react';

import clsx from 'clsx';

import styles from './Toolbar.module.scss';

import { toolbarLinks } from '@/components/MobileMenu/data';
import MobileMenuCardSvg from '@/components/SVG/MobileMenu/MobileMenuCardSvg';
import MobileMenuCashSvg from '@/components/SVG/MobileMenu/MobileMenuCashSvg';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';

const renderToolbarLink = (name: string, active: boolean) => {
  const color = active ? '#56C7F5' : '#2C363C';

  switch (name) {
    case 'Карты':
      return <MobileMenuCardSvg color={color} />;
    case 'Кредиты':
      return <MobileMenuCashSvg color={color} />;
    default:
      return <MobileMenuCardSvg color={color} />;
  }
};

const Toolbar = () => {
  const navigate = useNavigateWithParams();

  const clickHandler = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.toolbar}>
      {toolbarLinks.map((el, index) => (
        <button
          className={styles.toolbar__item}
          onClick={() => clickHandler(el.path)}
          key={`${el.path}_${index + 1}`}
        >
          <div className={styles.toolbar__svgContainer}>
            {renderToolbarLink(el.name, el.path === window.location.pathname)}
          </div>
          <div
            className={
              el.path === window.location.pathname
                ? clsx(styles.toolbar__name, styles.toolbar__active)
                : styles.toolbar__name
            }
          >
            {el.name}
          </div>
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
