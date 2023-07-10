import React from 'react';

import { useOutlet } from 'react-router-dom';

const FormLayout = () => {
  const outlet = useOutlet();
  return <>{outlet}</>;
};

export default FormLayout;
