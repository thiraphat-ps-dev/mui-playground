'use client';
import { Button, ButtonProps } from '@mui/material';

export default function ButtonPrimary(props: ButtonProps) {
  return (
    <Button
      variant="contained"
      color="primary"
      sx={{
        borderRadius: '12px',
        textTransform: 'none',
        fontWeight: 600,
        paddingX: 3,
        paddingY: 1.5,
      }}
      {...props}
    />
  );
}
