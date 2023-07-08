import creditCardLogo from '../../../assets/MobileMenu/Sobank/mobileMenu_creditCard.svg';
import creditCashLogo from '../../../assets/MobileMenu/Sobank/mobileMenu_creditCash.svg';
import hypothecLogo from '../../../assets/MobileMenu/Sobank/mobileMenu_hypothec.svg';
import installmentCardLogo from '../../../assets/MobileMenu/Sobank/mobileMenu_installmentCard.svg';
import mfoLogo from '../../../assets/MobileMenu/Sobank/mobileMenu_Mfo.svg';

interface menuLink {
  name: string;
  path: string;
  image: string;
}

const menuLinks: Array<menuLink> = [
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
];

export default menuLinks;
