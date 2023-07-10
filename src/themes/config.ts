import bannerCreditCardSobankMobile from '../assets/Banner/Sobank/Mobile/creditCard_mobile.webp';
import socialsTelegramSobank from '../assets/Footer/Socials/Sobank/socialsTelegram.svg';
import socialsViberSobank from '../assets/Footer/Socials/Sobank/socialsViber.svg';
import socialsVkSobank from '../assets/Footer/Socials/Sobank/socialsVk.svg';
import getCreditCardMobileSobank from '../assets/GetCreditCard/mobile/getCreditCard_mobile_sobank.webp';

import popularProductsCashbackSobank from '@/assets/HomePage/PopularProducts/Sobank/product_Cashback.svg';
import popularProductsCreditCardSobank from '@/assets/HomePage/PopularProducts/Sobank/products_creditCard.svg';
import popularProductsCreditCashSobank from '@/assets/HomePage/PopularProducts/Sobank/products_creditCash.svg';
import { MOBILE_WIDTH } from '@/constants/resolution';
import { LandingType } from '@/themes/types';

const isMobileView = document.body.clientWidth < MOBILE_WIDTH;
export const Landing: LandingType = {
  banner: {
    sobank: {
      home_page: {
        title: 'Кредитные карты\nдо 160 дней без %',
        subtitle: isMobileView
          ? 'До 1 млн ₽\nОбслуживание 0₽*\nРассрочка'
          : 'До 1 млн ₽\nОбслуживание 0₽*',
        btnText: 'Оформить карту',
        image: bannerCreditCardSobankMobile,
      },
      credit_cash: {},
      credit_card: {},
      installment_card: {},
      mfo: {},
      hypothec: {},
      car_credit: {},
    },
  },
  loan: {
    sobank: {
      home_page: {
        advantages: {},
        popularProducts: [
          {
            title: 'Кредитные\nкарты',
            subtitle: 'До 160 дней\nбез %',
            image: popularProductsCreditCardSobank,
          },
          {
            title: 'Кредит\nналичными',
            subtitle: 'Быстрое\nоформление',
            image: popularProductsCreditCashSobank,
          },
          {
            title: 'Карты с\nкэшбэком',
            subtitle: 'До 30%\nкэшбэка\nна покупки',
            image: popularProductsCashbackSobank,
          },
          {
            title: 'Оформление\nКаско',
            subtitle: 'Оформите\nКаско по\nнизкой цене',
            image: '',
          },
          {
            title: 'Вклад с \nвысоким %',
            subtitle: 'Прибыльная\nставка до 12%',
            image: '',
          },
          {
            title: 'Ипотека\nот 5%',
            subtitle: 'Выгодная\nипотека на\nновостройки',
            image: '',
          },
        ],
        freeDelivery: [
          'После одобрения Вам позвонит оператор',
          'Вы вместе с ним выберете дату, время и место встречи',
          'Курьер привезет карту и все документы',
        ],
        freeCard: {
          title: 'Получите бесплатную кредитную карту за 2 минуты',
          subtitle: 'Заполните онлайн-анкету, получите лимит до 1 млн',
          image: getCreditCardMobileSobank,
        },
      },
      credit_cash: {},
      credit_card: {},
      installment_card: {},
      mfo: {},
      hypothec: {},
      car_credit: {},
    },
  },
  footer: {
    sobank: {
      socials: {
        title: 'Хотите получать в будущем уже готовые одобренные предложения?',
        subtitle: 'Выберите удобный способ:',
        links: [
          { name: 'Viber', link: '', image: socialsViberSobank },
          { name: 'Telegram', link: '', image: socialsTelegramSobank },
          { name: 'ВКонтакте', link: '', image: socialsVkSobank },
        ],
      },
    },
  },
};
