import React, { CSSProperties, useState } from 'react';

import clsx from 'clsx';

import styles from './CityModal.module.scss';

import DadataInput from '@/components/Inputs/DadataInput';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import CustomButton from '@/shared/CustomButton/CustomButton';
import { closeModal } from '@/store/reducers/ModalSlice/ModalSlice';

const CityModal = () => {
  const dispatch = useAppDispatch();

  const [cityChooseOpened, setCityChooseOpened] = useState<boolean>(false);

  const modal = useAppSelector(state => state.modalReducer);

  const isCityModalOpen = modal.opened && modal.name === 'city-modal';

  const modalContainerStyle: CSSProperties =
    cityChooseOpened && isCityModalOpen
      ? { backgroundColor: 'transparent', backdropFilter: 'blur(2.5px)' }
      : { backgroundColor: 'transparent' };

  const cityChooseOpener = () => {
    setCityChooseOpened(true);
  };

  const cityChooseCloser = () => {
    setCityChooseOpened(false);
  };

  const closeModalHandler = () => {
    if (cityChooseOpened) return setCityChooseOpened(false);

    return dispatch(closeModal());
  };

  const confirmCityHandler = () => {};

  return (
    <div
      className={isCityModalOpen ? 'modalContainer' : ''}
      style={modalContainerStyle}
      onClick={closeModalHandler}
      aria-hidden
    >
      <div
        className={
          isCityModalOpen
            ? clsx(styles.cityModal, styles.cityModal__active)
            : styles.cityModal
        }
        onClick={event => event.stopPropagation()}
        aria-hidden
      >
        {cityChooseOpened ? (
          <div className={styles.chooseCity}>
            <div className={styles.chooseCity__header}>
              <div className={styles.chooseCity__text}>Город</div>
              <button className={styles.chooseCity__exit} onClick={cityChooseCloser} />
            </div>
            <div className={styles.chooseCity__content}>
              <DadataInput />
              content
            </div>
          </div>
        ) : (
          <div className={styles.confirmCity}>
            <div className={styles.confirmCity__city}>
              <div className={styles.text}>Ваш город</div>
              <div className={clsx(styles.text, styles.text__colored)}>city</div>
            </div>

            <div className={styles.confirmCity__btns}>
              <CustomButton
                additionalClassname={clsx(styles.btn, styles.btn__confirm)}
                onClick={confirmCityHandler}
              >
                Да
              </CustomButton>

              <CustomButton
                additionalClassname={clsx(styles.btn, styles.btn__change)}
                onClick={cityChooseOpener}
              >
                Изменить
              </CustomButton>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CityModal;
