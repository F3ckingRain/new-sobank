import React from 'react';

import color from '@/components/SVG/colors';

const OfflineBankSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 30 30"
    fill="none"
  >
    <path
      d="M12.5 26.25H17.5M23.75 26.25V6.25C23.75 5.58696 23.4866 4.95107 23.0178 4.48223C22.5489 4.01339 21.913 3.75 21.25 3.75H8.75C8.08696 3.75 7.45107 4.01339 6.98223 4.48223C6.51339 4.95107 6.25 5.58696 6.25 6.25V26.25H23.75ZM23.75 26.25H26.25H23.75ZM23.75 26.25H17.5H23.75ZM6.25 26.25H3.75H6.25ZM6.25 26.25H12.5H6.25ZM11.25 8.75H12.5H11.25ZM11.25 13.75H12.5H11.25ZM17.5 8.75H18.75H17.5ZM17.5 13.75H18.75H17.5ZM12.5 26.25V20C12.5 19.6685 12.6317 19.3505 12.8661 19.1161C13.1005 18.8817 13.4185 18.75 13.75 18.75H16.25C16.5815 18.75 16.8995 18.8817 17.1339 19.1161C17.3683 19.3505 17.5 19.6685 17.5 20V26.25H12.5Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default OfflineBankSvg;
