import React from "react";

const Check = ({ className = "", style = {} }) => {
  return (
    <>
      <svg
        className={className}
        style={style}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.75 7.625L5.75 12.625L13.25 1.375"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
};

export default Check;
