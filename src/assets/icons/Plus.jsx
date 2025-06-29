import React from "react";

const Plus = ({ svgClass = "", pathClass = "" }) => {
  return (
    <svg
      className={svgClass}
      width="14"
      height="14"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClass}
        d="M6 1V11M11 6L1 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Plus;
