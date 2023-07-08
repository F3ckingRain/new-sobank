import { useEffect } from 'react';

import { MOBILE_WIDTH } from '@/constants/resolution';
import useAppDispatch from '@/hooks/useAppDispatch';
import { setViewport } from '@/store/reducers/ConfigSlice/ConfigSlice';

const useViewportWatcher = () => {
  const dispatch = useAppDispatch();

  const { clientWidth } = document.body;

  useEffect(() => {
    if (clientWidth < MOBILE_WIDTH) dispatch(setViewport('mobile'));
    else setViewport('desktop');
  }, [clientWidth]);
};

export default useViewportWatcher;
