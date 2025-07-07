import React from 'react'
import styles from './orderConfirmation.module.css'
import SmsNotification from '@/assets/icons/SmsNotification.jsx'
import Truck from "@/assets/icons/Truck.jsx";
import WalletCheck from "@/assets/icons/WalletCheck.jsx";
import clsx from 'clsx';

const OrderConfirmation = () => {

  return (
    <div className={styles["icons-box"]}>
      <div>
        <div className={clsx(styles["first-icon-box"], styles["icon-box"])}>
          <SmsNotification svgClass={styles["icon"]} />
        </div>
        <div>
          <h4 className={styles.title}>Order confirmation</h4>
          <p className={styles["desc"]}>
            You will shortly receive an email from Price First confirming your
            order number.
          </p>
        </div>
      </div>

      <div>
        <div className={clsx(styles["second-icon-box"], styles["icon-box"])}>
          <Truck svgClass={styles["icon"]} />
        </div>
        <div>
          <h4 className={styles.title}>Send Your Device</h4>
          <p className={styles["desc"]}>
            Use the postage label included in your confirmation email, and your
            own packaging to send your device to Price First.
          </p>
        </div>
      </div>

      <div>
        <div className={clsx(styles["third-icon-box"], styles["icon-box"])}>
          <WalletCheck svgClass={styles["icon"]} />
        </div>
        <div>
          <h4 className={styles.title}>Get Paid Fast</h4>
          <p className={styles["desc"]}>
            Sit back and wait to get paid to your bank account
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderConfirmation