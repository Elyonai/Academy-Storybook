import React from 'react';
import { BtnProps } from './types/btn-props';

export const Button = ({
  children,
  variant = 'primary',
  ...props
}: BtnProps) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'gray',
        color: 'white',
        borderRadius: 50,
        padding: 10,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};
