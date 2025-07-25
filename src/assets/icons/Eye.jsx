import React from "react";

const Eye = ({ svgClass = "", pathClass = "" }) => {
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
        d="M12.9833 10C12.9833 11.65 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.65 7.0166 10C7.0166 8.35 8.34993 7.01666 9.99993 7.01666C11.6499 7.01666 12.9833 8.35 12.9833 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={pathClass}
        d="M9.99987 16.8917C12.9415 16.8917 15.6832 15.1583 17.5915 12.1583C18.3415 10.9833 18.3415 9.00834 17.5915 7.83334C15.6832 4.83334 12.9415 3.10001 9.99987 3.10001C7.0582 3.10001 4.31654 4.83334 2.4082 7.83334C1.6582 9.00834 1.6582 10.9833 2.4082 12.1583C4.31654 15.1583 7.0582 16.8917 9.99987 16.8917Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Eye;
