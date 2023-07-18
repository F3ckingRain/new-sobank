import React from 'react';

import clsx from 'clsx';

import styles from './Tooltip.module.scss';

import { CURRENT_THEME } from '@/config/themeConfig';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';

const Tooltip = () => {
  const navigate = useNavigateWithParams();
  return (
    <div className={clsx(styles.tooltip, `${styles[`tooltip__${CURRENT_THEME}`]}`)}>
      navigate
    </div>
  );
};

export default Tooltip;
