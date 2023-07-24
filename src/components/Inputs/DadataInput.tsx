import React from 'react';

import searchIcon from '../../assets/Icons/Redesign/search.svg';

import FormInput from '@/components/Inputs/FormInput';
import useAppDispatch from '@/hooks/useAppDispatch';

const DadataInput = () => {
  const dispatch = useAppDispatch();

  return (
    <FormInput
      containerInputStyle={{
        padding: '16px 16px 16px 48px',
        backgroundImage: `url(${searchIcon})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '16px center',
      }}
      value=""
      id="s"
    />
  );
};

export default DadataInput;
