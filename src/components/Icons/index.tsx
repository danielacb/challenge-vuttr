import * as React from 'react';

type SvgProps = {
  color?: string;
};

export const IconClose = ({ color }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="icon-close"
    >
      <path
        d="M1.3 20L0 18.7 8.7 10 0 1.3 1.3 0 10 8.7 18.7 0 20 1.4 11.3 10l8.7 8.7-1.3 1.3-8.7-8.6z"
        fill={color ? color : ''}
      />
    </svg>
  );
};

export const IconSearch = ({ color }: SvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      className="icon-search"
    >
      <path
        d="M20 18.5l-6.1-6.1c1-1.3 1.6-2.9 1.6-4.7 0-4.3-3.5-7.8-7.8-7.8C3.5 0 0 3.5 0 7.8c0 4.3 3.5 7.8 7.8 7.8 1.8 0 3.4-.6 4.7-1.6l6.1 6.1 1.4-1.6zm-12.2-5c-3.2 0-5.7-2.6-5.7-5.7s2.6-5.7 5.7-5.7 5.7 2.6 5.7 5.7-2.6 5.7-5.7 5.7z"
        fill={color ? color : ''}
      />
    </svg>
  );
};
