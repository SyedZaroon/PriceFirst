import React, { useState } from 'react'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import logo from "@/assets/images/PriceFirst.png";
import blacklogo from "@/assets/images/blacklogo.png";
import ArrowDown from '../../assets/icons/ArrowDown';
import { HamburgerMenu } from 'iconsax-reactjs';
import SubMenu from '../subMenu/SubMenu';
import clsx from 'clsx';
import Sidebar from '../sideBar/Sidebar';
import Inputfield from '../inputFields/InputFields.jsx'
import SearchIcon from '../../assets/icons/SearchIcon.jsx'
import {
  iphoneSubmenu,
  samsungSubmenu,
  pixelSubmenu,
} from "../../data/subMenu/menuData.js";



const Header = ({
  variant = "header1"
}) => {

  const [sideBar , setSideBar] = useState(false)

  return (
    <>
      <Sidebar view={sideBar} onClose={() => setSideBar(false)} />
      <div className={clsx(styles["header"], styles[`${variant}`])}>
        <div className={styles["header-left"]}>
          {variant !== "header3" ? (
            <NavLink to="/">
              <img src={logo} alt="logo" width="" height="" />
            </NavLink>
          ) : (
            <NavLink to="/">
              <img src={blacklogo} alt="logo" width="" height="" />
            </NavLink>
          )}

          <div
            className={clsx(styles["header-menu"], styles[`${variant}-menu`])}
          >
            <p className={clsx(styles["menu"], styles["iphone-menu"])}>
              <span className={styles["iphone"]}>iPhone</span>
              <span className={styles.arrow}>
                <ArrowDown />
              </span>
              <div className={styles["iphone-submenu"]}>
                <SubMenu brand='iphone' menu={iphoneSubmenu} type="grid" />
              </div>
            </p>
            <p className={clsx(styles["menu"], styles["samsung-menu"])}>
              <span>Samsung Phones</span>
              <span className={styles.arrow}>
                <ArrowDown />
              </span>
              <div className={styles["samsung-submenu"]}>
                <SubMenu brand='samsung' menu={samsungSubmenu} type="grid" />
              </div>
            </p>
            <p className={clsx(styles["menu"], styles["pixel-menu"])}>
              <span>Google Pixels</span>
              <span className={styles.arrow}>
                <ArrowDown />
              </span>
              <div className={styles["pixel-submenu"]}>
                <SubMenu brand='google-pixel' menu={pixelSubmenu} type="grid" />
              </div>
            </p>
          </div>
        </div>

        <div className={styles[`${variant}-hamburger`]}>
          <HamburgerMenu
            size="32"
            className={styles["hambruger-icon"]}
            onClick={() => {
              setSideBar((pre) => !pre);
            }}
          />
        </div>
        <div className={styles[`${variant}-input`]}>
          <Inputfield
            className={styles[`${variant}-field`]}
            variant="border"
            placeholder="Search devices"
            prefixIcon={<SearchIcon />}
          />
        </div>
      </div>
    </>
  );
}

export default Header