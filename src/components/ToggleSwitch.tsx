'use client';

import { FormControlLabel, Switch } from '@mui/material';

interface ToggleSwitchProps {
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export default function ToggleSwitch({
  label = '',
  checked,
  onChange,
  disabled = false,
}: ToggleSwitchProps) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      }
      label={label}
    />
  );
}