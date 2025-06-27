import React from "react";
import styles from "./howToCompare.module.css";

const HowToCompare = () => {
  const stepData = [
    {
      stepNumber: 1,
      stepTitle: "Search Your Device",
      stepDescription: "Find your phone or tablet by typing the model name.",
    },
    {
      stepNumber: 2,
      stepTitle: "Compare Offers",
      stepDescription:
        "Browse real-time prices from trusted UK recyclers and pick the best deal.",
    },
    {
      stepNumber: 3,
      stepTitle: "Send It Free",
      stepDescription:
        "Post your device using the free prepaid label provided by the buyer.",
    },
    {
      stepNumber: 4,
      stepTitle: "Get Paid Fast",
      stepDescription:
        "Once your device is checked, payment is made often the same day!",
    },
  ];

  return (
    <>
      <div className={styles["compare-component"]}>
        {stepData.map((value) => {
          return (
            <div key={value.stepNumber} className={styles["compare-box"]}>
              <div className={styles["step-circle"]}>
                <span className={styles["step-number"]}>
                  {value.stepNumber}
                </span>
              </div>
              <div className={styles["compare-content"]}>
                <h5 className={styles["compare-title"]}>{value.stepTitle}</h5>
                <p className={styles["compare-description"]}>
                  {value.stepDescription}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HowToCompare;
