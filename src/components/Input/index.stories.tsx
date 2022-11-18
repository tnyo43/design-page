import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: '入力してください...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: '入力してください...',
  disabled: true,
};
