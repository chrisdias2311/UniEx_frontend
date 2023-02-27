import React, { useState } from 'react'
import './BookedProductDetails.css'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';


import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



function BookedProductDetails() {
    const params = useParams();
    const navigate = useNavigate();
    console.log("From params ", params.id)

    // const [productDetails, setProductDetails] = useState()
    // const [buyer, setBuyer] = useState()
    const [buyerName, setBuyerName] = React.useState('');
    const [buyerEmail, setBuyerEmail] = React.useState('');
    const [buyerClass, setBuyerClass] = React.useState('');
    const [buyerPhone, setBuyerPhone] = React.useState('');

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');


    useEffect(() => {

        const formdata = new FormData();
        formdata.append('tid', params.id);

        axios.post('http://localhost:5000/api/transactions/trasactiondetails', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log("This is the res", res.data)
                if (res.data.soldBy === JSON.parse(localStorage.getItem('user'))._id) {
                    formdata.append('userid', res.data.broughtBy);
                    formdata.append('productid', res.data.productId);

                    axios.post('http://localhost:5000/api/transactions/userdetails', formdata, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => {
                            console.log("This is opposite persons details", res.data)
                            // setBuyer(res.data)
                            setBuyerName(res.data.firstname + ' ' + res.data.lastname)
                            setBuyerEmail(res.data.email)
                            setBuyerClass(res.data.year + "  " + res.data.dept + "  " + res.data.class)
                            setBuyerPhone(res.data.phone)
                        })
                        .catch(err =>
                            console.log("This is the error", err),
                        );



                    axios.post('http://localhost:5000/api/products/productdetails', formdata, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => {
                            console.log("This is product details details", res.data)
                            setProductName(res.data.name)
                            setProductDescription(res.data.description)
                            setProductCategory(res.data.category)
                            setProductPrice(res.data.price)
                            // setProductDetails(res.data);

                            // console.log()
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
        <div className='overall'>
            <h1>T</h1>
            <h1>Transaction Details</h1>

            <Card sx={{ maxWidth: 500 }}>
                <CardContent sx={{ backgroundColor: 'white' }}>

                    <Typography variant="h5" component="div">
                        Buyer Details
                    </Typography>
                    <br></br>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Email: <strong>{buyerEmail}</strong>
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Name: <strong>{buyerName}</strong>
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Class: <strong>{buyerClass}</strong>
                    </Typography>

                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Phone: <strong>{buyerPhone}</strong>
                    </Typography>
                </CardContent>
            </Card>

            <br></br>
            <br></br>


            <Card sx={{ maxWidth: 500 }}>
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
                        Price: <strong>{productPrice}</strong>
                    </Typography>
                </CardContent>
            </Card>

        </div>
    )
}

export default BookedProductDetails
