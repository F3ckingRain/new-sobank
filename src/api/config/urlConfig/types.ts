import { urlConfig } from '@/api/config/urlConfig/urlConfig';

export type UrlExceptionsKeys = keyof Omit<
  typeof urlConfig,
  'test_onbank' | 'dev_onbank'
>;
export type DomainsName = keyof typeof urlConfig;
