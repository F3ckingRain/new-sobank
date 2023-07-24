import React, { CSSProperties, FC, useEffect, useState } from 'react';

import clsx from 'clsx';

import authLogo from '../../assets/MobileMenu/Sobank/mobileMenu_auth.svg';

import styles from './MobileMenu.module.scss';

import Toolbar from '@/components/MobileMenu/components/Toolbar/Toolbar';
import menuLinks from '@/components/MobileMenu/data';
import Socials from '@/components/Socials/Socials';
import { CURRENT_THEME } from '@/config/themeConfig';
import { OpenAuthModal } from '@/features/AuthFeature';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import useNavigateWithParams from '@/hooks/useNavigateWithParams';
import { Landing } from '@/themes/theme';

interface MenuItemProps {
  name: string;
  image?: string;
  onClick: () => void;
}
const MenuItem: FC<MenuItemProps> = ({ name, onClick, image }) => (
  <button
    className={`${styles[`menuItem__${CURRENT_THEME}`]}`}
    onClick={onClick}
    type="button"
  >
    <div className={`${styles[`menuItem__${CURRENT_THEME}__content`]}`}>
      <img className={`${styles[`content__${CURRENT_THEME}__img`]}`} src={image} alt="" />
      <div className={`${styles[`content__${CURRENT_THEME}__name`]}`}>{name}</div>
    </div>
    <div className={`${styles[`menuItem__${CURRENT_THEME}__arrow`]}`} />
  </button>
);

const MobileMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigateWithParams();

  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const { opened } = useAppSelector(state => state.modalReducer);
  const { isAuth } = useAppSelector(state => state.userReducer);
  const { viewport } = useAppSelector(state => state.configReducer);

  const newDesignMenu = CURRENT_THEME === 'sobankRedesign';
  const modalContainerStyle: CSSProperties = newDesignMenu
    ? { zIndex: 200, position: 'fixed' }
    : {};

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
      style={modalContainerStyle}
      onClick={closeMobileMenu}
      aria-hidden
    >
      <button
        className={`${styles[`circle__${CURRENT_THEME}`]}`}
        onClick={mobileMenuHandler}
        type="button"
      >
        <span
          className={
            menuOpened
              ? clsx(
                  `${styles[`burgerBtn__${CURRENT_THEME}`]}`,
                  `${styles[`burgerBtn__${CURRENT_THEME}__opened`]}`,
                )
              : `${styles[`burgerBtn__${CURRENT_THEME}`]}`
          }
        />
      </button>

      <div
        className={
          menuOpened
            ? clsx(
                `${styles[`mobileMenu__${CURRENT_THEME}`]}`,
                `${styles[`mobileMenu__${CURRENT_THEME}__active`]}`,
              )
            : `${styles[`mobileMenu__${CURRENT_THEME}`]}`
        }
        onClick={event => event.stopPropagation()}
        aria-hidden
      >
        {newDesignMenu && <Toolbar />}

        <div
          className={
            menuOpened
              ? clsx(
                  `${styles[`menu__${CURRENT_THEME}`]}`,
                  `${styles[`menu__${CURRENT_THEME}__opened`]}`,
                )
              : `${styles[`menu__${CURRENT_THEME}`]}`
          }
        >
          {newDesignMenu && <Socials {...Landing.footer[CURRENT_THEME].socials} />}

          {menuLinks[CURRENT_THEME].map((el, index) => (
            <MenuItem
              name={el.name}
              image={el.image}
              onClick={() => navigateHandler(el.path)}
              key={`${el.name}_${index + 1}`}
            />
          ))}

          {!newDesignMenu && (
            <MenuItem
              name={isAuth ? 'Личный кабинет' : 'Войти'}
              image={authLogo}
              onClick={authHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
