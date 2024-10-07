import type { Meta, StoryObj } from "@storybook/react";

import Typography from "@/components/common/Typography";

const meta = {
  title: "Typographys/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Typography의 스타일을 지정하는 속성입니다.",
      control: "select",
      defaultValue: "h1",
    },
    color: {
      description: "Typography의 색상 값입니다.",
      control: "color",
    },
    children: {
      description: "텍스트 입력 값 입니다.",
      defaultValue: "Heading",
    },
    fontWeight: {
      description: "Typography의 두께 값입니다.",
      control: "select",
      defaultValue: 600,
    },
    className: { table: { disable: true } },
    css: { table: { disable: true } },
    as: { table: { disable: true } },
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    variant: "h1",
    as: "h1",
    children: "Heading1",
  },
};

export const Heading2: Story = {
  args: {
    variant: "h2",
    as: "h2",
    children: "Heading2",
  },
};

export const Heading3: Story = {
  args: {
    variant: "h3",
    as: "h3",
    children: "Heading3",
  },
};

export const Heading4: Story = {
  args: {
    variant: "h4",
    as: "h4",
    children: "Heading4",
  },
};
export const Body1: Story = {
  args: {
    variant: "body1",
    as: "p",
    children: "Body1",
  },
};
export const Body2: Story = {
  args: {
    variant: "body2",
    as: "p",
    children: "Body2",
  },
};

export const Subtitle1: Story = {
  args: {
    variant: "subtitle1",
    as: "p",
    children: "Subtitle1",
  },
};
