import React from "react";
import urphone from "../../assets/images/urphone.png";
import weBuyPhone from '../../assets/images/weBuyPhonepng.png'
import MobileDirect from "../../assets/images/MobileDirect.png";
import Vendi from "../../assets/images/Vendi.png";
import bank from "../../assets/icons/Bank";
import paypal from "../../assets/icons/Paypal";
import styles from "./productOffer.module.css"
import trustpilot from '../../assets/images/trustpilotlogo.png'
import Button from "../button/Button";
import clsx from "clsx";

const ProductOffer = () => {
  const offer = [
    {
      img: urphone,
      days: "up to 7 days",
      price: "2,220.00",
      paymentMethods: [
        {
          methodIcon: bank,
          methodName: "Bank Transfer",
        },
        {
          methodIcon: paypal,
          methodName: "PayPal",
        },
      ],
    },
    {
      img: weBuyPhone,
      days: "up to 7 days",
      price: "2,180.00",
      paymentMethods: [
        {
          methodIcon: bank,
          methodName: "Bank Transfer",
        },
        {
          methodIcon: paypal,
          methodName: "PayPal",
        },
      ],
    },
    {
      img: MobileDirect,
      days: "up to 7 days",
      price: "2,132.00",
      paymentMethods: [
        {
          methodIcon: bank,
          methodName: "Bank Transfer",
        },
        {
          methodIcon: paypal,
          methodName: "PayPal",
        },
      ],
    },
    {
      img: Vendi,
      days: "up to 7 days",
      price: "2,180.00",
      paymentMethods: [
        {
          methodIcon: bank,
          methodName: "Bank Transfer",
        },
        {
          methodIcon: paypal,
          methodName: "PayPal",
        },
      ],
    },

  ];

  return [...offer]
    .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
    .map((values, index) => {
      return (
        <div key={index} className={styles["product-offer-box"]}>
          <img src={values.img} alt="Product" width="130px" />
          <div>
            <p className={styles["offer-title"]}>Pay Period</p>
            <p>{values.days}</p>
          </div>
          <div>
            <p className={styles["offer-title"]}>Pay Methods</p>
            <div className={styles["payment-method-box"]}>
              {values.paymentMethods.map((methods, index) => {
                const PaymentIcon = methods.methodIcon;
                return (
                  <div className={styles["payment-methods"]} key={index}>
                    <PaymentIcon />
                    <span>{methods.methodName}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <p className={styles["offer-title"]}>Reviews</p>
            <img src={trustpilot} width="108px" height="46" />
          </div>
          <p className={clsx("order-price", styles["hide-price-up"])}>
            £{values.price}
          </p>

          <div className={styles["order-box"]}>
            <p className={clsx("order-price", styles["hide-price-down"])}>
              £{values.price}
            </p>
            <Button
              size="sm"
              variant="secondary"
              className={styles["sell-btn"]}
            >
              Sell Now
            </Button>
          </div>
        </div>
      );
    });

};

export default ProductOffer;
