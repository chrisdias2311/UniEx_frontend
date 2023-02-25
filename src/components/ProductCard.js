import React from 'react'
import './ProductCard.css'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from '@mui/material/Link';
import { useState } from 'react';

function ProductCard({ id, ownerId, name, description, category, price, image, link }) {
  // console.log(image)

  return (
    <div className="product">
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
        <CardActions>
          {
            link?<Button href={link}  variant="contained">Download</Button>: <Button variant="contained">Book Now</Button>
          }
          <Button size="small">View</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ProductCard