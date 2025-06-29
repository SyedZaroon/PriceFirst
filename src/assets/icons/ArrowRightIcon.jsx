import React from "react";

const ArrowRightIcon = ({ svgClass = "", pathClass = "" }) => (
  <svg
    width={16}
    height={14}
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={svgClass}
  >
    <path
      d="M9.125 1.375L14.75 7M14.75 7L9.125 12.625M14.75 7H1.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={pathClass}
    />
  </svg>
);

export default ArrowRightIcon;
