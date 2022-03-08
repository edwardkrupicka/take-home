import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function StoryCard({image, title, abstract, index}) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height={!index ? "400" : "250"}
          image={image}
          alt={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}