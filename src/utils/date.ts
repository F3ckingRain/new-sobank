import { MonthKeyType, MONTHS } from '@/constants/date';

export const getCurrentYear = () => {
  const date = new Date(Date.now());

  return date.getFullYear();
};

export const getCurrentMonthCase = (month: MonthKeyType) =>
  `${MONTHS[month].slice(0, -1)}я`;

export const getDateForExchange = () => {
  const date = new Date(Date.now());
  const dayFromDate = date.getDay().toString();

  const day = dayFromDate.length < 2 ? `0${dayFromDate}` : dayFromDate;
  const month = getCurrentMonthCase(date.getMonth() as MonthKeyType);
  const year = getCurrentYear();

  return `Актуально на ${day} ${month} ${year} г.`;
};
