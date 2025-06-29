import React from "react";

const Xmark = ({ svgClass = "", pathClass = "" }) => {
  return (
    <svg
      className={svgClass}
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClass}
        d="M3 9L9 3M3 3L9 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Xmark;
