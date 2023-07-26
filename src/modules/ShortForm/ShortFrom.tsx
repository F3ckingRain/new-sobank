import React from 'react';

import clsx from 'clsx';

import styles from './ShortForm.module.scss';

import AuthWindow from '@/components/AuthWindow/AuthWindow';
import CreditParameters from '@/components/Form/CreditParameters/CreditParameters';
import WorkInfo from '@/components/Form/WorkInfo/WorkInfo';
import FormNavbar from '@/components/FormNavbar/FormNavbar';
import { CURRENT_THEME } from '@/config/themeConfig';
import { SendCreditParameters } from '@/features/FormFeatures';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import CustomButton from '@/shared/CustomButton/CustomButton';
import { CurrentStepType } from '@/store/reducers/UserSlice/data';
import { setCurrentStep } from '@/store/reducers/UserSlice/UserSlice';

const getTranslate = (step: CurrentStepType): number => {
  switch (step) {
    case 'credit_parameters_info':
      return 0;

    case 'work_info':
      return 100;

    case 'additional_info':
      return 200;

    case 'passport_info':
      return 300;

    default:
      return 0;
  }
};

const ShortFrom = () => {
  const dispatch = useAppDispatch();

  const { currentStep, isAuth, autologinToken, sendingSmsCode, changingPhone } =
    useAppSelector(state => state.userReducer);

  const isUserAuth = currentStep === 'credit_parameters_info' && isAuth;
  const showButtonEscape = isAuth && currentStep !== 'credit_parameters_info';
  const translate = getTranslate(currentStep);

  const onAuthHandler = () => {
    dispatch(SendCreditParameters());
  };

  const submitHandler = () => {
    if (!isUserAuth) return dispatch(setCurrentStep('work_info'));

    return onAuthHandler();
  };

  const resetHandler = () => {
    if (currentStep === 'passport_info')
      return dispatch(setCurrentStep('additional_info'));

    if (currentStep === 'additional_info') return dispatch(setCurrentStep('work_info'));

    return dispatch(setCurrentStep('credit_parameters_info'));
  };

  return (
    <section className={styles[`shortFormContainer__${CURRENT_THEME}`]}>
      <FormNavbar currentStep={currentStep} />

      <div className={styles.scrollWindow} style={{ translate: `-${translate}% 0` }}>
        <div className={styles.scrollWindow__item}>
          <CreditParameters />
        </div>

        <div className={styles.scrollWindow__item}>
          {isAuth ? (
            <AuthWindow
              autologinToken={autologinToken}
              sendingSmsCode={sendingSmsCode}
              changingPhone={changingPhone}
              callback={onAuthHandler}
            />
          ) : (
            <WorkInfo />
          )}
        </div>
      </div>

      <div className={`${styles[`buttons__${CURRENT_THEME}`]}`}>
        <CustomButton
          onClick={submitHandler}
          additionalClassname={`${styles[`buttons__${CURRENT_THEME}__btn`]}`}
          type="submit"
        >
          Далее
        </CustomButton>

        {showButtonEscape && (
          <CustomButton
            additionalClassname={clsx(
              `${styles[`buttons__${CURRENT_THEME}__btn`]}`,
              `${styles[`buttons__${CURRENT_THEME}__reset`]}`,
            )}
            type="reset"
            onClick={resetHandler}
          >
            Назад
          </CustomButton>
        )}
      </div>
    </section>
  );
};

export default ShortFrom;
