import { AUTH_TYPE } from '@/types/config';

export const getAuthType = (): AUTH_TYPE => {
  const authType: AUTH_TYPE = 'default';

  const envAuth: AUTH_TYPE = import.meta.env.VITE_AUTH_TYPE as AUTH_TYPE;

  if (envAuth) return envAuth;

  return authType;
};

export const CURRENT_AUTH_TYPE = getAuthType();
