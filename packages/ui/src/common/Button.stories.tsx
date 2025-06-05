import type { StoryObj, Meta } from "@storybook/react-vite";
import Button from "./Button";

export default {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    className: "bg-blue-500 hover:bg-blue-600",
    title: "Tailwind Test",
  },
};
