import React from 'react'
import styles from './header.module.css'
import { NavLink } from 'react-router-dom'
import logo from "@/assets/images/PriceFirst.png";


const Header = () => {
  return (
    <>
      <div className={styles["header"]}>
        <img src={logo} alt='logo' width="" height="" />
        <div className={styles["header-menu"]} >
          <NavLink to="/">iPhone</NavLink>
          <NavLink to="/">Samsung Phones</NavLink>
          <NavLink to="/">Google Pixels</NavLink>
        </div>
      </div>
    </>
  );
}

export default Header