import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';

import axios from 'axios';

import Button from '@mui/material/Button';
import './UpdateProduct.css'

import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LinearProgress from '@mui/material/LinearProgress';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';


import { useEffect } from 'react';

function UpdateProduct() {
    const navigate = useNavigate();
    const params = useParams();

    const [loader, setLoader] = useState(false)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        link: '',
        image: '',
    });

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [link, setLink] = useState('')




    useEffect(() => {
        const formdata = new FormData();
        formdata.append('productid', params.id);

        axios.post('https://uniexserver.onrender.com/api/products/productdetails', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                setName(res.data.name)
                setDescription(res.data.description)
                setCategory(res.data.category)
                setPrice(res.data.price)
                setLink(res.data.link)
            })
            .catch(err =>
                console.log("This is the error", err),
            );


    }, []);




    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value)
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }
    const handlePriceChange = (event) => {
        setPrice(event.target.value)
    }
    const handleLinkChange = (event) => {
        setLink(event.target.value)
    }

    const updateProduct = (e) => {

        if (name !== '' && description !== '' && category !== '' && price !== '') {
            setLoader(true)

            e.preventDefault();

            const formdata = new FormData();
            formdata.append('productid', params.id);
            formdata.append('name', name);
            formdata.append('description', description);
            formdata.append('category', category);
            formdata.append('price', price);
            formdata.append('link', link);

            axios.post('https://uniexserver.onrender.com/api/products/updateproduct', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    setLoader(false)
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                        navigate('/dashboard')
                    }, 3000);
                })
                .catch(err => {
                    setError(true)
                    console.log(err)
                });
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }



    return (
        <div className='updateproduct'>

            <div className='updateproduct_container'>
                {
                    loader ? <LinearProgress /> : <></>
                }
                <h1>Update Product</h1>
                <div className='up_form_and_button'>

                    <form className='inputForm'>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={name} onChange={handleNameChange} label="Product Name" variant="outlined" />
                        </div>

                        <br></br>

                        <div className='inputField'>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Product Description"
                                value={description}
                                onChange={handleDescriptionChange}
                                fullWidth
                                multiline
                                maxRows={4}
                            />
                        </div>
                        <br></br>

                        <div className='inputfield'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={category}
                                    label="Select Category"
                                    onChange={handleCategoryChange}
                                >
                                    <MenuItem value={'Stationery and Equipments'}>Stationery & equipments</MenuItem>
                                    <MenuItem value={'Notes & Study Material'}>Notes & Study Material</MenuItem>
                                    <MenuItem value={'Previous Papers'}>Previous Papers</MenuItem>
                                    <MenuItem value={'E-notes and Study Material'}>E-notes and Study Material</MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <br></br>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={price} onChange={handlePriceChange} label="Quote Price" variant="outlined" />
                        </div>

                        <br></br>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={link} onChange={handleLinkChange} label="Product Link" variant="outlined" />
                        </div>

                        <br></br>

                    </form>

                    {
                        success ? <Alert severity="success">Product updated Successfully!</Alert> : (
                            error ? <Alert severity="error">Make sure you've entered all the details correctly</Alert> : <></>
                        )
                    }

                    <br></br>

                    <Button variant="contained" onClick={updateProduct}>
                        Update Product
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UpdateProduct
