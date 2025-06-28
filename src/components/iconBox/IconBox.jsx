import React from 'react'
import styles from './iconBox.module.css'
import SecuritySafe from '../../assets/icons/SecuritySafe';

const IconBox = ({
  title = "Safe & Secure",
  desc = "Your information is securely passed to the selected buyer, we never share your data.",
  icon = <SecuritySafe />,
}) => {
  return (
    <div className={styles["iconbox"]}>
      <h4 className={styles["iconbox-title"]}>{title}</h4>
      <p className={styles["iconbox-desc"]}>{desc}</p>
      <span className={styles.icon} >
        {React.cloneElement(icon, {svg: styles.svg, path: styles.path })}
      </span>
    </div>
  );
};

export default IconBox