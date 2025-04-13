import type { Meta, StoryObj } from '@storybook/react';
import InputField from '@/components/InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: 'Your Name',
    placeholder: 'Enter your name',
    helperText: 'This is a sample input field',
  },
};

export const ErrorState: Story = {
  args: {
    label: 'Email',
    placeholder: 'you@example.com',
    error: true,
    helperText: 'This field is required',
  },
};