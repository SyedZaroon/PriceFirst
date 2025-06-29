import React from "react";

const ArrowSmallUp = ({ svgClass = "", pathClass = "" }) => {
  return (
    <svg
      width={10}
      height={10}
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClass}
    >
      <path
        d="M5 8.125L5 1.875M5 1.875L2.1875 4.6875M5 1.875L7.8125 4.6875"
        className={pathClass}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowSmallUp;
