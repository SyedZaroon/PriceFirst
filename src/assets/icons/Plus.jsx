import React from "react";

const Plus = ({ className = "" }) => {
  return (
    <>
      <svg
        className={className}
        width="14"
        height="14"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 1V11M11 6L1 6"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default Plus;
