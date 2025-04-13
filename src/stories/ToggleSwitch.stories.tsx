import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import ToggleSwitch from '@/components/ToggleSwitch';

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleSwitch>;

// 👇 Controlled Story แบบใช้งานจริง
export const Interactive: Story = {
  render: (args) => {
    const InteractiveComponent = () => {
      const [checked, setChecked] = useState(false);

      return (
        <ToggleSwitch
          {...args}
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
      );
    };

    return <InteractiveComponent />;
  },
  args: {
    label: 'Enable Feature',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Switch',
    checked: false,
    disabled: true,
    onChange: () => {},
  },
};