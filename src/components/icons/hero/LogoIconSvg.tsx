import { FC } from 'react';

interface LogoIconSvgProps {
  color: string;
}

const LogoIconSvg: FC<LogoIconSvgProps> = ({ color }) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={32} height={32} fill='none'>
    <path
      fill={color}
      d='M0 4a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v4c0 13.255-10.745 24-24 24H4a4 4 0 0 1-4-4V4Z'
    />
  </svg>
);
export default LogoIconSvg;
