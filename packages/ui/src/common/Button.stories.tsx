import type { StoryObj, Meta } from '@storybook/react-vite';
import Button from './Button';

export default {
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    className: 'bg-blue-500',
    title: '123456',
  },
};
