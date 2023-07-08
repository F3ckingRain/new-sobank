import React, { Suspense } from 'react';

import styles from './ModalProvider.module.scss';

import AuthModal from '@/components/Modals/AuthModal/AuthModal';
import MobileMenu from '@/components/Modals/MobileMenu/MobileMenu';
import ShowcaseModal from '@/components/Modals/ShowcaseModal/ShowcaseModal';

const ModalProvider = () => (
  <div className={styles.notification}>
    <Suspense>
      <MobileMenu />
      <ShowcaseModal />
      <AuthModal />
    </Suspense>
  </div>
);

export default ModalProvider;
