import React, { FC } from 'react';

import { MobileMenuSvgProps } from '@/components/SVG/MobileMenu/types';

const MobileMenuCashSvg: FC<MobileMenuSvgProps> = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M8.32007 15.27L14.86 8.73001"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.73001 10.37C9.40932 10.37 9.95999 9.81932 9.95999 9.14001C9.95999 8.4607 9.40932 7.91 8.73001 7.91C8.0507 7.91 7.5 8.4607 7.5 9.14001C7.5 9.81932 8.0507 10.37 8.73001 10.37Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.27 16.09C15.9493 16.09 16.5 15.5393 16.5 14.86C16.5 14.1807 15.9493 13.63 15.27 13.63C14.5907 13.63 14.04 14.1807 14.04 14.86C14.04 15.5393 14.5907 16.09 15.27 16.09Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MobileMenuCashSvg;
