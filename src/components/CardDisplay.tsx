'use client';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from '@mui/material';

interface CardDisplayProps {
  title: string;
  description: string;
  image: string;
  buttonLabel?: string;
  onClick?: () => void;
}

export default function CardDisplay({
  title,
  description,
  image,
  buttonLabel = 'Learn More',
  onClick,
}: CardDisplayProps) {
  return (
    <Card sx={{ maxWidth: 360, borderRadius: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box>
          <Button onClick={onClick} variant="contained" size="small">
            {buttonLabel}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}