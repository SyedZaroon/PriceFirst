import React from 'react'
import styles from '@/components/footer/footer.module.css'
import Sms from '../../assets/icons/Sms';
import InputFields from '../inputFields/InputFields';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import IconButton from '../iconButton/Iconbutton';
import RadioButton from "../radioButton/RadioButton";
import Label from '../labels/Label';
import Dots from '../../assets/icons/Dots';
import ArrowSmallUp from '../../assets/icons/ArrowSmallUp';
import Xmark from '../../assets/icons/Xmark';
const Footer = () => {
  return (
    <>
      {/* <div className={styles["footer"]}>
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
      </IconButton> */}

      <Label size="lg" type="icon" success={true} prefixIcon={<ArrowSmallUp />} suffixIcon={<Xmark />} />
      <br></br>
      <Label size="lg" type="dot" success={true} prefixIcon={<Dots />} />
      <br></br>
      <Label size="sm" type="simple" state="primary" error={true} />
      <br></br>
      <Label size="md" type="simple" state="primary" warning={true} />
      <br></br>
      <Label size="sm" type="simple" state="primary" success={true} />
      <br></br>
    </>
  );
}

export default Footer