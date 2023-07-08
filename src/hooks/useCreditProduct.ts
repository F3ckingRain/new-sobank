import { useEffect } from 'react';

import useAppDispatch from '@/hooks/useAppDispatch';
import { setCreditTarget } from '@/store/reducers/CreditParamsSlice/CreditParamsSlice';
import { getProductFromUrl } from '@/utils/product';

const useCreditProduct = () => {
  const dispatch = useAppDispatch();
  const { pathname } = window.location;

  useEffect(() => {
    if (!pathname.includes('user') && !!pathname.length) {
      const product = getProductFromUrl();
      dispatch(setCreditTarget(product));
    }
    if (!pathname) {
      dispatch(setCreditTarget('credit_card'));
    }
  }, [pathname]);
};

export default useCreditProduct;
