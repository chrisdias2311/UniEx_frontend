import React from 'react'
import './MyProductCard.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';

function MyProductCard({ id, ownerId, name, description, category, price, image, link}) {

    const navigate = useNavigate();

    const updateProduct = () => {

    }


  return (
    <div>
       <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={"http://" + image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            category: {category}
          </Typography>
          <Typography component="div">
            Price: ₹{price}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center'}}>
          <Button variant="contained">Update</Button>
          <Button sx={{ backgroundColor: 'red'}} variant="contained">Delete</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default MyProductCard
