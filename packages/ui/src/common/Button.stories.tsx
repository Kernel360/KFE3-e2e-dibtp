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
    title: "입찰하기",
    className: "",
    variants: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "회원가입",
    className: "bg-black",
    variants: "secondary",
  },
};

export const Transparent: Story = {
  args: {
    title: "더보기",
    className: "",
    variants: "transparent",
  },
};

export const Disabled: Story = {
  args: {
    title: "입찰하기",
    className: "",
    variants: "primary",
    disabled: true,
  },
};
