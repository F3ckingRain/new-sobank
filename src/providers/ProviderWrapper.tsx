import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ConfigProvider from '@/providers/ConfigProvider';
import store from '@/store/redux/store';

interface Provider {
  children: React.ReactNode;
}
const ProviderWrapper: FC<Provider> = ({ children }) => (
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider>{children}</ConfigProvider>
    </Provider>
  </BrowserRouter>
);

export default ProviderWrapper;
