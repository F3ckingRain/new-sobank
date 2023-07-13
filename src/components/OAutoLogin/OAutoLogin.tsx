import { useEffect } from 'react';

import { GetAutologinData } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';

const OAutoLogin = () => {
  const dispatch = useAppDispatch();

  const { search } = window.location;

  useEffect(() => {
    dispatch(GetAutologinData());
  }, [search]);

  return null;
};

export default OAutoLogin;
