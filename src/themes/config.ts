import bannerCreditCardSobankMobile from '../assets/Banner/Sobank/Mobile/creditCard_mobile.webp';
import kkFavicon from '../assets/Favicons/fav-kk-sobank.ico';
import onbankFavicon from '../assets/Favicons/onbank.ico';
import sobankFavicon from '../assets/Favicons/sov.ico';
import getCreditCardMobileSobank from '../assets/GetCreditCard/mobile/getCreditCard_mobile_sobank.webp';

import { MOBILE_WIDTH } from '@/constants/resolution';
import { LandingType } from '@/themes/types';
import { getCurrentYear } from '@/utils/date';

const isMobileView = document.body.clientWidth < MOBILE_WIDTH;
export const Landing: LandingType = {
  yandexMetrics: {
    sobank: '',
    sobankSu: '',
    firstCredit: '',
    onbank: '',
  },
  favicon: {
    sobank: sobankFavicon,
    sobankSu: sobankFavicon,
    firstCredit: '',
    onbank: onbankFavicon,
  },
  banner: {
    sobank: {
      home_page: {
        title: 'Кредитные карты\nдо 160 дней без %',
        subtitle: isMobileView
          ? 'До 1 000 000 ₽\nОбслуживание 0 ₽*\nРассрочка'
          : 'До 1 000 000 ₽\nОбслуживание 0 ₽*',
        btnText: 'Оформить карту',
        image: bannerCreditCardSobankMobile,
      },
      credit_cash: {},
      credit_card: {
        title: 'Кредитные карты\nдо 160 дней без %',
        subtitle: isMobileView
          ? 'До 1 000 000 ₽\nОбслуживание 0₽*\nРассрочка'
          : 'До 1 000 000 ₽\nОбслуживание 0₽*',
        btnText: 'Оформить карту',
        image: bannerCreditCardSobankMobile,
      },
      installment_card: {},
      mfo: {},
      hypothec: {},
      car_credit: {},
    },
  },
  loan: {
    sobank: {
      home_page: {
        popularProducts: [
          {
            title: 'Кредитные\nкарты',
            subtitle: 'До 160 дней\nбез %',
            image: 'creditCard',
          },
          {
            title: 'Кредит\nналичными',
            subtitle: 'Быстрое\nоформление',
            image: 'creditCash',
          },
          {
            title: 'Карты с\nкэшбэком',
            subtitle: 'До 30%\nкэшбэка\nна покупки',
            image: 'cashback',
          },
          {
            title: 'Оформление\nКаско',
            subtitle: 'Оформите\nКаско по\nнизкой цене',
            image: 'casko',
          },
          {
            title: 'Вклад с \nвысоким %',
            subtitle: 'Прибыльная\nставка до 12%',
            image: 'investment',
          },
          {
            title: 'Ипотека\nот 5%',
            subtitle: 'Выгодная\nипотека на\nновостройки',
            image: 'hypothec',
          },
        ],
        freeDelivery: {
          title: 'Бесплатная доставка до дома',
          list: [
            'После одобрения Вам позвонит оператор',
            'Вы вместе с ним выберете дату, время и место встречи',
            'Курьер привезет карту и все документы',
          ],
        },
        freeCard: {
          title: 'Получите бесплатную карту за 2 минуты',
          subtitle:
            'Заполните онлайн-анкету, получите лимит до 1 млн ₽, и начинайте зарабатывать на покупках с кэшбеком до 30%',
          image: getCreditCardMobileSobank,
        },
        getCredit: {
          title: 'Кредит наличными',
          list: [
            'до 50 дней до первого платежа',
            'Удобное погашение:\nв мобильном приложении, интернет банке, банкоматах или в отделениях банка',
          ],
        },
      },
      credit_card: {
        advantages: [
          {
            type: 'limit',
            title: '1 000 000 ₽',
            subtitle: 'Максимальный кредитный лимит',
          },
          {
            type: 'period',
            title: 'До 160 дней без %',
            subtitle:
              'Льготный период на покупки, снятие наличных и переводы на другие счета.',
          },
          {
            type: 'delivery',
            title: 'Бесплатная доставка',
            subtitle: 'Сегодня или на следующий день',
          },
          {
            type: 'percent',
            title: 'Беспроцентная рассрочка**',
            subtitle:
              'Выберите магазин партнёр и получите беспроцентную рассрочку на любой товар в этом магазине',
          },
          {
            type: 'cashback',
            title: 'Кэшбэк у партнёров',
            subtitle: 'Вернём до 30% за покупки у партнёров',
          },
          {
            type: 'refinance',
            title: 'Рефинансирование',
            subtitle:
              'Погасите кредиты в других банках без комиссий и получите до 160 дней без %',
          },
        ],
      },
      credit_cash: {},
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
          { name: 'Viber', link: '', image: 'viber' },
          { name: 'Telegram', link: '', image: 'telegram' },
          { name: 'ВКонтакте', link: '', image: 'vk' },
        ],
      },
      accordions: [
        {
          title: 'Частным клиентам',
          content: [
            { name: 'Кредит наличными', path: '/credit_cash/info' },
            { name: 'Кредитная карта', path: '/credit_card/info' },
            { name: 'Карта рассрочки', path: '/installment_card/info' },
            { name: 'Вклады' },
            { name: 'Ипотека', path: '/hypothec/info' },
            { name: 'Премиальное обслуживание' },
            { name: 'Инвестиции' },
            { name: 'Страхование' },
            { name: 'Скидки и акции' },
            { name: 'Зарплатным клиентам' },
          ],
        },
        {
          title: 'Информация',
          content: [
            'Содействие банкам - источник одних из лучших онлайн предложений Российских банков в одной анкете.\n' +
              'Содействие банкам - это информационный портал, на котором имеется возможность подать заявку и узнать предварительное решение сразу от нескольких партнеров, после чего останется выбрать подходящее предложение и получить его.',
            `2001-${getCurrentYear()}. «Содействие банкам», официальный сайт. Информация о процентных ставках по договорам банковского вклада с физическими лицами. Центр раскрытия корпоративной информации. Информация профессионального участника рынка ценных бумаг. Информация о лицах, под контролем либо значительным влиянием которых находятся Банки-партнёры. Лицензия на хранение и обработку персональных данных № 74-18-004739 Приказ № 212 от 23.11.2018. Оставляя заявку, вы соглашаетесь на обработку персональных данных, получение информации, получение доступа к кредитной истории, использование аналога собственноручной подписи, оферту, политика относительно обработки персональных данных, форма согласия на обработку персональных данных.`,
            '* - обслуживание 0 ₽ доступно у конкретных банков-партнеров. Более точную информацию о возможности получать бесплатное обслуживание уточняйте в тарифном плане банка, который одобрит карту.\n' +
              '** - рассрочка на покупки и/или снятие наличных доступна у конкретных банков-партнеров. Более точную информацию уточняйте в тарифном плане банка, который одобрит карту.\n' +
              'Если Вы отправите заявку на карту рассрочки, то она будет также рассмотрена на кредитную карту в банках-партнерах. Годовая процентная ставка по кредитной карте у банков-партнеров определяется согласно их тарифных планов и составляет больше 0 % в год.',
            `'Мы используем файлы cookie для того, чтобы предоставить пользователям больше возможностей при посещении сайта ${window.location.origin}. Подробнее об условиях использования. Услуги бесплатные на сайте оказывает Самохина Е.А. 744613115073 и не несёт ответственности за заключенные в последствие клиентами и партнёрами договоров кредитования.',`,
          ],
        },
      ],
      copyright: `Copyright © 2001–${getCurrentYear()} “Содействие банкам”. Все права защищены.`,
    },
  },
};
