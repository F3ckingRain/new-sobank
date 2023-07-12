import React from 'react';

import clsx from 'clsx';

import styles from './UnsubscribeModal.module.scss';

import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { closeModal } from '@/store/reducers/ModalSlice/ModalSlice';

const UnsubscribeModal = () => {
  const dispatch = useAppDispatch();

  const modal = useAppSelector(state => state.modalReducer);

  const isUnsubscribeModalOpened = modal.opened && modal.name === 'unsubscribe-modal';

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <div
      className={isUnsubscribeModalOpened ? 'modalContainer' : ''}
      onClick={closeModalHandler}
      aria-hidden
    >
      <div
        className={
          isUnsubscribeModalOpened
            ? clsx(styles.unsubscribeModal, styles.unsubscribeModal__active)
            : styles.unsubscribeModal
        }
      />
    </div>
  );
};

export default UnsubscribeModal;
