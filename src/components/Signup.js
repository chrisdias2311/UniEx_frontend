import React, { useState } from 'react'
import "./Signup.css";
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/actions/formActions';
import { Connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/actions/formActions';

import axios from 'axios';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { grey } from '@mui/material/colors';

import Alert from '@mui/material/Alert';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import LinearProgress from '@mui/material/LinearProgress';

function Signup() {

    const year = [
        {
            value: 'FE',
            label: 'FE',
        },
        {
            value: 'SE',
            label: 'SE',
        },
        {
            value: 'TE',
            label: 'TE',
        },
        {
            value: 'BE',
            label: 'BE',
        },
    ];

    const dept = [
        {
            value: 'CMPN',
            label: 'CMPN',
        },
        {
            value: 'INFT',
            label: 'INFT',
        },
        {
            value: 'EXTC',
            label: 'EXTC',
        },
        {
            value: 'ELEC',
            label: 'ELEC',
        },
        {
            value: 'MECH',
            label: 'MECH',
        }
    ];

    const div = [
        {
            value: 'A',
            label: 'A',
        },
        {
            value: 'B',
            label: 'B',
        },
        {
            value: 'FE1',
            label: 'FE1',
        },
        {
            value: 'FE2',
            label: 'FE2',
        },
        {
            value: 'FE3',
            label: 'FE3',
        },
        {
            value: 'FE4',
            label: 'FE4',
        },
        {
            value: 'FE5',
            label: 'FE5',
        },
        {
            value: 'FE6',
            label: 'FE6',
        },
        {
            value: 'FE7',
            label: 'FE7',
        }
    ];

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        pid: '',
        email: '',
        firstName: '',
        lastName: '',
        phone: '',
        year: '',
        dept: '',
        class: '',
        image: '',
        password: '',

    });
    const imageData = new FormData();
    const [imageUpload, setImageUpload] = useState(false);
    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const handlePidChange = (event) => {
        setFormData({ ...formData, pid: event.target.value });
    }
    const handleEmailChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
    }
    const handleFirstNameChange = (event) => {
        setFormData({ ...formData, firstName: event.target.value });
    }
    const handleLastNameChange = (event) => {
        setFormData({ ...formData, lastName: event.target.value });
    }
    const handlePhoneChange = (event) => {
        setFormData({ ...formData, phone: event.target.value });
    }


    const handleYearChange = (event) => {
        setFormData({ ...formData, year: event.target.value })
    }
    const handleDeptChange = (event) => {
        setFormData({ ...formData, dept: event.target.value })
    }
    const handleDivChange = (event) => {
        setFormData({ ...formData, class: event.target.value })
    }


    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }
    const handleIdImageChange = async (event) => {
        setFormData({ ...formData, image: event.target.files[0] });

        imageData.append('file', formData.image);
        console.log(formData.image.name);
        setImageUpload(true);
    }



    const submitSignupForm = (e) => {
        if (formData.pid !== '' && formData.email !== '' && formData.firstName !== '' && formData.lastName !== '' && formData.phone !== '' && formData.year !== '' && formData.dept !== '' && formData.class !== '' && formData.password !== '' && formData.image !== '' && (formData.image.type==='image/jpeg' || formData.image.type==='image/png')) {
            setLoader(true)

            e.preventDefault();

            const formdata = new FormData();
            formdata.append('pid', formData.pid);
            formdata.append('email', formData.email);
            formdata.append('firstname', formData.firstName);
            formdata.append('lastname', formData.lastName);
            formdata.append('phone', formData.phone);
            formdata.append('year', formData.year);
            formdata.append('dept', formData.dept);
            formdata.append('class', formData.class);
            formdata.append('password', formData.password);
            formdata.append('file', formData.image);

            axios.post('https://uniexserver.onrender.com/api/user/register', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
                .then(res => {
                    
                    localStorage.clear();
                    localStorage.setItem('user', JSON.stringify(res.data));

                    const verifyemail = JSON.parse(localStorage.getItem('user')).email
                    formdata.append('verifyEmail', verifyemail);

                    axios.post('https://uniexserver.onrender.com/api/user/getuser', formdata, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => {
                            if (res.data.email) {
                                setError(false)
                                setSuccess(true);
                                localStorage.clear();
                                localStorage.setItem('user', JSON.stringify(res.data));
                                navigate('/validateotp/' + res.data._id)
                            } else {
                                setError(true)
                                alert(res.response.data)
                                alert("Error occurs here")

                            }
                        })
                        .catch(err => {
                            setError(true)
                            alert(err.response.data)
                        });
                })
                .catch(err => {
                    setError(true)
                    alert(err.response.data)
                });
        } else {
            setError(true)
        }
    }

    return (
        <div className='signup'>

            <div className='signup_container'>
                {
                    loader ? <LinearProgress /> : <></>
                }
                <h1>Sign-up</h1>

                <div className='sp_form_and_button'>
                    <form >
                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.pid} onChange={handlePidChange} label="PID*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.email} onChange={handleEmailChange} label="Email*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.firstName} onChange={handleFirstNameChange} label="Firstname*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.lastName} onChange={handleLastNameChange} label="Lastname*" variant="outlined" />
                        </div>

                        <div className='inputField'>
                            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.phone} onChange={handlePhoneChange} label="Phone-no*" variant="outlined" />
                        </div>



                        <div className='inputField'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Year*</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.year}
                                    label="Select Class"
                                    onChange={handleYearChange}
                                >
                                    {
                                        year.map((option) =>
                                            (<MenuItem value={option.value} key={option.value}>{option.value}</MenuItem>)
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </div>

                        <div className='inputField'>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Dept*</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.dept}
                                    label="Select Class"
                                    onChange={handleDeptChange}
                                >
                                    {
                                        dept.map((option) =>
                                            (<MenuItem value={option.value} key={option.value}>{option.value}</MenuItem>)
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </div>

                        <div className='inputField'>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Class*</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formData.class}
                                    label="Select Class"
                                    onChange={handleDivChange}
                                >
                                    {
                                        div.map((option) =>
                                            (<MenuItem value={option.value} key={option.value}>{option.value}</MenuItem>)
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </div>

                        <div className='inputField'>
                            <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password*" variant="outlined" />
                        </div>

                        <h5>Upload SFIT Identity card* (Only jpeg/png) format</h5>
                        <Button variant="contained" value={formData.image} component="label" onChange={handleIdImageChange}>
                            Upload
                            <input hidden type="file" />
                        </Button>
                        <IconButton color="primary" aria-label="upload picture" component="label" onChange={handleIdImageChange}>
                            <input hidden type="file" />
                            <PhotoCamera />
                        </IconButton>

                        <br></br>
                        <br></br>

                        {
                            imageUpload ?
                                <Alert severity="success">{formData.image.name}</Alert>
                                :
                                <div></div>
                        }
                    </form>


                    {
                        success ? <Alert severity="success">Logged in Successfully!</Alert> : (
                            error ? <Alert severity="error">Make sure you've entered the correct details, or maybe account already exists</Alert> : <></>
                        )
                    }

                    <br></br>

                    <Button variant="contained" onClick={submitSignupForm}>
                        Create UniEx Account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Signup
