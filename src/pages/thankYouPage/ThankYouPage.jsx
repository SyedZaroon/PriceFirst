import React from 'react'
import styles from './thankYouPage.module.css'
import OrderDetails from '@/components/orderDetails/OrderDetails';
import IconBox from "@/components/iconBox/IconBox";


const ThankYouPage = () => {
  return (
    <>
      <div className={styles["thankyou-box"]}>
        <div>
          <h1 className={styles["thankyou-heading"]}>
            Thank you for your order!
          </h1>
          <OrderDetails />
          <div>
            <IconBox
              title="Please remove your iCloud account before sending your device"
              desc="PhoneBox can only offer a non-working price for devices locked to an iCloud account. Please remove your iCloud account before sending your device to PhoneBox."
              variant="disclaimer"
            />
          </div>
        </div>
        <div>
          <h1 className={styles["thankyou-heading"]}>What to do next?</h1>
        </div>
      </div>
    </>
  );
}

export default ThankYouPage