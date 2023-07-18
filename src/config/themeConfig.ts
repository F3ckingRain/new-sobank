import { THEME } from '@/types/config';

export const getCurrentTheme = (): THEME => {
  const name: THEME = 'sobank';

  const envTheme = import.meta.env.VITE_THEME as THEME;

  if (envTheme) {
    document.body.setAttribute('data-theme', envTheme);
    return envTheme;
  }

  document.body.setAttribute('data-theme', name);

  return name;
};

export const CURRENT_THEME = getCurrentTheme();
