import type { StoryObj, Meta } from '@storybook/nextjs';

import Input from './Input';

export default {
  component: Input,
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    className: 'bg-red-500',
    title: 'asdfasdfdsf',
  },
};
