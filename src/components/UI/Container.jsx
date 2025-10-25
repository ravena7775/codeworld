import React from 'react';

const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 overflow-x-auto  ${className}`}>
      {children}
    </div>

  );
};

export default Container;