import type { Meta, StoryObj } from "@storybook/react";
import Tag from "@/components/common/Tag";
import { gray } from "@/constants/colors";
const meta = {
  title: "Tags/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "Tag의 스타일을 지정하는 값입니다.",
      options: ["contained", "outlined"],
      control: "select",
      defaultValue: "contained",
    },
    backgroundColor: {
      description: "Tag의 내부 색상 값입니다.",
      control: "color",
      defaultValue: gray[20],
    },
    textColor: {
      description: "Tag의 텍스트 색상 값입니다.",
      control: "color",
      defaultValue: gray[80],
    },
    borderColor: {
      description: "Tag의 테두리 색상 값입니다.",
      control: "color",
      defaultValue: gray[50],
    },
    size: {
      description: "Tag의 크기 값입니다.",
      options: ["sm", "md"],
      control: "select",
      defaultValue: "md",
    },
    children: {
      description: "Tag의 입력 값입니다.",
      defaultValue: "Tag",
    },
    className: { table: { disable: true } },
    propsCss: { table: { disable: true } },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    backgroundColor: gray[20],
    children: "Tag",
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: "Tag",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    backgroundColor: gray[20],
    children: "Tag",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    backgroundColor: gray[20],
    children: "Tag",
  },
};
