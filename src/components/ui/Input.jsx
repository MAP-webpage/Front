import React from 'react';

export const Input = ({ className, ...props }) => {
  return (
    <input
      {...props}
      className={`border rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    />
  );
};