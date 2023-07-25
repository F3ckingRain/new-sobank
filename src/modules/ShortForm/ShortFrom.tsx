import React from 'react';

import styles from './ShortForm.module.scss';

import FormNavbar from '@/components/FormNavbar/FormNavbar';
import { CURRENT_THEME } from '@/config/themeConfig';
import useAppSelector from '@/hooks/useAppSelector';

const ShortFrom = () => {
  const { currentStep, isAuth } = useAppSelector(state => state.userReducer);

  const isUserAuth = currentStep === 'credit_parameters_info' && isAuth;

  const submitHandler = () => {};

  return (
    <section className={styles[`shortFormContainer__${CURRENT_THEME}`]}>
      <FormNavbar />
    </section>
  );
};

export default ShortFrom;
