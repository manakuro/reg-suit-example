import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'ボタン',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'ボタン',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'ボタン2',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'ボタン',
};
