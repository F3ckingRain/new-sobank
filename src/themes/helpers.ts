export type DomainsName = keyof typeof urlConfig;

const urlConfig = {
  sobank: 'https://sobank.online/',
  sobankSu: 'https://sobank.su/',
  onbank: 'https://onbank.online/',
  firstCredit: '',
};

export const getCurrentDomain = (): DomainsName => {
  const name: DomainsName = 'sobank';
  return name;
};

export const currentDomain: DomainsName = getCurrentDomain();
