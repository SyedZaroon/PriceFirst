import React from "react";
import styles from "./uniqueSellingPoints.module.css";
import IconBox from "../iconBox/IconBox";
import whyUs from "../../data/whyUs.jsx"


const UniqueSellingPoints = () => {
  

  return (
    <>
      <div className={styles["unique-box"]}>
        <div className={styles["unique"]}>
          <div className={styles["unique-content"]}>
            <h1>What Sets Us Apart</h1>
            <div className={styles["unique-grid"]}>
              {whyUs.map((value, index) => {
                return (
                  <IconBox
                    key={index}
                    title={value.title}
                    desc={value.desc}
                    icon={value.icon}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniqueSellingPoints;
