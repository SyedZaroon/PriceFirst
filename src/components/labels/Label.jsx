import React from "react";
import styles from "./label.module.css";

const Label = ({
  text = "Label",
  type = "simple",
  size = "sm",
  error = false,
  success = false,
  warning = false,
  prefixIcon = null,
  suffixIcon = null,
  className = ""
}) => {
  const state = error
    ? "error"
    : success
    ? "success"
    : warning
    ? "warning"
    : "primary";

  const labelClasses = [
    styles[`label-${type}`],
    styles[`label-${size}`],
    styles[`label-${state}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const textClass = [
    styles["text"],
    size === "sm" && styles["text-sm"],
    size === "md" && styles["text-md"],
    size === "lg" && styles["text-lg"],
    error && styles["text-error"],
    success && styles["text-success"],
    warning && styles["text-warning"],
  ]
    .filter(Boolean)
    .join(" ");

  const prefixIconClass = [styles.prefixIcon].filter(Boolean).join(" ");

  const suffixIconClass = [styles.suffixIcon].filter(Boolean).join(" ");

  return (
    <div
      className={labelClasses}
  
    >
      {prefixIcon &&
        React.cloneElement(prefixIcon, { className: prefixIconClass })}
      <span className={textClass}>{text}</span>
      {suffixIcon &&
        React.cloneElement(suffixIcon, { className: suffixIconClass })}
    </div>
  );
};

export default Label;
