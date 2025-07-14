import React from "react";
import image from "@/assets/images/iphone.png";
import styles from "./variantPicker.module.css";
import Button from "../button/Button";
import { InfoCircle } from "iconsax-reactjs";
import { useSearchParams } from "react-router-dom";

const VariantPicker = ({ model = "" }) => {
  const modelName = model.replace(/-/g, " ");

  const variant = [
    {
      variantTitle: "Storage",
      options: ["256 GB", "512 GB", "1 TB"],
    },
    {
      variantTitle: "Condition",
      options: ["Brand New", "Excellent", "Good", "Faulty"],
    },
    {
      variantTitle: "Network",
      options: ["Unlocked", "Three", "Vodaone", "O2", "EE"],
    },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className={styles["variant-box"]}>
      <div className={styles["img-box"]}>
        <img src={image} width="223px" height="280px" />
      </div>
      <div>
        <h3 className={styles["product-title"]}>Sell My {modelName}</h3>
        <div className={styles["variant-picker"]}>
          {variant.map((variantItem, index) => {
            return (
              <div className={styles["variant-group"]} key={index}>
                <h4 className={styles["variant-title"]}>
                  {variantItem.variantTitle}
                  {variantItem.variantTitle === "Condition" && (
                    <span className={styles["condition-box"]}>
                      <span>
                        <InfoCircle width={"16px"} />
                      </span>
                      <span>Unopened, unused, in original packaging.</span>
                    </span>
                  )}
                </h4>
                <div className={styles["variant-options"]}>
                  {variantItem.options.map((optionValue, optionIndex) => {
                    return (
                      <Button
                        key={optionIndex}
                        size="sm"
                        variant="secondary"
                        onClick={() => {
                          searchParams.set(
                            variantItem.variantTitle
                              .toLowerCase()
                              .replace(/\s+/g, "-"),
                            optionValue
                          );
                          setSearchParams(searchParams);
                        }}
                      >
                        {optionValue}
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default VariantPicker;
