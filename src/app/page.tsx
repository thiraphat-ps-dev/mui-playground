'use client'; // This file is a client component
import { Box, Container, Typography, Stack, IconButton, Tooltip } from '@mui/material';
import ButtonPrimary from '@/components/ButtonPrimary';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useThemeMode } from '@/theme/ThemeContext';

export default function HomePage() {
  const { toggle, mode } = useThemeMode();

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h3" fontWeight={700}>
          🧩 MUI Playground
        </Typography>
        <Tooltip title="Toggle Theme">
          <IconButton onClick={toggle} color="inherit">
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Tooltip>
      </Box>

      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        A personal component playground built with Next.js, MUI, and Storybook.
      </Typography>

      {/* Components Section */}
      <Box sx={{ mt: 6 }}>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          🎨 Components Demo
        </Typography>

        <Stack direction="row" spacing={2}>
          <ButtonPrimary>Click Me 💖</ButtonPrimary>
          <ButtonPrimary color="secondary">Secondary</ButtonPrimary>
        </Stack>
      </Box>
    </Container>
  );
}
