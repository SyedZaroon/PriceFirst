import React from 'react'
import styles from '../../components/footer/footer.module.css'
import InputFields from '../inputfields/InputFields'
import Sms from '../../assets/icons/Sms';
import Iconbutton from '../iconButton/Iconbutton'

const Footer = () => {
  return (
    <>
      <div className={styles["footer"]}>
        <div className={styles["footer-box"]}>
          <div className={styles["footer-box-top"]}>
            <div className={styles["footer-box-top-row1"]}>
              <h1>Start Selling With Us</h1>
              <InputFields prefixIcon={<Sms />} suffixIcon={<Iconbutton />} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer