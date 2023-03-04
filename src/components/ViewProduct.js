import React, { useState } from 'react'
import './TransactionDetails.css';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ViewProduct() {
  const params = useParams()


  useEffect(() => {

    const formdata = new FormData();
    formdata.append('productid', params.id);

    axios.post('https://uniexserver.onrender.com/api/products/productdetails', formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log("This is the res", res.data)

      })
      .catch(err =>
        console.log("This is the error", err),
      );
  }, [])


  return (
    <div>
      <h1>V</h1>
      <h1>Product Details</h1>


      


    </div>
  )
}

export default ViewProduct
