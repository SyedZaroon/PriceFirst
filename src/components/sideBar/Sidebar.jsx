import React, { useEffect, useState } from "react";
import styles from "./sideBar.module.css";
import clsx from "clsx";
import logo from "../../assets/images/PriceFirst.png";
import { NavLink } from "react-router-dom";
import ArrowDown from "../../assets/icons/ArrowDown";
import SubMenu from "../subMenu/SubMenu";
import iphoneSubmenu from '../../subMenu/menuData.js'


const Sidebar = ({ view = false, onClose }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const mousePosition = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    if (view) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [view]);
    
    const [subMenu, setSubMenu] = useState(false)

  return (
    <>
      {view && (
        <div
          className={styles.overlay}
          onClick={onClose}
          onMouseMove={mousePosition}
        >
          <div
            className={styles.closeFloating}
            style={{ left: cursorPos.x, top: cursorPos.y }}
          >
            X
          </div>
        </div>
      )}

      <div className={clsx(styles.sidebar, view ? styles.open : styles.close)}>
        <div className={styles["sidebar-header"]}>
          <img src={logo} alt="logo" width="" height="" />
          <span onClick={onClose} className={styles["close-btn"]}>
            X
          </span>
        </div>

        <div className={styles["sidebar-menu"]}>
          <NavLink
            className={clsx(styles["menu-item"], styles["iphone-menu"])}
                      to="/"
                      onClick={()=>{setSubMenu((pre)=>!pre)}}
          >
            <span className={styles["iphone"]}>iPhone</span>
            <span className={styles.arrow}>
              <ArrowDown pathClass={styles["arrow-path"]} />
            </span>
            <div className={clsx(styles["iphone-submenu"], subMenu? styles["submenu-open"] : styles["submenu-close"])} >
              <SubMenu menu={iphoneSubmenu} type="flex" />
            </div>
          </NavLink>
          <NavLink className={styles["menu-item"]} to="/">
            <span>Samsung Phones</span>
            <span className={styles.arrow}>
              <ArrowDown pathClass={styles["arrow-path"]} />
            </span>
          </NavLink>
          <NavLink className={styles["menu-item"]} to="/">
            <span>Google Pixels</span>
            <span className={styles.arrow}>
              <ArrowDown pathClass={styles["arrow-path"]} />
            </span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
