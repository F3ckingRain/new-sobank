import { currentDomain } from '@/themes/helpers';
import { DomainProps } from '@/themes/types';

const colors: DomainProps<string> & { default: string } = {
  sobank: 'rgb(3, 49, 140)',
  default: '#317EB0',
};

const color = colors[currentDomain] || colors.default;

export default color;
