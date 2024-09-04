import type { Meta, StoryObj } from '@storybook/react';

import Tag from '@/components/common/Tag';

const meta = {
  title: 'Common/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant:{
      options:["contained" ,"outlined"],
      control: "select",
    } ,
    backgroundColor:{
      control:"color"
    },
    textColor:{
      control:"color"
    },
    borderColor:{
      control:"color"
    },
    size:{
      options: [ "sm", "md"],
      control: "select",
    },
    children:{
      control:"string"
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: 'Tag',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Tag',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Tag',
  },
};

export const Midium: Story = {
  args: {
    size: 'md',
    children: 'Tag',
  },
};
