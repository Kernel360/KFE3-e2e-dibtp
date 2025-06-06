import type { StoryObj, Meta } from "@storybook/react-vite";
import AuthInput from "./authInput";
import TempIcon from "./TempIcon";

export default {
  component: AuthInput,
  tags: ["autodocs"],
} satisfies Meta<typeof AuthInput>;

type Story = StoryObj<typeof AuthInput>;

export const Default: Story = {
  args: {
    placeHolder: "hi",
    LeftIcon: TempIcon,
    PasswordEyeIcon: TempIcon,
    // className: "bg-blue-500 hover:bg-blue-600",
  },
};
