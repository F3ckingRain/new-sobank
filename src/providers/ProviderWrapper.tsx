import React, { FC } from 'react';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Favicon from '@/components/Favicon/Favicon';
import ConfigProvider from '@/providers/ConfigProvider';
import store from '@/store/redux/store';
import { Landing } from '@/themes/config';
import { currentDomain } from '@/themes/helpers';

interface Provider {
  children: React.ReactNode;
}
const ProviderWrapper: FC<Provider> = ({ children }) => (
  <BrowserRouter>
    <Provider store={store}>
      <ConfigProvider>
        <Favicon ico={Landing.favicon[currentDomain]} />
        {children}
      </ConfigProvider>
    </Provider>
  </BrowserRouter>
);

export default ProviderWrapper;
