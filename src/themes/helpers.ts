export type DomainsName = keyof typeof urlConfig;

const urlConfig = {
  sobank: 'https://sobank.online/',
};

export const getCurrentDomain = (): DomainsName => {
  const name: DomainsName = 'sobank';
  return name;
};

export const currentDomain: DomainsName = getCurrentDomain();
