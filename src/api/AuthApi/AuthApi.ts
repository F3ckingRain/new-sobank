import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import Cookies from 'js-cookie';

import {
  AuthResponse,
  AuthSignInRequest,
  AuthSignUpRequest,
  AuthTokenResponse,
  AutologinCodeConfirmRequest,
  AutologinRequest,
  AutologinResponse,
  CodeConfirmRequest,
} from '@/api/AuthApi/types';
import { SERVER_URL } from '@/api/utils/utilsApi';

export const AuthApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: `${SERVER_URL}/api/auth`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/plain, */*',
      frm: window.location.search || 'null',
      fronturl: window.location.origin,
    },
    prepareHeaders: headers => {
      headers.set('Authorization', `Bearer ${Cookies.get('Bearer')}`);
      return headers;
    },
  }),
  tagTypes: ['Auth'],

  endpoints: build => ({
    sign_in: build.mutation<AuthResponse, AuthSignInRequest>({
      query: ({ phone }) => ({
        method: 'POST',
        url: 'sign-in',
        body: {
          phone,
        },
      }),
    }),

    sign_up: build.mutation<AuthResponse, AuthSignUpRequest>({
      query: ({ phone }) => ({
        method: 'POST',
        url: 'sign-up',
        body: {
          phone,
        },
      }),
    }),

    get_autologin_data: build.query<AutologinResponse, AutologinRequest>({
      query: ({ token }) => ({
        method: 'GET',
        url: `get_autologin_data`,
        params: { autologin_token: token },
      }),
    }),

    confirm: build.mutation<AuthTokenResponse, CodeConfirmRequest>({
      query: ({ phone, code }) => ({
        method: 'POST',
        url: 'confirm',
        body: {
          phone,
          code,
        },
      }),
    }),

    confirm_autologin: build.mutation<AuthTokenResponse, AutologinCodeConfirmRequest>({
      query: ({ token, code, phone }) => ({
        method: 'POST',
        url: 'confirm_autologin',
        body: {
          phone,
          code,
          token,
        },
      }),
    }),
  }),
});
