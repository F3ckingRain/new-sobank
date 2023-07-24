import React, { FC } from 'react';

import clsx from 'clsx';

import styles from './Exchange.module.scss';

import { CURRENT_THEME } from '@/config/themeConfig';
import useAppDispatch from '@/hooks/useAppDispatch';
import { getDateForExchange } from '@/utils/date';

interface CurrencyItem {
  currency: string;
  buy: { value: string; status: boolean };
  sell: { value: string; status: boolean };
}
const CurrencyItem: FC<CurrencyItem> = ({ currency, buy, sell }) => (
  <div className={styles.flexItem}>
    <div className={clsx(styles.currency, styles.text)}>{currency}</div>

    <div className={styles.currencyItem}>
      <div className={styles.text}>{buy.value}</div>
      <div className={buy.status ? clsx(styles.arrow, styles.arrow__up) : styles.arrow} />
    </div>

    <div className={styles.currencyItem}>
      <div className={styles.text}>{sell.value}</div>
      <div
        className={sell.status ? clsx(styles.arrow, styles.arrow__up) : styles.arrow}
      />
    </div>
  </div>
);
const Exchange = () => {
  const dispatch = useAppDispatch();

  const currencyList: CurrencyItem[] = [
    {
      currency: 'USD',
      buy: { value: '98.12', status: true },
      sell: { value: '98.34', status: true },
    },
    {
      currency: 'EUR',
      buy: { value: '102.21', status: false },
      sell: { value: '103.02', status: false },
    },
    {
      currency: 'KZT',
      buy: { value: '5.36', status: false },
      sell: { value: '5.75', status: true },
    },
    {
      currency: 'CNY',
      buy: { value: '11.27', status: true },
      sell: { value: '11.63', status: true },
    },
  ];

  return (
    <div className={`${styles[`exchange__${CURRENT_THEME}`]}`}>
      <div className={`${styles[`exchange__${CURRENT_THEME}__header`]}`}>
        <div className={`${styles[`exchange__${CURRENT_THEME}__title`]}`}>
          Курсы валют
        </div>
        <div className={`${styles[`exchange__${CURRENT_THEME}__subtitle`]}`}>
          {getDateForExchange()}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.content__flex}>
          <div className={clsx(styles.flexItem, styles.flexTitle)}>
            <div className={styles.flexTitle__text}>Продаю</div>
            <div className={styles.flexTitle__text}>Покупаю</div>
          </div>

          {currencyList.map((el, index) => (
            <CurrencyItem {...el} key={`${el.currency}_${index + 1}`} />
          ))}
        </div>

        <div className={styles.content__info}>
          Информация о курсах валют обновляется каждые 30 минут
        </div>
      </div>
    </div>
  );
};

export default Exchange;
