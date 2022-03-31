import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button } from '../src/Button';
import { BtnProps } from '../src/types/btn-props';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      defaultValue: 'Default text',
    },
  },
};

export default meta;

const Template: Story<BtnProps> = (args) => <Button {...args} />;

export const Default = () => Template.bind({});
export const Secondary = () => Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: ' I am secondary',
};
