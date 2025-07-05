import React from 'react'

const ArrowDown = ({ svgClass = '', pathClass = '' }) => {
  return (
    <>
      <svg
        width={16}
        height={17}
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={svgClass}
      >
        <path
          className={pathClass}
          d="M13.28 6.76379L8.9333 11.1105C8.41997 11.6238 7.57997 11.6238 7.06664 11.1105L2.71997 6.76379"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export default ArrowDown