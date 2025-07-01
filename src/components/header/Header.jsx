import React from 'react'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import logo from "@/assets/images/PriceFirst.png";
import ArrowDown from '../../assets/icons/ArrowDown';
import { HamburgerMenu } from 'iconsax-reactjs';


const Header = () => {
  return (
    <>
      <div className={styles["header"]}>
        <img src={logo} alt="logo" width="" height="" />

        <div className={styles["header-menu"]}>
          <NavLink className={styles["menu"]} to="/">
            <span>iPhone</span>
            <span>
              <ArrowDown />
            </span>
          </NavLink>
          <NavLink className={styles["menu"]} to="/">
            <span>Samsung Phones</span>
            <span>
              <ArrowDown />
            </span>
          </NavLink>
          <NavLink className={styles["menu"]} to="/">
            <span>Google Pixels</span>
            <span>
              <ArrowDown />
            </span>
          </NavLink>
        </div>

        <div>
          <HamburgerMenu size="32" className={styles["hambruger-icon"]} />
        </div>
      </div>
    </>
  );
}

export default Header