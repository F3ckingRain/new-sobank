import React, { FC } from 'react';

interface ConfigProviderProps {
  children: React.ReactNode;
}
const ConfigProvider: FC<ConfigProviderProps> = ({ children }) => (
  <>
    {children}
    <div>config</div>
  </>
);

export default ConfigProvider;
