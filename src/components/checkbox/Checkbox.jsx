import React from "react";
import styles from "./checkbox.module.css";
import Check from "../../assets/icons/Check";

const Checkbox = ({
  children,
  icon = <Check />,
  size = "sm",
  className = "",
  disabled = false,
}) => {
  const classes = [styles.checkmark, styles[`checkmark-${size}`], className]
    .filter(Boolean)
    .join(" ");

  const Checkclasses = [styles.check, styles[`check-${size}`]]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <label className={styles["checkbox-wrapper"]}>
        <input type="checkbox" disabled={disabled} />
        <span className={classes}>
          {React.cloneElement(icon, {
            className: `${icon.props.className || ""} ${Checkclasses}`.trim(),
          })}
        </span>
        {children}
      </label>
    </>
  );
};

export default Checkbox;