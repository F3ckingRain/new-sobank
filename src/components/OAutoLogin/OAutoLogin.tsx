import React, { useEffect } from 'react';

import { GetAutologinData } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';

const OAutoLogin = () => {
  const dispatch = useAppDispatch();
  const utm = window.location.search;

  useEffect(() => {
    dispatch(GetAutologinData());
  }, [utm]);

  return <div style={{ display: 'none' }} />;
};

export default OAutoLogin;
