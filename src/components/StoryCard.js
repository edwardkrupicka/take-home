import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {useNavigate} from 'react-router-dom'

export default function StoryCard({image, title, abstract, index, element}) {

	let navigate = useNavigate();
	let id = element.uri.split('/')[3]

  return (
    <Card className='story-card' onClick={(e) => navigate(`/article/${id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height={!index ? "350" : "250"}
          image={image}
          alt={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {abstract}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}