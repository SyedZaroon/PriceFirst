import React from "react";
import styles from "./checkbox.module.css";

const Checkbox = ({
  children,
  size = "",
  className = "",
  disabled = false
}) => {
  const classes = [styles.checkmark, styles[`checkmark-${size}`], className]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <label className={styles["checkbox-wrapper"]}>
        <input type="checkbox" />
        <span className={classes} disabled={disabled}></span>
        {children}
      </label>
    </>
  );
};

export default Checkbox;
