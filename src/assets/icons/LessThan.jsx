import React from "react";

const LessThan = ({ svgClass = "", pathClass = "" }) => {
  return (
    <svg
      className={svgClass}
      width={9}
      height={16}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "scaleX(-1)" }}
    >
      <path
        className={pathClass}
        d="M1.42505 14.6L6.85838 9.16669C7.50005 8.52502 7.50005 7.47503 6.85838 6.83336L1.42505 1.40002"
        stroke="white"
        strokeWidth="1.5"
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LessThan;
