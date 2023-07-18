import { CURRENT_THEME } from '@/config/themeConfig';
import { DomainProps } from '@/themes/types';

const colors: DomainProps<string> = {
  sobank: '#317EB0',
  sobankSu: '#317EB0',
  onbank: 'rgb(3, 49, 140)',
  firstCredit: '#66A5AD',
  sobankRedesign: '#56C7F5',
};

const color = colors[CURRENT_THEME];

export default color;
