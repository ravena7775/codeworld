import React from 'react';

const Button = ({ children, className = '', href = '#' }) => {
  return (
    <a
      href={href}
      className={`flex items-center justify-center rounded-tl-[23px] rounded-br-[23px] text-white font-medium text-lg sm:text-xl px-6 py-3 ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;