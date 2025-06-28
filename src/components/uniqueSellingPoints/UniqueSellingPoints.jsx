import React from "react";
import styles from "./uniqueSellingPoints.module.css";
import IconBox from "../iconBox/IconBox";
import SecuritySafe from "../../assets/icons/SecuritySafe";
import Box from "../../assets/icons/Box";

const UniqueSellingPoints = () => {
  const iconBoxData = [
    {
      title: "Safe & Secure",
      desc: "Your information is securely passed to the selected buyer, we never share your data.",
      icon: <SecuritySafe />,
    },
    {
      title: "Free Postage Provided",
      desc: "All offers come with free tracked postage. Choose a label or request a pack, it’s on us.",
      icon: <Box />,
    },
    {
      title: "Free Postage Provided",
      desc: "All offers come with free tracked postage. Choose a label or request a pack, it’s on us.",
      icon: <Box />,
    },
    {
      title: "Free Postage Provided",
      desc: "All offers come with free tracked postage. Choose a label or request a pack, it’s on us.",
      icon: <Box />,
    },
    {
      title: "Free Postage Provided",
      desc: "All offers come with free tracked postage. Choose a label or request a pack, it’s on us.",
      icon: <Box />,
    },
    {
      title: "Free Postage Provided",
      desc: "All offers come with free tracked postage. Choose a label or request a pack, it’s on us.",
      icon: <Box />,
    },
  ];

  return (
    <>
      <div className={styles["unique-box"]}>
        <div className={styles["unique"]}>
          <div className={styles["unique-content"]}>
            <h1>What Sets Us Apart</h1>
            <div className={styles["unique-grid"]}>
              {iconBoxData.map((value) => {
                return <IconBox title={value.title} desc={value.desc} icon={value.icon} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniqueSellingPoints;
