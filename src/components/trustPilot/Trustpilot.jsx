import React from 'react'
import styles from './trustPilot.module.css'
import trutpilot from '../../assets/images/trustpilot.png'

const Trustpilot = () => {
  return (
    <div className={styles["trustpilot-box"]}>
      <h3>What customers say about us </h3>
          <p>We do our best to provide you the best experience ever</p>
          <img src={trutpilot} />
    </div>
  );
}

export default Trustpilot