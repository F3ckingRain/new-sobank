import React from 'react';

import ReactDOM from 'react-dom/client';

import App from './app/App';

import './main.scss';
import ProviderWrapper from '@/providers/ProviderWrapper';

const env = import.meta.env.NODE_ENV;

const isProd = env === 'production' || env === 'stage';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  isProd ? (
    <React.StrictMode>
      <ProviderWrapper>
        <App />
      </ProviderWrapper>
    </React.StrictMode>
  ) : (
    <ProviderWrapper>
      <App />
    </ProviderWrapper>
  ),
);
