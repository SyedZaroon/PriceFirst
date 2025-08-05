const InfoIcon = ({ svgClass = "", pathClass = "" }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={svgClass}
  >
    <path
      className={pathClass}
      d="M6.99984 12.8333C10.2082 12.8333 12.8332 10.2083 12.8332 6.99999C12.8332 3.79166 10.2082 1.16666 6.99984 1.16666C3.7915 1.16666 1.1665 3.79166 1.1665 6.99999C1.1665 10.2083 3.7915 12.8333 6.99984 12.8333Z"
      stroke="#596066"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      className={pathClass}
      d="M7 4.66666V7.58332"
      stroke="#596066"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      className={pathClass}
      d="M6.99658 9.33334H7.00182"
      stroke="#596066"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default InfoIcon;
