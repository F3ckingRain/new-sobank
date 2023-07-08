import React, { FC, useEffect, useState } from 'react';

import clsx from 'clsx';

import authLogo from '../../../assets/MobileMenu/Sobank/mobileMenu_auth.svg';

import styles from './MobileMenu.module.scss';

import menuLinks from '@/components/Modals/MobileMenu/data';
import { OpenAuthModal } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';

interface MenuItemProps {
  name: string;
  image: string;
  onClick: () => void;
}
const MenuItem: FC<MenuItemProps> = ({ name, onClick, image }) => (
  <button className={styles.menuItem} onClick={onClick} type="button">
    <div className={styles.menuItem__content}>
      <img src={image} alt="" className={styles.content__img} />
      <div className={styles.content__name}>{name}</div>
    </div>
    <div className={styles.menuItem__arrow} />
  </button>
);

const MobileMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigateWithParams();

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const { opened } = useAppSelector(state => state.modalReducer);
  const { isAuth } = useAppSelector(state => state.userReducer);
  const { viewport } = useAppSelector(state => state.configReducer);

  const mobileMenuHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setMenuOpened(prevState => !prevState);
  };

  const closeMobileMenu = () => {
    setMenuOpened(false);
  };

  const authHandler = () => {
    dispatch(OpenAuthModal(navigate, 'user/myProfile'));
    setMenuOpened(false);
  };

  const navigateHandler = (path: string) => {
    setMenuOpened(false);
    navigate(path);
  };

  useEffect(() => {
    if (opened) closeMobileMenu();
  }, [opened]);

  return (
    <div
      className={menuOpened ? 'modalContainer' : ''}
      style={viewport === 'desktop' ? { display: 'none' } : undefined}
      onClick={closeMobileMenu}
      aria-hidden
    >
      <button className={styles.circle} onClick={mobileMenuHandler} type="button">
        <span
          className={
            menuOpened
              ? clsx(styles.burgerBtn, styles.burgerBtn__opened)
              : styles.burgerBtn
          }
        />
      </button>
      <div
        className={
          menuOpened
            ? clsx(styles.mobileMenu, styles.mobileMenu__active)
            : styles.mobileMenu
        }
        onClick={event => event.stopPropagation()}
        aria-hidden
      >
        <div className={styles.menu}>
          {menuLinks.map((el, index) => (
            <MenuItem
              name={el.name}
              image={el.image}
              onClick={() => navigateHandler(el.path)}
              key={`${el.name}_${index + 1}`}
            />
          ))}
          <MenuItem
            name={isAuth ? 'Личный кабинет' : 'Войти'}
            image={authLogo}
            onClick={authHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
