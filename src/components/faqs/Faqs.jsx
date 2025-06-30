import React from "react";
import styles from "./faqs.module.css";
import ArrowDown from "../../assets/icons/ArrowDown";

const Faqs = ({ title, desc, isOpen, onToggle }) => {
  return (
    <div className={`${styles["faq-section"]} ${isOpen ? styles.open : ""}`}>
      <div
        className={
          `${styles["faq-summary"]} ${isOpen ? styles["faq-summary-open"] : ""} `
        }
        onClick={onToggle}
      >
        <h4 className={styles["faq-title"]}>{title}</h4>
        <ArrowDown
          pathClass={styles.path}
          svgClass={`${styles.svg} ${isOpen ? styles.rotate : ""}`}
        />
      </div>

      <div
        className={`${styles["faq-detail"]} ${
          isOpen ? styles.show : ""
        }`}
      >
        <p className={styles["faq-description"]}>{desc}</p>
      </div>
    </div>
  );
};

export default Faqs;
