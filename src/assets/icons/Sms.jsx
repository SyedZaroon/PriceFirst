import React from "react";

const Sms = ({ svgClass = "", pathClass = "" }) => {
  return (
    <svg
      className={svgClass}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClass}
        d="M14.1667 17.0833H5.83341C3.33341 17.0833 1.66675 15.8333 1.66675 12.9166V7.08329C1.66675 4.16663 3.33341 2.91663 5.83341 2.91663H14.1667C16.6667 2.91663 18.3334 4.16663 18.3334 7.08329V12.9166C18.3334 15.8333 16.6667 17.0833 14.1667 17.0833Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={pathClass}
        d="M14.1666 7.5L11.5582 9.58333C10.6999 10.2667 9.29158 10.2667 8.43325 9.58333L5.83325 7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Sms;
