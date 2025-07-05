import React from 'react'
import styles from './thankYouPage.module.css'
import OrderDetails from '@/components/orderDetails/OrderDetails';


const ThankYouPage = () => {
  return (
    <>
      <div className={styles["thankyou-box"]}>
              <h1 className={styles["thankyou-heading"]} >Thank you for your order!</h1>
              <OrderDetails />
      </div>
    </>
  );
}

export default ThankYouPage