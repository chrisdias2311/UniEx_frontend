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
import { useState } from 'react';
import { useEffect } from 'react';


function ProductCard({ id, ownerId, name, description, category, price, image, link, date }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userValidity, setUserValidity] = useState('');



  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUserValidity(JSON.parse(localStorage.getItem('user')).validity)
    }
  }, [])




  const downloadProduct = (productId, ownerId, productName) => {
    if (JSON.parse(localStorage.getItem('user'))._id) {
      const formdata = new FormData();
      formdata.append('id', productId);
      formdata.append('productName', productName);
      formdata.append('sellerId', ownerId);
      formdata.append('buyerId', JSON.parse(localStorage.getItem('user'))._id);
      formdata.append('buyerName', JSON.parse(localStorage.getItem('user')).firstname);

      axios.post('https://uniexserver.onrender.com/api/products/downloadproduct', formdata, {
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

    }
  }


  const bookProduct = (productId, ownerId, productName) => {
    if (localStorage.getItem('user')) {

      if (JSON.parse(localStorage.getItem('user')).validity === 'Yes') {
        const formdata = new FormData();
        formdata.append('id', productId);
        formdata.append('productName', productName);
        formdata.append('sellerId', ownerId);
        formdata.append('buyerId', JSON.parse(localStorage.getItem('user'))._id);
        formdata.append('buyerName', JSON.parse(localStorage.getItem('user')).firstname);

        axios.post('https://uniexserver.onrender.com/api/products/bookproduct', formdata, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(res => {
            if (res.status === 200) {
              navigate('/bookingsuccessful')
            }
            dispatch(bookProd(productId))
          })
          .catch(err =>
            console.log("This is the error", err),
          );

      } else {
        navigate('/accountunderreview')
      }

    } else {
      navigate('/userlogin')
    }

  }

  return (
    <div className="product">
      <Card sx={{ maxWidth: 345, minWidth: 345, minHeight: 450 }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt="Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Description: </strong>{description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <strong>Category: </strong> {category}
          </Typography>
          <Typography component="div">
            Price: ₹{price}
          </Typography>

          <CardActions>
            {
              userValidity === 'Yes' ?
                <>
                  {
                    link ? <Button onClick={() => downloadProduct(id, ownerId, name)} href={link} variant="contained">Download</Button> : <Button onClick={() => bookProduct(id, ownerId, name)} variant="contained">Book Now</Button>
                  }
                </>
                :
                <></>
            }

            {/* {
            link ? <Button onClick={() => downloadProduct(id, ownerId, name)} href={link} variant="contained">Download</Button> : <Button onClick={() => bookProduct(id, ownerId, name)} variant="contained">Book Now</Button>
          } */}

            <a className='link_tag' href={image} target="_blank" rel="noreferrer">
              View Product
            </a>

          </CardActions>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProductCard