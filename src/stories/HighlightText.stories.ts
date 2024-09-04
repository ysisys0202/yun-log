import type { Meta, StoryObj } from "@storybook/react";

import HighlightText from "@/components/common/HighlightText";
import { green } from "@/constants/colors";

const meta = {
  title: "Typographys/HighlightText",
  component: HighlightText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      description:
        "Highlight Text의 타입을 지정하는 속성입니다. background 타입 적용 시 기존 폰트의 크기의 80%로 보여집니다.",
      control: "select",
      defaultValue: "text",
    },
    fontWeight: {
      description: "Highlight Text의 폰트 두께 값입니다.",
      control: "select",
    },
    children: {
      description: "텍스트 입력 값 입니다.",
      defaultValue: "Heading",
    },
    textColor: {
      description: "Highlight Text의 폰트 색상 값입니다.",
      control: "color",
      defaultValue: green[100],
    },
    backgroundColor: {
      description: "Highlight Text의 배경 색상 값입니다.",
      control: "color",
      defaultValue: 400,
    },
  },
} satisfies Meta<typeof HighlightText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TextColorHighlighting: Story = {
  args: {
    type: "text",
    children: "Text Color Highlight",
  },
};

export const BackgroundColorHighlighting: Story = {
  args: {
    type: "background",
    children: "Background Color Highlighting",
  },
};
