import React, { Suspense } from 'react';

import styles from './ModalProvider.module.scss';

import MobileMenu from '@/components/MobileMenu/MobileMenu';
import AuthModal from '@/components/Modals/AuthModal/AuthModal';
import ShowcaseModal from '@/components/Modals/ShowcaseModal/ShowcaseModal';
import UnsubscribeModal from '@/components/Modals/UnsubscribeModal/UnsubscribeModal';

const ModalProvider = () => (
  <div className={styles.notification}>
    <Suspense>
      <MobileMenu />
      <ShowcaseModal />
      <AuthModal />
      <UnsubscribeModal />
    </Suspense>
  </div>
);

export default ModalProvider;
