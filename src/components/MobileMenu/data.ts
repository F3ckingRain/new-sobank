import creditCardLogo from '../../assets/MobileMenu/Sobank/mobileMenu_creditCard.svg';
import creditCashLogo from '../../assets/MobileMenu/Sobank/mobileMenu_creditCash.svg';
import hypothecLogo from '../../assets/MobileMenu/Sobank/mobileMenu_hypothec.svg';
import installmentCardLogo from '../../assets/MobileMenu/Sobank/mobileMenu_installmentCard.svg';
import mfoLogo from '../../assets/MobileMenu/Sobank/mobileMenu_Mfo.svg';

import { DomainProps } from '@/themes/types';

interface menuLink {
  name: string;
  path: string;
  image?: string;
}

const menuLinks: DomainProps<Array<menuLink>> = {
  sobank: [
    {
      name: 'Кредитные карты',
      path: 'credit_card/info',
      image: creditCardLogo,
    },
    {
      name: 'Кредит наличными',
      path: 'credit_cash/info',
      image: creditCashLogo,
    },
    {
      name: 'Карта рассрочки',
      path: 'installment_card/info',
      image: installmentCardLogo,
    },
    {
      name: 'Отписаться от звонков',
      path: 'mfo/info',
      image: mfoLogo,
    },
    {
      name: 'Ипотека',
      path: 'hypothec/info',
      image: hypothecLogo,
    },
  ],
  sobankSu: [
    {
      name: 'Кредитные карты',
      path: 'credit_card/info',
      image: creditCardLogo,
    },
    {
      name: 'Кредит наличными',
      path: 'credit_cash/info',
      image: creditCashLogo,
    },
    {
      name: 'Карта рассрочки',
      path: 'installment_card/info',
      image: installmentCardLogo,
    },
    {
      name: 'Отписаться от звонков',
      path: 'mfo/info',
      image: mfoLogo,
    },
    {
      name: 'Ипотека',
      path: 'hypothec/info',
      image: hypothecLogo,
    },
  ],
  sobankRedesign: [],
  firstCredit: [],
  onbank: [],
};

export const toolbarLinks: menuLink[] = [
  { name: 'Карты', path: '/credit_card/info' },
  { name: 'Кредиты', path: '/credit_cash/info' },
  { name: 'Автокредит', path: '/car_credit/info' },
  { name: 'Ипотека', path: '/hypothec/info' },
];
export default menuLinks;
