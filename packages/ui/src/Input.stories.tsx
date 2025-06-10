import Input from '@repo/ui/stories/Input';
import type { StoryObj, Meta } from '@storybook/nextjs';

export default {
  component: Input,
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    className: 'bg-blue-500',
    title: '테스트해봅니다.',
  },
};
