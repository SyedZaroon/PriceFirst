import React, { Children } from 'react'
import styles from './radio.module.css'

const Radiobutton = ({
  children,
  size = "sm",
  disabled = false,
    defaultChecked = false,
  name= "option"
}) => {
  const customradio = [styles.radio, styles[`radio-${size}`]]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <label className={styles["radio-wrapper"]}>
        <input
          type="radio"
          name={name}
          disabled={disabled}
          defaultChecked={defaultChecked}
        />
        <span className={customradio}></span>
        {children}
      </label>
    </>
  );
};

export default Radiobutton