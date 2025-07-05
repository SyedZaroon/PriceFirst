import React from "react";
import styles from "./iconBox.module.css";
import SecuritySafe from "../../assets/icons/SecuritySafe";
import Danger from "../../assets/icons/Danger";
import clsx from "clsx";

const IconBox = ({
  title = "Safe & Secure",
  desc = "Your information is securely passed to the selected buyer, we never share your data.",
  icon = <SecuritySafe />,
  variant = "",
}) => {
  return (
    <div className={clsx(styles["iconbox"], styles[`${variant}-iconbox`])}>
      { variant?  <Danger svgClass={styles.danger} /> : ""}
      <div className={styles["iconbox-content"]} >
        <h4 className={styles["iconbox-title"]}>{title}</h4>
        <p className={styles["iconbox-desc"]}>{desc}</p>
      </div>
      <span className={styles.icon}>
        {React.cloneElement(icon, {
          svgClass: styles.svg,
          pathClass: styles.path,
        })}
      </span>
    </div>
  );
};

export default IconBox;
