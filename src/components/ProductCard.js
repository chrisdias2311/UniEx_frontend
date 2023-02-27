import React from 'react'
import './ProductCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { bookProd } from '../redux/actions/formActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function ProductCard({ id, ownerId, name, description, category, price, image, link, date }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()


  const downloadProduct = (productId, ownerId, productName) => {
    const formdata = new FormData();
    formdata.append('id', productId);
    formdata.append('productName', productName);
    formdata.append('sellerId', ownerId);
    formdata.append('buyerId', JSON.parse(localStorage.getItem('user'))._id);
    formdata.append('buyerName', JSON.parse(localStorage.getItem('user')).firstname);

    axios.post('http://localhost:5000/api/products/downloadproduct', formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res =>
        console.log("Done")
      )
      .catch(err =>
        console.log("This is the error", err),
      );
    console.log(formdata);
  }


  const bookProduct = (productId, ownerId, productName) => {
    console.log("Product id from card", productId)
    const formdata = new FormData();
    formdata.append('id', productId);
    formdata.append('productName', productName);
    formdata.append('sellerId', ownerId);
    formdata.append('buyerId', JSON.parse(localStorage.getItem('user'))._id);
    formdata.append('buyerName', JSON.parse(localStorage.getItem('user')).firstname);

    axios.post('http://localhost:5000/api/products/bookproduct', formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        alert("Product brought successfully!")    //improvement needed
        dispatch(bookProd(productId))
      })
      .catch(err =>
        console.log("This is the error", err),
      );

    console.log(formdata);

  }

  const viewProduct = (productId) => {
    // console.log(productId)
    navigate('/viewproduct/'+productId)
  }

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
            link ? <Button onClick={() => downloadProduct(id, ownerId, name)} href={link} variant="contained">Download</Button> : <Button onClick={() => bookProduct(id, ownerId, name)} variant="contained">Book Now</Button>
          }
          <Button onClick={()=>viewProduct(id)} size="small">View</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ProductCard