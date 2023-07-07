import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const DadataApi = createApi({
  reducerPath: 'dadata',
  baseQuery: fetchBaseQuery({}),
  endpoints: () => ({}),
});
