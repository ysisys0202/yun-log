import type { Meta, StoryObj } from "@storybook/react";

import Divider from "@/components/common/Divider";
import { gray } from "@/constants/colors";

const meta = {
  title: "Blocks/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    width: {
      description:
        "Divider의 너비를 지정하는 속성입니다. [숫자 + 단위] 값을 지정해주세요. (스토리북 상에서는 % 값이 적용되지 않습니다.)",
    },
    height: {
      description:
        "Divider의 높이를 지정하는 속성입니다. [숫자 + 단위] 값을 지정해주세요. (스토리북 상에서는 % 값이 적용되지 않습니다.)",
    },
    color: {
      description: "Divider의 색상 값입니다.",
      control: "color",
    },
    className: { table: { disable: true } },
    propsCss: { table: { disable: true } },
  },
} satisfies Meta<typeof Divider>;

type Story = StoryObj<typeof meta>;

export const DefaultDivider: Story = {
  args: {
    width: "500px",
    height: "1px",
    color: gray[60],
  },
};

export default meta;
