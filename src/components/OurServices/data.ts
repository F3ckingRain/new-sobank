export interface ServiceItemProps {
  name: string;
  type: 'mobileApp' | 'moneyTransfer' | 'offlineBank' | 'promotion';
}

const list: ServiceItemProps[] = [
  { name: 'Мобильное приложение', type: 'mobileApp' },
  { name: 'Переводы на карту', type: 'moneyTransfer' },
  { name: 'Отделение в городе', type: 'offlineBank' },
  { name: 'Покупка акций', type: 'promotion' },
];

export default list;
