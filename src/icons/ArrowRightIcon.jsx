import React from 'react'

const ArrowRightIcon = ({ className = "", style = {}, ...props }) => {
  return (
    <svg
      className={className}
      style={style}
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.125 1.375L14.75 7M14.75 7L9.125 12.625M14.75 7H1.25"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon