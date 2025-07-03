import React, { useState } from 'react'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import logo from "@/assets/images/PriceFirst.png";
import ArrowDown from '../../assets/icons/ArrowDown';
import { HamburgerMenu } from 'iconsax-reactjs';
import SubMenu from '../subMenu/SubMenu';
import clsx from 'clsx';
import Sidebar from '../sideBar/Sidebar';
import iphoneSubmenu from '../../subMenu/menuData.js'
import Label from '../labels/Label.jsx'



const Header = () => {

  const [sideBar , setSideBar] = useState(false)

  return (
    <>
    
      <Sidebar view={sideBar} onClose={() => setSideBar(false)} />
      <div className={styles["header"]}>
        <img src={logo} alt="logo" width="" height="" />

        <div className={styles["header-menu"]}>
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
          <NavLink className={styles["menu"]} to="/">
            <span>Samsung Phones</span>
            <span className={styles.arrow}>
              <ArrowDown />
            </span>
          </NavLink>
          <NavLink className={styles["menu"]} to="/">
            <span>Google Pixels</span>
            <span className={styles.arrow}>
              <ArrowDown />
            </span>
          </NavLink>
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
      </div>
    </>
  );
}

export default Header