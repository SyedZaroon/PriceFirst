import React from "react";
import styles from "./button.module.css";

const Button = ({
  children,
  size = "",
  variant = "",
  disabled = false,
  className = "",
  ...props
}) => {
  
    const classes = [
      styles.btn,
      styles[`btn-${size}`],
      styles[`btn-${variant}`],
      className,
    ]
      .filter(Boolean)
      .join(" ");

  return (
    <button className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
