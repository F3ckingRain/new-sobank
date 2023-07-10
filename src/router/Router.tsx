import React from 'react';

import { useRoutes } from 'react-router';

import DefaultLayout from '@/layouts/DefaultLayout/DefaultLayout';
import FormLayout from '@/layouts/FormLayout/FormLayout';
import UserLayout from '@/layouts/UserLayout/UserLayout';
import ApplicationPage from '@/pages/ApplicationPage/ApplicationPage';
import CreditCardPage from '@/pages/CreditCardPage/CreditCardPage';
import CreditCashPage from '@/pages/CreditCashPage/CreditCashPage';
import DocumentsPage from '@/pages/DocumentsPage/DocumentsPage';
import CreditParameters from '@/pages/Form/CreditParameters/CreditParameters';
import HomePage from '@/pages/HomePage/HomePage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';
import ProfilePage from '@/pages/ProfilePage/ProfilePage';
import RequireAuth from '@/router/RequireAuth';

const Router = () =>
  useRoutes([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        { path: '', element: <HomePage /> },
        { path: 'credit_card/info', element: <CreditCardPage /> },
        { path: 'credit_cash/info', element: <CreditCashPage /> },
      ],
    },
    {
      path: 'user',
      element: (
        <RequireAuth>
          <UserLayout />
        </RequireAuth>
      ),
      children: [
        { path: 'myProfile', element: <ProfilePage /> },
        { path: 'myApplications', element: <ApplicationPage /> },
        {
          path: ':mode',
          element: <FormLayout />,
          children: [
            { path: ':product/credit_parameters_info', element: <CreditParameters /> },
          ],
        },
      ],
    },
    {
      path: 'documents',
      element: <DocumentsPage />,
    },
    {
      path: '*',
      element: <DefaultLayout />,
      children: [{ path: '', element: <NotFoundPage /> }],
    },
  ]);

export default Router;
