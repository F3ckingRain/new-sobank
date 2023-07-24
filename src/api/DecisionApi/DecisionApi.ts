import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/dist/query/react';
import Cookies from 'js-cookie';

import { SERVER_URL } from '@/config/urlConfig';

export const DecisionApi = createApi({
  reducerPath: 'DecisionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/decisions`,
    headers: {},
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${Cookies.get('Bearer')}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
