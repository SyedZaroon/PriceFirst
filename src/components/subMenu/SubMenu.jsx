import React from 'react'
import styles from './subMenu.module.css'
import clsx from 'clsx';

const SubMenu = ({
    className = "",
    type = "grid",
    menu = []
}) => {

    
  
  return (
    <div className={clsx(styles[`submenu-box-${type}`],className)}>
      {menu.map((value, index) => {
        return <p key={index} className={styles["menu"]}>{value}</p>;
      })}
    </div>
  );
}

export default SubMenu