import React from 'react';

import color from '@/components/SVG/colors';

const PeriodSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 25 25"
    fill="none"
  >
    <path
      d="M24 2.25H18.75V0.25C18.75 0.1125 18.6375 0 18.5 0H16.75C16.6125 0 16.5 0.1125 16.5 0.25V2.25H8.5V0.25C8.5 0.1125 8.3875 0 8.25 0H6.5C6.3625 0 6.25 0.1125 6.25 0.25V2.25H1C0.446875 2.25 0 2.69688 0 3.25V24C0 24.5531 0.446875 25 1 25H24C24.5531 25 25 24.5531 25 24V3.25C25 2.69688 24.5531 2.25 24 2.25ZM22.75 22.75H2.25V10.875H22.75V22.75ZM22.75 8.75H2.25V4.5H6.25V6C6.25 6.1375 6.3625 6.25 6.5 6.25H8.25C8.3875 6.25 8.5 6.1375 8.5 6V4.5H16.5V6C16.5 6.1375 16.6125 6.25 16.75 6.25H18.5C18.6375 6.25 18.75 6.1375 18.75 6V4.5H22.75V8.75Z"
      fill={color}
    />
  </svg>
);

export default PeriodSvg;