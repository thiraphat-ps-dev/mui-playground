import type { Meta, StoryObj } from '@storybook/react';
import ButtonPrimary from '@/components/ButtonPrimary';

const meta: Meta<typeof ButtonPrimary> = {
  title: 'Components/ButtonPrimary',
  component: ButtonPrimary,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonPrimary>;

export const Default: Story = {
  args: {
    children: 'Click Me 💖',
  },
};

export const WithEmoji: Story = {
  args: {
    children: '🚀 Launch',
  },
};
