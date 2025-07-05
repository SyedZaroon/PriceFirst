import React from "react";
import styles from "./pageMenu.module.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import ArrowRightIcon from "../../assets/icons/ArrowRightIcon";
import ArrowDown from "../../assets/icons/ArrowDown";

const PageMenu = () => {
  const menu = ["About Us", "Terms Conditions", "Privacy Policy"];
  const navigate = useNavigate();
  const location = useLocation();

  const stringfy = (str) => str.toLowerCase().replace(/\s+/g, "-");

  const handleChange = (e) => {
    const selectedPath = e.target.value;
    if (selectedPath) {
      navigate(selectedPath);
    }
  };

  return (
    <>
      <div className={styles["menu"]}>
        {menu.map((value, index) => (
          <NavLink
            key={index}
            to={`/${stringfy(value)}`}
            className={({ isActive }) =>
              `${styles["desktop-menu"]} ${isActive ? styles["active"] : ""}`
            }
          >
            <div className={styles["menu-text"]}>
              <span className={styles["text"]}>{value}</span>
              <span className={styles["icon"]}>
                <ArrowRightIcon />
              </span>
            </div>
          </NavLink>
        ))}
      </div>

      <div className={styles["select-wrapper"]}>
        <select
          className={styles.select}
          value={location.pathname}
          onChange={handleChange}
        >
          {menu.map((value, index) => (
            <option key={index} value={`/${stringfy(value)}`}>
              {value}
            </option>
          ))}
        </select>
        <span className={styles["arrow-icon"]}>
          <ArrowDown />
        </span>
      </div>
    </>
  );
};

export default PageMenu;
