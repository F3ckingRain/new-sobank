import React from 'react';

import { useOutlet } from 'react-router-dom';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

const DefaultLayout = () => {
  const outlet = useOutlet();
  return (
    <>
      <Header />
      {outlet}
      <Footer />
    </>
  );
};

export default DefaultLayout;
