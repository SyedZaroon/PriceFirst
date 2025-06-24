import React from "react";
import styles from "./checkbox.module.css";
import Check from "../../assets/icons/Check"

const Checkbox = ({
  label = "Defaule",
  size = "sm",
  disabled = false,

}) => {
  
  const customCheckbox = [
    styles["custom-checkbox"],
    styles[`custom-checkbox-${size}`]
  ].filter(Boolean).join(" ");

  return (
    <>
      <label className={styles["checkbox-wrapper"]}>
        <input type="checkbox" disabled={disabled}  />
        <span className={customCheckbox}>
          <Check className={styles["check-icon"]} />
        </span>
        <span className={styles["label-text"]}>{label}</span>
      </label>
    </>
  );
};

export default Checkbox;