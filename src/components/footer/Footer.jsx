import React, { useState } from 'react'
import styles from '@/components/footer/footer.module.css'
import Sms from '../../assets/icons/Sms';
import InputFields from '../inputFields/InputFields';
import ArrowRightIcon from '../../assets/icons/ArrowRightIcon';
import IconButton from '../iconButton/Iconbutton';
import Instagram from '../../assets/icons/Instagram'
import Facebook from "../../assets/icons/Facebook";
import LinkdIn from "../../assets/icons/LinkdIn";
import { NavLink } from 'react-router-dom';
const Footer = () => {

const [newsletter, setNewsletter] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsletter((pre) => ({
      ...pre,
      [name]:value
    }))
  }

  const handleSubmit = ((e) => {
    e.preventDefault()
    console.log(newsletter);
      setNewsletter({ email: "" });

  })

  return (
    <>
      <div className={styles["footer"]}>
        <div className={styles["footer-box"]}>
          <div className={styles["footer-box-top"]}>
            <div className={styles["footer-box-top-row1"]}>
              <h1 className={styles["footer-heading"]}>
                Start Selling With Us
              </h1>
              <div className={styles["footer-input"]}>
                <form onSubmit={handleSubmit}>
                  <InputFields
                    name="email"
                    value={newsletter.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    variant="underline"
                    prefixIcon={<Sms />}
                    suffixIcon={
                      <IconButton
                        icon={<ArrowRightIcon pathClass={styles.path} />}
                        size="2xs"
                        type="submit"
                      />
                    }
                  />
                </form>
              </div>
            </div>

            <div className={styles["footer-top-row2"]}>
              <div className={[styles["menu1"], styles["menu-flex"]].join(" ")}>
                <h4 className={styles["footer-heading"]}>About</h4>
                <ul
                  className={[
                    styles["footer-menu"],
                    styles["footer-body-text"],
                  ].join(" ")}
                >
                  <li>
                    <NavLink to="contact-us">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="privacy-policy">Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="terms-conditions">Terms & Condition</NavLink>
                  </li>
                </ul>
              </div>

              <div className={[styles["menu2"], styles["menu-flex"]].join(" ")}>
                <h4 className={styles["footer-heading"]}>Address</h4>
                <ul
                  className={[
                    styles["footer-menu"],
                    styles["footer-body-text"],
                  ].join(" ")}
                >
                  <li>
                    85 Bury Road Manchester, M8 8FX <br></br>United Kingdom
                  </li>
                </ul>
                <ul className={[styles["footer-body-social"]].join(" ")}>
                  <li>
                    <Instagram />
                  </li>
                  <li>
                    <Facebook />
                  </li>
                  <li>
                    <LinkdIn />
                  </li>
                </ul>
              </div>

              <div className={[styles["menu3"], styles["menu-flex"]].join(" ")}>
                <h4 className={styles["footer-heading"]}>Logo</h4>
                <ul
                  className={[
                    styles["footer-menu"],
                    styles["footer-body-text"],
                  ].join(" ")}
                >
                  <li>
                    Price First helps users get the best value when selling
                    their mobile or tablet, instantly comparing top offers from
                    trusted buyers.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={[
              styles["footer-copyright"],
              styles["footer-body-text"],
            ].join(" ")}
          >
            <p>© 2025 Price First. All rights reserved</p>
          </div>
        </div>

        <div className={styles["footer-big-box"]}>
          <p className={styles["footer-big-logo"]}>PRICE FIRST</p>
        </div>
      </div>
    </>
  );
}

export default Footer