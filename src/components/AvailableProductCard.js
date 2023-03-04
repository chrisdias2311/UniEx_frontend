import React from 'react'
import './AvailableProductCard.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useDispatch } from 'react-redux';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { deleteProduct } from '../redux/actions/formActions';

function AvailableProductCard({ id, ownerId, name, description, category, price, image, link }) {
  const dispatch = useDispatch()

  const navigate = useNavigate();

  const updateProduct = (id) => {
    navigate('/dashboard/updateproduct/'+id)
  }

  const deleteProd =(id) => {

    const formdata = new FormData();
        formdata.append('id', id);

        axios.post('http://localhost:5000/api/products/deleteproduct', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
              dispatch(deleteProduct(id))
            })
            .catch(err =>
                console.log("This is the error", err),
            );
  }


  return (
    <div className='myProduct_card'>
      <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={"http://" + image}
          alt="Image"
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
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button variant="contained" onClick={()=>updateProduct(id)}>Update</Button>
          <Button sx={{ ':hover': { bgcolor: 'red', color: 'white' }, bgcolor: 'red' }} onClick={()=>deleteProd(id)} variant="contained">Delete</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default AvailableProductCard
