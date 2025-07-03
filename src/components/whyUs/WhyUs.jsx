import React from "react";
import styles from "./whyUs.module.css";
import ContentBox from "../contentBox/ContentBox";
import pound from "@/assets/images/pound_3d_coin.png";

const WhyUs = () => {
  return (
    <div className={styles["whyus-box"]}>
      <div className={styles["whyus-title"]}>
        <h1>Why Choose Price First?</h1>
      </div>

      <div className={styles["whyus-content"]}>
        <div className={styles["contentbox"]}>
          <ContentBox
            title="Best Price Guaranteed"
            desc="We compare real-time offers from verified UK recyclers to ensure you get the most cash for your old device—no guesswork, just top value."
          />
          <ContentBox />
          <ContentBox
            title="Free Postage"
            desc="We’ll email you a prepaid tracked label, so you can send your device hassle-free without spending a penny."
          />
        </div>

        <img
          className={styles["img"]}
          src={pound}
          width="280px"
          height="280px"
        />
      </div>
      {/* <div className={styles["whyus-blur-shape"]}></div> */}
    </div>
  );
};

export default WhyUs;
