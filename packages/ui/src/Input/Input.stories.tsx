import type { Meta, StoryObj } from "@storybook/nextjs";
import { Input, InputProps } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "text",
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    error: "This field is required",
  },
};

export const WithPasswordToggle: Story = {
  args: {
    type: "password",
    label: "Password",
    leftIcon: "password",
  },
};

export const WithEmailIcon: Story = {
  args: {
    type: "email",
    label: "Email",
    leftIcon: "email",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Cannot edit",
  },
};
