import { UrlExceptionsKeys } from '@/api/config/urlConfig/types';
import { getUrlSearchParams } from '@/api/config/urlConfig/urlConfig';

export const getServerUrl = () => {
  const currentOrigin = window.location.origin;
  const utm_source = getUrlSearchParams('utm_source');
  const env = import.meta.env.REACT_APP_DOMAIN as UrlExceptionsKeys;
  const envTest = import.meta.env.REACT_APP_TEST;

  const backend = {
    prod: 'https://prod.onbank.online',
    sop: 'https://ffs.onbank.online',
    utm: 'https://fix-back.onbank.online',
    dev: 'https://develop.onbank.online',
    test: 'https://test-back.onbank.online',
  };
  const front = {
    sobank: 'https://sobank.online',
    kk_sobank: 'https://kk.sobank.online',
    sop: 'https://sobank.su',
    dev: 'https://dev-front.onbank.online',
    test: 'https://test-front.onbank.online',
    onbank: 'https://onbank.online',
    first_credit: 'https://1creditbank.ru',
  };

  if ((env === 'sop' || env === 'sovbank' || env === 'kk_sobank') && envTest) {
    return backend.test;
  }

  if (env === 'sop' || currentOrigin === front.sop) {
    return backend.dev;
  }

  if (
    env === 'sovbank' ||
    env === 'kk_sobank' ||
    currentOrigin === front.sobank ||
    currentOrigin === front.kk_sobank
  ) {
    if (
      utm_source === 'google' ||
      utm_source === 'yandex' ||
      utm_source === 'leadssu1' ||
      utm_source === 'leadssu2'
    ) {
      return backend.utm;
    }
    return backend.prod;
  }

  if (
    currentOrigin === front.onbank ||
    currentOrigin === front.kk_sobank ||
    currentOrigin === front.first_credit
  ) {
    return backend.prod;
  }

  if (currentOrigin === front.test) {
    return backend.test;
  }

  return backend.dev;
};

// export const SERVER_URL = 'http://192.168.0.60:8000/'
export const SERVER_URL = getServerUrl();
