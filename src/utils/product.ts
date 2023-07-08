import { CreditParams } from '@/types/form';

export const getProductFromUrl = (): CreditParams.CreditTargetType => {
  const { pathname } = window.location;

  const credIndex = pathname.indexOf('credit/');
  const substr = pathname.substring(credIndex || 13, pathname.length);
  const slash = substr.lastIndexOf('/');

  return substr.slice(1, slash) as CreditParams.CreditTargetType;
};
