import type { StoryObj, Meta } from "@storybook/react-vite";
import Badge from "./Badge";
import { BADGE_VARIANTS } from "./Badge";
import type { BadgeKey } from "./Badge";

export default {
  title: "Components/Common/Badge",
  component: Badge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // 중앙 정렬
  },
  argTypes: {
    title: {
      control: { type: "select" },
      options: Object.keys(BADGE_VARIANTS) as BadgeKey[],
      description: "뱃지 타입을 선택하세요",
    },
  },
} satisfies Meta<typeof Badge>;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    title: "BEST",
    className: "",
  },
};

// 각 타입별 스토리
export const Best: Story = {
  args: {
    title: "BEST",
  },
};

export const Urgent: Story = {
  args: {
    title: "URGENT",
  },
};
