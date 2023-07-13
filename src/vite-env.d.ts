/// <reference types="vite/client" />

import { THEME, BACKEND, NODE_ENV, AUTH_TYPE } from '@/types/config';

interface ImportMetaEnv {
  readonly NODE_ENV: NODE_ENV;
  readonly BACKEND: BACKEND;
  readonly AUTH_TYPE: AUTH_TYPE;
  readonly THEME: THEME;
}
