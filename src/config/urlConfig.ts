import { BACKEND } from '@/types/config';

export const getServerUrl = () => {
  const envBack: BACKEND = import.meta.env.VITE_BACKEND as BACKEND;

  const backend = {
    prod: 'https://prod.onbank.online',
    dev: 'https://dev-back.onbank.online',
    test: 'https://test-back.onbank.online',
    stage: 'https://stage-back.onbank.online',
    local: 'http://backend-url',
  };

  if (!envBack) return backend.dev;

  return backend[envBack];
};

export const SERVER_URL = getServerUrl();
