import type { Meta, StoryObj } from '@storybook/react';
import CardDisplay from '@/components/CardDisplay';

const meta: Meta<typeof CardDisplay> = {
  title: 'Components/CardDisplay',
  component: CardDisplay,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
    title: { control: 'text' },
    description: { control: 'text' },
    image: { control: 'text' },
    buttonLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof CardDisplay>;

export const Default: Story = {
    args: {
        title: 'Beautiful UI Component',
        description: 'This card shows how props work with image and content.',
        image: 'https://images.unsplash.com/photo-1742787584125-d94d44334047?q=80&w=3161&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        buttonLabel: 'Explore',
    },
};