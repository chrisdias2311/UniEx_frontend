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
import LinearProgress from '@mui/material/LinearProgress';

function TransactionDetails() {
    const params = useParams();
    const navigate = useNavigate();

    const [loader, setLoader] = useState(true);
    const [upperloader, setUpperLoader] = useState(true);

    const [sellerName,  setSellerName] = React.useState('');
    const [sellerEmail, setSellerEmail] = React.useState('');
    const [sellerClass, setSellerClass] = React.useState('');
    const [sellerPhone, setSellerPhone] = React.useState('');

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');

    useEffect(() => {

        const formdata = new FormData();
        formdata.append('tid', params.id);

        axios.post('https://uniexserver.onrender.com/api/transactions/trasactiondetails', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.data.broughtBy === JSON.parse(localStorage.getItem('user'))._id) {
                    formdata.append('userid', res.data.soldBy);
                    formdata.append('productid', res.data.productId);

                    axios.post('https://uniexserver.onrender.com/api/transactions/userdetails', formdata, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => {
                            setUpperLoader(false)
                            setSellerName(res.data.firstname + ' ' + res.data.lastname)
                            setSellerEmail(res.data.email)
                            setSellerClass(res.data.year + "  " + res.data.dept + "  " + res.data.class)
                            setSellerPhone(res.data.phone)
                        })
                        .catch(err =>
                            console.log("This is the error", err),
                        );



                    axios.post('https://uniexserver.onrender.com/api/products/productdetails', formdata, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => {
                            setLoader(false)
                            setProductName(res.data.name)
                            setProductDescription(res.data.description)
                            setProductCategory(res.data.category)
                            setProductPrice(res.data.price)
                        })
                        .catch(err =>
                            console.log("This is the error", err),
                        );

                } else {
                    navigate('/')
                }
            })
            .catch(err =>
                console.log("This is the error", err),
            );
    }, [])


  return (
    <div className='transaction_details'>
      <h1>T</h1>
      <h1>Transaction Details</h1>

      <Card sx={{ maxWidth: 500 }}>
        {
            upperloader?
            <LinearProgress/>
            :
            <></>
        }
        
                <CardContent sx={{ backgroundColor: 'white' }}>

                    <Typography variant="h5" component="div">
                        Seller Details
                    </Typography>
                    <br></br>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Email: <strong>{sellerEmail}</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Name: <strong>{sellerName}</strong>
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Class: <strong>{sellerClass}</strong>
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Phone: <strong>{sellerPhone}</strong>
                    </Typography>
                </CardContent>
            </Card>

            <br></br>
            <br></br>


            <Card sx={{ maxWidth: 500 }}>
                {
                    loader?
                    <LinearProgress/>
                    :
                    <></>
                }
                
                <CardContent sx={{ backgroundColor: 'white' }}>

                    <Typography variant="h5" component="div">
                        Product Details
                    </Typography>
                    <br></br>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Name: <strong>{productName}</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Description: <strong>{productDescription}</strong>
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Category: <strong>{productCategory}</strong>
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Price: ₹<strong>{productPrice}</strong>
                    </Typography>
                </CardContent>
            </Card>
    </div>
  )
}

export default TransactionDetails
