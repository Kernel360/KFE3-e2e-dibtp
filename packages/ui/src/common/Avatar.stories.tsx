import type { StoryObj, Meta } from "@storybook/react-vite";
import Avatar from "./Avatar";

export default {
  title: "Components/Common/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
  },
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

// 기본 (랜덤 아바타)
export const Default: Story = {
  args: {
    alt: "김철수",
    size: "lg",
  },
};

// 유저 이미지 있는 경우
export const WithImage: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    alt: "사용자",
    size: "lg",
  },
};

// 다양한 크기
export const AllSizes: Story = {
  args: {
    alt: "sizes-example",
    size: "lg",
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Avatar alt="sm" size="sm" />
      <Avatar alt="md" size="md" />
      <Avatar alt="lg" size="lg" />
      <Avatar alt="xl" size="xl" />
    </div>
  ),
};
