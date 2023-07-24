import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Cookies from 'js-cookie';

import { SERVER_URL } from '@/config/urlConfig';

export const FormApi = createApi({
  reducerPath: 'FormApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/form`,
    headers: {},
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${Cookies.get('Bearer')}`);
      return headers;
    },
  }),
  endpoints: () => ({}),
});
