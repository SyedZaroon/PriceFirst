import React from 'react'
import InputFields from '@/components/inputFields/InputFields'
import SearchIcon from '@/assets/icons/SearchIcon'
import ArrowDown from "@/assets/icons/ArrowDown";
import styles from "./checkoutForm.module.css";
import Button from "../button/Button"
import Bank from '../../assets/icons/Bank';
import Paypal from '../../assets/icons/Paypal';

const CheckoutForm = () => {
  return (
    <form className={styles["checkout-form"]}>
      <div>
        <h4 className={styles["form-title"]}>Enter Your Details</h4>

        <div className={styles["fields-group"]}>
          <InputFields
            className={styles["checout-field"]}
            label="Name*"
            placeholder="Full Name"
            variant="border"
            type="text"
          />

          <InputFields
            className={styles["checout-field"]}
            label="Email*"
            placeholder="Email Address"
            variant="border"
            type="email"
          />

          <InputFields
            className={styles["checout-field"]}
            label="Mobile Phone*"
            placeholder="Phone Number"
            variant="border"
            type="text"
          />
        </div>
      </div>

      <div>
        <h4 className={styles["form-title"]}>Enter Your Address</h4>

        <div className={styles["fields-group"]}>
          <InputFields
            className={styles["checout-field"]}
            label="Post Code*"
            placeholder="e.g. SW1A 2AA"
            variant="border"
            type="text"
            suffixIcon={<SearchIcon />}
          />

          <InputFields
            className={styles["checout-field"]}
            label="Choose Address*"
            placeholder="Please select your address"
            variant="border"
            type="text"
            suffixIcon={<ArrowDown />}
          />

          <InputFields
            className={styles["checout-field"]}
            label="Additional Information"
            placeholder="Apartment, suite, etc (optional)"
            variant="border"
            type="text"
          />

          <div className={styles["row-flex-field"]}>
            <InputFields
              className={styles["checout-field"]}
              label="Town"
              placeholder="Apartment, suite, etc (optional)"
              variant="border"
              type="text"
            />

            <InputFields
              className={styles["checout-field"]}
              label="Country"
              placeholder="Apartment, suite, etc (optional)"
              variant="border"
              type="text"
            />
          </div>
        </div>
      </div>

      <div>
        <h4 className={styles["form-title"]}>Payment</h4>
        <div className={styles["fields-group"]}>
          <div className={styles["row-flex-field"]}>
            <InputFields
              className={styles["checout-field"]}
              variant="border"
              type="radio"
              name="payment"
              value="bank"
            >
              <div className={styles["radio-child"]}>
                <span>
                  <Bank />
                </span>
                <span>Bank</span>
              </div>
            </InputFields>

            <InputFields
              className={styles["checout-field"]}
              variant="border"
              type="radio"
              name="payment"
              value="paypal"
            >
              <div className={styles["radio-child"]}>
                <span>
                  <Paypal />
                </span>
                <span>Paypal</span>
              </div>
            </InputFields>
          </div>

          {
            <div className={styles["row-flex-field"]}>
              <InputFields
                className={styles["checout-field"]}
                label="Sort Code*"
                placeholder="e.g. 111111"
                variant="border"
                type="text"
              />

              <InputFields
                className={styles["checout-field"]}
                label="Bank Account Number*"
                placeholder="e.g. 12345678"
                variant="border"
                type="text"
              />
            </div>
          }
        </div>
      </div>

      <div>
        <h4 className={styles["form-title"]}>Postage</h4>

        <div className={styles["fields-group"]}>
          <InputFields
            className={styles["checout-field"]}
            variant="border"
            type="radio"
            name="postage"
          >
            <div>
              <p className={styles["radio-heading"]}>Postage Label</p>
              <p className={styles["radio-desc"]}>
                Receiver a pre-paid postage label via email and attach it to
                your own packaging.
              </p>
            </div>
          </InputFields>

          <InputFields
            className={styles["checout-field"]}
            variant="border"
            type="radio"
            name="postage"
          >
            <div>
              <p className={styles["radio-heading"]}>Send me a postage pack</p>
              <p className={styles["radio-desc"]}>
                You’ll be sent a postage-paid pack ready to pop your device in.
              </p>
            </div>
          </InputFields>
        </div>
      </div>
      <Button size="md" variant="primary" type="submit">
        Complete Your Order
      </Button>
    </form>
  );
}

export default CheckoutForm