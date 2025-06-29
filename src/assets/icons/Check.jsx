import React from "react";

const Check = ({ svgClass = "", pathClass = "" }) => {
  return (
    <svg
      className={svgClass}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClass}
        d="M0.75 7.625L5.75 12.625L13.25 1.375"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Check;
