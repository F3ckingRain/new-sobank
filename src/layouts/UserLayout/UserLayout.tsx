import React from 'react';

import { useOutlet } from 'react-router-dom';

const UserLayout = () => {
  const outlet = useOutlet();
  return <>{outlet}</>;
};

export default UserLayout;
