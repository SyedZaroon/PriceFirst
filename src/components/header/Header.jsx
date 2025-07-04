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
  variant = "header3"
}) => {

  const [sideBar , setSideBar] = useState(false)

  return (
    <>
      <Sidebar view={sideBar} onClose={() => setSideBar(false)} />
      <div className={clsx(styles["header"], styles[`${variant}`])}>
        <div className={styles["header-left"]}>
          {variant !== "header3" ? (
            <img src={logo} alt="logo" width="" height="" />
          ) : (
            <img src={blacklogo} alt="logo" width="" height="" />
          )}

          <div
            className={clsx(styles["header-menu"], styles[`${variant}-menu`])}
          >
            <NavLink
              className={clsx(styles["menu"], styles["iphone-menu"])}
              to="/"
            >
              <span className={styles["iphone"]}>iPhone</span>
              <span className={styles.arrow}>
                <ArrowDown />
              </span>
              <div className={styles["iphone-submenu"]}>
                <SubMenu menu={iphoneSubmenu} type="grid" />
              </div>
            </NavLink>
            <NavLink
              className={clsx(styles["menu"], styles["samsung-menu"])}
              to="/"
            >
              <span>Samsung Phones</span>
              <span className={styles.arrow}>
                <ArrowDown />
              </span>
              <div className={styles["samsung-submenu"]}>
                <SubMenu menu={samsungSubmenu} type="grid" />
              </div>
            </NavLink>
            <NavLink
              className={clsx(styles["menu"], styles["pixel-menu"])}
              to="/"
            >
              <span>Google Pixels</span>
              <span className={styles.arrow}>
                <ArrowDown />
              </span>
              <div className={styles["pixel-submenu"]}>
                <SubMenu menu={pixelSubmenu} type="grid" />
              </div>
            </NavLink>
          </div>
        </div>

        <div>
          <HamburgerMenu
            size="32"
            className={styles["hambruger-icon"]}
            onClick={() => {
              setSideBar((pre) => !pre);
            }}
          />
        </div>
        <div className={styles[`${variant}-input`]} >
          <Inputfield
            className={styles[`${variant}-field`]}
            type="border"
            placeholder="Search devices"
            prefixIcon={<SearchIcon />}
          />
        </div>
      </div>
    </>
  );
}

export default Header