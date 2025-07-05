import React from 'react'
import styles from './orderDetails.module.css'
import orderimg from '@/assets/images/iphone.png'
import sellingimg from '@/assets/images/urphone.png'
import trustpilotlogo from "@/assets/images/trustpilotlogo.png";

import clsx from 'clsx';


const OrderDetails = () => {

    const orderPrice = (
      <div
        className={
                clsx(
                    styles["device-details-box"],
                    styles["grid-flex"],
                    styles["order-price-box"]
                )
        }
      >
        <p className={styles["order-heading"]}>Offered Price</p>

        <div>
          <p className={styles["order-price"]}>£2,220.00</p>
        </div>
      </div>
    );


    return (
      <div className={styles["order-details-box"]}>
        <div
          className={(clsx(styles["device-details-box"]), styles["grid-flex"])}
        >
          <p className={styles["order-heading"]}>Device Details</p>

          <div
            className={clsx(styles["device-img-box"], styles["grid-flex-row"])}
          >
            <img
              className={styles["device-img"]}
              src={orderimg}
              height="148px"
              width="118px"
            />

            <div className={clsx(styles["order-details"], styles["grid-flex"])}>
              <p className={styles["order-title"]}>iPhone 16 Pro Max</p>
              <div
                className={clsx(styles["order-condition"], styles["grid-flex"])}
              >
                <p>
                  Storage: <b>1TB</b>
                </p>
                <p>
                  Condition: <b>Brand New</b>
                </p>
                <p>
                  Network: <b>Vodafone</b>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={clsx(styles["selling-details-box"], styles["grid-flex"])}
        >
          <div className={clsx(styles["grid-flex"],styles["sellig"])}>
            <p className={styles["order-heading"]}>Selling To</p>

            <div
              className={clsx(
                styles["device-img-box"],
                styles["grid-flex-row"]
              )}
            >
              <img
                className={styles["device-img"]}
                src={sellingimg}
                height="56px"
                width="144px"
              />
            </div>
          </div>
          <div className={styles["order-review-box"]}>
            <p className={clsx(styles["order-heading"])}>Reviews</p>
            <img
              className={styles["device-img"]}
              src={trustpilotlogo}
              height="56px"
              width="144px"
            />
          </div>

          <div className={clsx(styles["price-wrapper"], styles.DesktopHide)}>
            {orderPrice}
          </div>
        </div>

        <div className={clsx(styles["price-wrapper"], styles.MobileHide)}>
          {orderPrice}
        </div>
      </div>
    );
}

export default OrderDetails