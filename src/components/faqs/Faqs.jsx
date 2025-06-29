import React from "react";
import styles from "./faqs.module.css";
import ArrowDown from "../../assets/icons/ArrowDown";

const Faqs = ({ title = "First Question", desc = "This is First answer" }) => {
  return (
    <>
      <details className={styles["faq-section"]}>
        <summary className={styles["faq-summary"]}>
          <h4 className={styles["faq-title"]}>{title}</h4>
          <ArrowDown pathClass={styles.path} svgClass={styles.svg} />
        </summary>
        {
          <div className={styles["faq-detail"]}>
            <p className={styles["faq-description"]}>{desc}</p>
          </div>
        }
      </details>
    </>
  );
};

export default Faqs;
