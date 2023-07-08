import React, { FC } from 'react';

import { OpenAuthModal } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import useLocalStorage from '@/hooks/useLocalStorage';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';
import CustomButton, { CustomButtonProps } from '@/shared/CustomButton/CustomButton';

const AuthButton: FC<CustomButtonProps> = ({ children, style, additionalClassname }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigateWithParams();
  const ls = useLocalStorage();

  const { showcase } = useAppSelector(state => state.modalReducer);

  const showCaseHandler = () => {
    ls.set('showcase', true);

    window.open(window.location.href, '_blank');

    setTimeout(() => {
      window.location.replace(`https://cento-finance.ru${window.location.search}`);
    }, 2000);
  };

  const clickHandler = () => {
    if (!showcase) {
      showCaseHandler();
    }
    return dispatch(OpenAuthModal(navigate));
  };

  return (
    <CustomButton
      onClick={clickHandler}
      style={style}
      additionalClassname={additionalClassname}
    >
      {children}
    </CustomButton>
  );
};

export default AuthButton;
