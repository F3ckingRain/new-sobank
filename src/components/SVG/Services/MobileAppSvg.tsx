import React from 'react';

import color from '@/components/SVG/colors';

const MobileAppSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M20 2.5H10C8.61929 2.5 7.5 3.61929 7.5 5V25C7.5 26.3807 8.61929 27.5 10 27.5H20C21.3807 27.5 22.5 26.3807 22.5 25V5C22.5 3.61929 21.3807 2.5 20 2.5Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9375 22.5H15.0625"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MobileAppSvg;
