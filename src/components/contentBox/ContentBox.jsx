import React from 'react'
import styles from './ContentBox.module.css'

const ContentBox = ({
  title = "Fast Payments",
  desc = "As soon as your device is received and inspected, we issue payment the same day quick, easy, and reliable.",
}) => {
  return (
    <div className={styles["content-box"]}>
          <h4 className={styles["content-title"]}>{title}</h4>
          <p className={styles["content-desc"]}>{desc}</p>
    </div>
  );
};

export default ContentBox