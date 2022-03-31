import { HTMLAttributes, ReactNode } from 'react';
export interface BtnProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}
