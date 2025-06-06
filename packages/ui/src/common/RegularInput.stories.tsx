import type { StoryObj, Meta } from "@storybook/react-vite";
import TempIcon from "./TempIcon";
import RegularInput from "./RegularInput";

export default {
  component: RegularInput,
  tags: ["autodocs"],
} satisfies Meta<typeof RegularInput>;

type Story = StoryObj<typeof RegularInput>;

export const Default: Story = {
  args: {
    LeftIcon: TempIcon,
    widthSize: "md",
    heightSize: "lg",
  },
};
