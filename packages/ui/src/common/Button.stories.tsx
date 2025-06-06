import type { StoryObj, Meta } from "@storybook/react-vite";
import Button from "./Button";

export default {
  title: "Components/Common/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "입찰하기",
    className: "",
    variants: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "회원가입",
    className: "bg-black",
    variants: "secondary",
  },
};

export const Transparent: Story = {
  args: {
    children: "더보기",
    className: "",
    variants: "transparent",
  },
};

export const Outline: Story = {
  args: {
    children: "입찰하기",
    className: "",
    variants: "outline",
  },
};

export const Disabled: Story = {
  args: {
    children: "입찰하기",
    className: "",
    variants: "primary",
    disabled: true,
  },
};
