import React, { useState, useEffect } from "react";
import image from "@/assets/images/iphone.png";
import styles from "./variantPicker.module.css";
import Button from "../button/Button";
import { InfoCircle } from "iconsax-reactjs";
import { useSearchParams } from "react-router-dom";

const VariantPicker = ({ model = "" }) => {
  const modelName = model.replace(/-/g, " ");

  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedOptions, setSelectedOptions] = useState({
    storage: "",
    condition: "",
    network: "",
  });

  // Initialize state from URL params
  useEffect(() => {
    const storage = searchParams.get("storage") || "";
    const condition = searchParams.get("condition") || "";
    const network = searchParams.get("network") || "";

    setSelectedOptions({ storage, condition, network });
  }, []);

  const variant = [
    {
      key: "storage",
      variantTitle: "Storage",
      options: ["256 GB", "512 GB", "1 TB"],
    },
    {
      key: "condition",
      variantTitle: "Condition",
      options: ["Brand New", "Excellent", "Good", "Faulty"],
    },
    {
      key: "network",
      variantTitle: "Network",
      options: ["Unlocked", "Three", "Vodaone", "O2", "EE"],
    },
  ];

  // Handle variant selection
  const setVariant = (key, optionValue) => {
    // Update component state
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: optionValue,
    }));

    // Update search params in URL
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams);
      newParams.set(key, optionValue);
      return newParams;
    });
  };

  return (
    <div className={styles["variant-box"]}>
      <div className={styles["img-box"]}>
        <img src={image} width="223px" height="280px" alt="Phone" />
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
                    const isSelected =
                      selectedOptions[variantItem.key] === optionValue;
                    return (
                      <Button
                        key={optionIndex}
                        size="sm"
                        variant={isSelected ? "primary" : "secondary"}
                        onClick={() => setVariant(variantItem.key, optionValue)}
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
