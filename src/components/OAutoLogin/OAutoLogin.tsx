import React, { useEffect } from 'react';

import useAppDispatch from '@/hooks/useAppDispatch';
import { GetAutologinData } from '@/store/actions/AuthActions/AuthActions';

const OAutoLogin = () => {
  const dispatch = useAppDispatch();
  const utm = window.location.search;

  useEffect(() => {
    dispatch(GetAutologinData());
  }, [utm]);

  return <div style={{ display: 'none' }} />;
};

export default OAutoLogin;
