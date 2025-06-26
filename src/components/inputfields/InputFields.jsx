import React from "react";
import styles from "./inputfields.module.css";

const InputFields = ({
  label = "",
  errormessage = "Error message",
  type = "",
  className = "",
  placeholder = "Value",
  disabled = false,
  error = false,
  success = false,
  prefixIcon = null,
  suffixIcon = null,
}) => {
  const inputClasses = [
    styles["input-field"],
    prefixIcon || suffixIcon ? styles["icon-input-field"] : "",
  ]
    .filter(Boolean)
    .join(" ");

  const iconWrapperClasses = [
    styles["input-field"],
    prefixIcon ? styles["prefixIcon-box"] : "",
    suffixIcon ? styles["suffixIcon-box"] : "",
    error ? styles["input-error"] : "",
    success ? styles["input-success"] : "",
    styles[`input-field-${type}`],
    disabled ? styles[`disabled-${type}`] : "",
    type === "text" ? styles["text-field"] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={styles["input-box"]}>
      {label && <span className={styles["input-label"]}>{label}</span>}

      <div className={iconWrapperClasses}>
        {prefixIcon && (
          <span className={styles["prefix-icon"]}>{prefixIcon}</span>
        )}

        <input
          className={inputClasses}
          type={type}
          error="error"
          placeholder={placeholder}
          disabled={disabled}
        />

        {suffixIcon && (
          <span
            className={[
              styles["suffix-icon"],
              error && styles["error-icon"],
              success && styles["success-icon"], 
            ]
              .filter(Boolean)
              .join(" ")}
          >
            {React.isValidElement(suffixIcon)? React.cloneElement(suffixIcon, {disabled}): suffixIcon}
          </span>
        )}

      </div>

      {error && <span className={styles["input-label"]}>{errormessage}</span>}
    </div>
  );
};

export default InputFields;
