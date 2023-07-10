import React, { CSSProperties, FC } from 'react';

import styles from './GetCreditCard.module.scss';

import AuthButton from '@/components/AuthButton/AuthButton';
import PhoneInput from '@/components/Inputs/PhoneInput';
import useAppDispatch from '@/hooks/useAppDispatch';
import { setPhoneNumber } from '@/store/reducers/UserSlice/UserSlice';

interface GetCreditProps {
  children?: React.ReactNode;
  containerClassName?: string;
  contentClassName?: string;
  titleStyle?: CSSProperties;
  subtitleStyle?: CSSProperties;
  image?: string;
  title?: string;
  subtitle?: string;
  phoneBlock?: boolean;
  btnText?: string;
}
const GetCreditCard: FC<GetCreditProps> = ({
  children,
  title,
  subtitle,
  btnText,
  containerClassName,
  contentClassName,
  phoneBlock,
  titleStyle,
  subtitleStyle,
  image,
}) => {
  const dispatch = useAppDispatch();

  const imageContainerStyle: CSSProperties = {
    backgroundImage: `url(${image})`,
  };
  const phoneInputHandler = (value: string) => {
    dispatch(setPhoneNumber(value));
  };

  return (
    <div className={containerClassName || styles.getCreditContainer}>
      {image && <div className={styles.imageContainer} style={imageContainerStyle} />}
      <div className={contentClassName || styles.getCreditContent}>
        {children}
        {title && (
          <div className={styles.getCreditContent__title} style={titleStyle}>
            {title}
          </div>
        )}
        {subtitle && (
          <div className={styles.getCreditContent__subtitle} style={subtitleStyle}>
            {subtitle}
          </div>
        )}
        {phoneBlock && (
          <PhoneInput containerStyle={{ marginTop: 16 }} callBack={phoneInputHandler} />
        )}
        {btnText && (
          <AuthButton additionalClassname={styles.btnSubmit}>{btnText}</AuthButton>
        )}
      </div>
    </div>
  );
};

export default GetCreditCard;
