export const urlConfig = {
  onbank: 'https://onbank.online',
  sovbank: 'https://sobank.online, https://www.sobank.online',
  kkd_sobank: 'https://kkd.sobank.online',
  sop: 'https://sobank.su/',
  kk_sobank: 'https://kk.sobank.online/',
  first_credit: 'https://1creditbank.ru',
  test_onbank: 'https://on-bank.online',
  dev_onbank: 'https://dev-front.onbank.online',
  cc_sobank: 'https://cc.sobank.online',
  new_sobank: 'https://odobreno.sobank.online',
};

export function getUrlSearchParams(p: string) {
  const match = RegExp(`[?&]${p}=([^&]*)`).exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}
