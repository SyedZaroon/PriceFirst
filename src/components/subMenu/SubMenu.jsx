import React from 'react'
import styles from './subMenu.module.css'
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const SubMenu = ({
    className = "",
    type = "grid",
  menu = [],
    brand = ""
}) => {


  
  return (
    <div className={clsx(styles[`submenu-box-${type}`],className)}>
      {menu.map((value) => {
        return (
          <NavLink key={value.modelId} to={`${brand}/${value.slug}`}>
            <p className={styles["menu"]}>{value.modelName}</p>
          </NavLink>
        );
      })}
    </div>
  );
}

export default SubMenu