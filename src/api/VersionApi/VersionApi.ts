import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { SERVER_URL } from '@/config/urlConfig';

export const VersionApi = createApi({
  reducerPath: 'VersionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/version`,
    headers: {},
  }),
  endpoints: () => ({}),
});
