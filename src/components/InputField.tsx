'use client';

import { TextField, TextFieldProps } from '@mui/material';

export default function InputField(props: TextFieldProps) {
  return (
    <TextField
      fullWidth
      variant="outlined"
      size="medium"
      sx={{ borderRadius: '8px' }}
      {...props}
    />
  );
}