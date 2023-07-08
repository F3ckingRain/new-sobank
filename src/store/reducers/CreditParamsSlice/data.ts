import { CreditParams } from '@/types/form';
import { getProductFromUrl } from '@/utils/product';

interface CreditParamsProps {
  creditTarget: CreditParams.CreditTargetType;
}

const initialState: CreditParamsProps = {
  creditTarget: getProductFromUrl(),
};

export default initialState;
