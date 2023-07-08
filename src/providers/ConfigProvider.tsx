import React, { FC } from 'react';

import ModalProvider from '@/providers/ModalProvider/ModalProvider';

interface ConfigProviderProps {
  children: React.ReactNode;
}
const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => (
  <>
    {children}
    <ModalProvider />
  </>
);

export default ConfigProvider;
