import React, { useEffect, useState } from "react";
import image from "@/assets/images/iphone.png";
import styles from "./variantPicker.module.css";
import Button from "../button/Button";
import { InfoCircle } from "iconsax-reactjs";
import { useSearchParams } from "react-router-dom";

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

const VariantPicker = ({ model = "" }) => {
  const modelName = model.replace(/-/g, " ");

  const [selectedOptions, setSelectedOptions] = useState({
    storage: "",
    condition: "",
    network: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();

  const setVariant = (value, key) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [key]: value,
    }));

    setSearchParams((pre) => {
      const newParams = new URLSearchParams(pre);
      newParams.set(key, value);
      return newParams;
    });
  };

 useEffect(() => {
   const resetOptions = {};
   variant.forEach((v) => {
     resetOptions[v.key] = "";
   });
   setSelectedOptions(resetOptions);

   const newParams = new URLSearchParams(searchParams);
   variant.forEach((v) => {
     newParams.delete(v.key);
   });
   setSearchParams(newParams);
 }, [model]);


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
                        onClick={() => {
                          setVariant(optionValue, variantItem.key);
                        }}
                        key={optionIndex}
                        size="sm"
                        variant={
                          selectedOptions[variantItem.key] === optionValue
                            ? "primary"
                            : "secondary"
                        }
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
