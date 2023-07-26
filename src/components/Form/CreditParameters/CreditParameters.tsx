import React from 'react';

import styles from './CreditParameters.module.scss';

import { CURRENT_THEME } from '@/config/themeConfig';

const CreditParameters = () => (
  <form className={`${styles[`creditParameters__${CURRENT_THEME}`]}`}>cpi</form>
);

export default CreditParameters;
