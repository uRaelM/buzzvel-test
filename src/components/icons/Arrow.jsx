import React from "react";

const Arrow = ({ color = "#FCD34D" }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.5 12H6H18.5ZM6 12L12 6L6 12ZM6 12L12 18L6 12Z" fill={color} />
    <path
      d="M18.5 12H6M6 12L12 6M6 12L12 18"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Arrow;
