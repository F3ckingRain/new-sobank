import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const DadataApi = createApi({
  reducerPath: 'dadata',
  baseQuery: fetchBaseQuery({}),
  endpoints: () => ({}),
});
