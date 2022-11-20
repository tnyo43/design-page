import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as CreateIcon } from '../../assets/create.svg';

import { Button } from '.';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: '投稿する',
  theme: 'primary',
  size: 'normal',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  children: '投稿する',
  theme: 'primary',
  size: 'small',
};

export const PrimaryFill = Template.bind({});
PrimaryFill.args = {
  children: '投稿する',
  theme: 'primary',
  display: 'fill',
};

export const Alert = Template.bind({});
Alert.args = {
  children: '削除する',
  theme: 'alert',
};

export const Strong = Template.bind({});
Strong.args = {
  children: '申し込む',
  theme: 'mono-strong',
};

export const Weak = Template.bind({});
Weak.args = {
  children: 'キャンセル',
  theme: 'mono-weak',
};

export const WithSVG = Template.bind({});
WithSVG.args = {
  children: (
    <>
      <CreateIcon />
      Create
    </>
  ),
};
