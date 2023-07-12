import { currentDomain } from '@/themes/helpers';
import { DomainProps } from '@/themes/types';

const colors: DomainProps<string> = {
  sobank: '#317EB0',
  sobankSu: '#317EB0',
  onbank: 'rgb(3, 49, 140)',
  firstCredit: '#66A5AD',
};

const color = colors[currentDomain];

export default color;
