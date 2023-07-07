import React, { FC } from 'react';

interface RequireAuthProps {
  children: React.ReactNode;
}
const RequireAuth: FC<RequireAuthProps> = ({ children }) => <>{children}</>;

export default RequireAuth;
