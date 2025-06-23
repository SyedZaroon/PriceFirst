import React from 'react'
import styles from '@/components/footer/footer.module.css'
import Sms from '../../assets/icons/Sms';
import InputFields from '../inputFields/InputFields';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import IconButton from '../iconButton/Iconbutton';


const Footer = () => {
  return (
    <>
      <div className={styles["footer"]}>
        <div className={styles["footer-box"]}>
          <div className={styles["footer-box-top"]}>
            <div className={styles["footer-box-top-row1"]}>
              <h1>Start Selling With Us</h1>
              <InputFields
                placeholder="Enter Your Email"
                prefixIcon={<Sms />}
                suffixIcon={
                  <IconButton size="2xs">
                    <ArrowRightIcon />
                  </IconButton>
                }
              />
            </div>
          </div>
        </div>
      </div>
      <IconButton size="xs">
        <ArrowRightIcon />
      </IconButton>
    </>
  );
}

export default Footer