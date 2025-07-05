import React from 'react'
import styles from './contactUs.module.css'
import Inputfields from '@/components/inputFields/InputFields'
import Button from '@/components/button/Button'
const ContactUs = () => {
  return (
    <>
      <div className={styles["contact-banner"]}>
        <h1>
          <span>Say Hello!</span> Got a question or a device to sell?
        </h1>
        <p>Got a question or a device to sell?</p>
      </div>

      <div className={styles["form-box"]}>
        <form className={styles["contact-form"]} >
          <div className={styles["form-row1"]}>
            <Inputfields
              className="styles[contactForm-field]"
              label="Name*"
              variant="underline"
              placeholder="Let us know who you are."
              type="text"
            />

            <Inputfields
              className="styles[contactForm-field]"
              label="Email*"
              variant="underline"
              placeholder="Where should we reply?"
              type="email"
            />
          </div>

          <Inputfields
            className="styles[contactForm-field]"
            label="Message*"
            variant="underline"
            placeholder="Ask us anything or share your thoughts."
            type="text"
          />

          <Button className={styles["contact-submit-btn"]} variant="primary" size="md">
            Send Message
          </Button>
        </form>
      </div>
    </>
  );
}

export default ContactUs