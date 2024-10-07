import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/common/Button";
import { gray } from "@/constants/colors";

const meta = {
  title: "Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Button의 스타일을 지정합니다.",
      options: ["contained", "outlined", "text"],
      control: "select",
      defaultValue: "outlined",
    },
    backgroundColor: {
      description: "Button의 내부 색상입니다.",
      control: "color",
      defaultValue: gray[20],
    },
    textColor: {
      description: "Button의 텍스트 색상입니다.",
      control: "color",
      defaultValue: gray[80],
    },
    borderColor: {
      description: "Button의 테두리 색상입니다.",
      control: "color",
      defaultValue: gray[50],
    },
    size: {
      description: "Button의 크기입니다.",
      options: ["sm", "md", "lg"],
      control: "select",
      defaultValue: "md",
    },
    fontWeight: {
      description: "Button의 텍스트 굵기입니다..",
      options: ["400", "500", "600", "700", "800"],
      control: "select",
      defaultValue: "md",
    },
    children: {
      description: "Button의 텍스트입니다.",
      defaultValue: "Button",
    },

    className: { table: { disable: true } },
    propsCss: { table: { disable: true } },
    beforeIcon: {
      table: { disable: true },
    },
    afterIcon: {
      table: { disable: true },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    backgroundColor: gray[20],
    children: "Button",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    backgroundColor: "transparent",
    children: "Button",
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    backgroundColor: gray[20],
    children: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    backgroundColor: gray[20],
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    backgroundColor: gray[20],
    children: "Button",
  },
};
