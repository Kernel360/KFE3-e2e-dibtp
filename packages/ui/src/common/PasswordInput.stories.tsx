import type { StoryObj, Meta } from "@storybook/react-vite";
import TempIcon from "./TempIcon";
import PasswordInput from "./PasswordInput";

export default {
  component: PasswordInput,
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordInput>;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {
  args: {
    LeftIcon: TempIcon,
    PasswordEyeIcon: TempIcon,
  },
};
