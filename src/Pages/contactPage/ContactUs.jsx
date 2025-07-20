import React, { useState } from 'react'
import styles from './contactUs.module.css'
import Inputfields from '@/components/inputFields/InputFields'
import Button from '@/components/button/Button'
const ContactUs = () => {

  const [contactForm, setContactForm] = useState({
    name:"",
    email:"",
    message:""
  })

  const handleInputChange = (e) => {
    const {name , value} = e.target
    setContactForm((pre) => ({
      ...pre,
      [name]:value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact Details", contactForm);
  }


  return (
    <>
      <div className={styles["contact-banner"]}>
        <h1>
          <span>Say Hello!</span> Got a question or a device to sell?
        </h1>
        <p>Got a question or a device to sell?</p>
      </div>

      <div className={styles["form-box"]}>
        <form onSubmit={handleSubmit} className={styles["contact-form"]}>
          <div className={styles["form-row1"]}>
            <Inputfields
              className="styles[contactForm-field]"
              label="Name*"
              variant="underline"
              placeholder="Let us know who you are."
              type="text"
              name="name"
              value={contactForm.name}
              onChange={handleInputChange}
            />

            <Inputfields
              className="styles[contactForm-field]"
              label="Email*"
              variant="underline"
              placeholder="Where should we reply?"
              type="email"
              name="email"
              value={contactForm.email}
              onChange={handleInputChange}
            />
          </div>

          <Inputfields
            className="styles[contactForm-field]"
            label="Message*"
            variant="underline"
            placeholder="Ask us anything or share your thoughts."
            type="text"
            name="message"
            value={contactForm.message}
            onChange={handleInputChange}
          />

          <Button
            className={styles["contact-submit-btn"]}
            variant="primary"
            size="md"
          >
            Send Message
          </Button>
        </form>
      </div>
    </>
  );
}

export default ContactUs