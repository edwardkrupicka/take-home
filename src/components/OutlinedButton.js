import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function OutlinedButtons({ article }) {
  return (
    <Stack>
      <Button className='button' variant="outlined" href={article.url}>
        Link to Article
      </Button>
    </Stack>
  );
}