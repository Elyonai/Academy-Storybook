import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src/Button';
import { BtnProps } from '../src/types/btn-props';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

export const Default = () => <Button variant="primary">Click Me</Button>;
export const Secondary = () => <Button variant="secondary">Click Me</Button>;
