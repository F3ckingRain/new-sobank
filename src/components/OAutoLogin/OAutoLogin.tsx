import React, { useEffect } from 'react';

import { GetAutologinData } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';

const OAutoLogin = () => {
  const dispatch = useAppDispatch();

  const { search } = window.location;

  useEffect(() => {
    dispatch(GetAutologinData());
  }, [search]);

  return <div style={{ display: 'none' }} />;
};

export default OAutoLogin;
