import React from "react";
import styles from "./button.module.css";

const Button = ({
  children,
  size = "",
  variant = "",
  disabled = false,
  icon="",
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
  
  const iconClass = [
    styles.icon
  ].filter(Boolean)
      .join(" ");

  return (
    <button className={classes} disabled={disabled} {...props} >
      {children}
      {icon && React.cloneElement(icon, { className: iconClass })}
    </button>
  );
};

export default Button;
