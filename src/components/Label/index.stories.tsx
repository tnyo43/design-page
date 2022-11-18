import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '.';

export default {
  title: 'Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'メールアドレス',
};

export const Required = Template.bind({});
Required.args = {
  children: 'メールアドレス',
  required: true,
};
