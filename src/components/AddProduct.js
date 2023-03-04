import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AddProduct.css'

import axios from 'axios';

import Button from '@mui/material/Button';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import LinearProgress from '@mui/material/LinearProgress';

import Alert from '@mui/material/Alert';


import { useEffect } from 'react';

function AddProduct() {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false)
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate("/userlogin");
        } else if (JSON.parse(localStorage.getItem('user')).validity !== "Yes") {
            // alert("Your account is under validation process")
            navigate("/accountunderreview");
        }
    }, []);





    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        price: '',
        link: '',
        image: '',
    });
    const imageData = new FormData();
    const [imageUpload, setImageUpload] = useState(false);

    // const dispatch = useDispatch();

    const handleNameChange = (event) => {
        setFormData({ ...formData, name: event.target.value });
    }
    const handleDescriptionChange = (event) => {
        setFormData({ ...formData, description: event.target.value });
    }
    const handleCategoryChange = (event) => {
        setFormData({ ...formData, category: event.target.value });
    }
    const handlePriceChange = (event) => {
        setFormData({ ...formData, price: event.target.value });
    }
    const handleLinkChange = (event) => {
        setFormData({ ...formData, link: event.target.value })
    }

    const handleImageChange = (event) => {
        console.log("Handle Image change called")
        setFormData({ ...formData, image: event.target.files[0] });
        imageData.append('file', formData.image);
        console.log(formData.image);
        setImageUpload(true);
    }

    const addProduct = (e) => {

        if (formData.name !== '' && formData.description !== '' && formData.category !== '' && formData.price !== '' && formData.image !== '') {

            setLoader(true)

            e.preventDefault();
            console.log("Add Product Called called");
            console.log(JSON.parse(localStorage.getItem('user'))._id)

            const formdata = new FormData();
            formdata.append('ownerId', JSON.parse(localStorage.getItem('user'))._id);
            formdata.append('name', formData.name);
            formdata.append('description', formData.description);
            formdata.append('category', formData.category);
            formdata.append('price', formData.price);
            formdata.append('link', formData.link);
            formdata.append('file', formData.image);
            console.log("Formdata", formdata)

            axios.post('http://localhost:5000/api/products/addproduct', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(res => {
                    setLoader(false)
                    setFormData({ ...formData, name: ''});
                    setFormData({ ...formData, description: ''});
                    setFormData({ ...formData, category: ''});
                    setFormData({ ...formData, price: ''});
                    setFormData({ ...formData, link: ''});
                    setFormData({ ...formData, image: ''});

                    console.log(res)
                    setSuccess(true)
                    setTimeout(() => {
                        setSuccess(false)
                        
                    }, 2000);
                    navigate('/dashboard')
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
        <div className='addproduct'>
            <div className='addproduct_container'>
                {
                    loader ? <LinearProgress /> : <></>
                }
                <h1>Add a Product</h1>

                <div className='ap_form_and_button'>

                    <form className='inputForm'>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.name} onChange={handleNameChange} label="Product Name" variant="outlined" />
                        </div>

                        <br></br>

                        <div className='inputField'>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Product Description"
                                value={formData.description}
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
                                    value={formData.category}
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
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.price} onChange={handlePriceChange} label="Quote Price" variant="outlined" />
                        </div>

                        <br></br>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.link} onChange={handleLinkChange} label="Product Link" variant="outlined" />
                        </div>


                        <h5>Upload Product Image</h5>

                        {
                            (formData.image) ? <><Alert severity="success">{formData.image.name}</Alert> <br></br></> : <></>
                        }



                        <Button variant="contained" value={formData.image} component="label" onChange={handleImageChange}>
                            Upload
                            <input hidden type="file" />
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label" onChange={handleImageChange}>
                            <input hidden type="file" />
                            <PhotoCamera />
                        </IconButton>



                        <br></br>

                    </form>
                    <br></br>

                    {
                        success ? <Alert severity="success">Product added Successfully!</Alert> : (
                            error ? <Alert severity="error">Make sure you've entered all the details correctly</Alert> : <></>
                        )
                    }

                    <br></br>

                    <Button variant="contained" onClick={addProduct}>
                        Add Product
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct
