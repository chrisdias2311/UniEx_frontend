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
import AlertTitle from '@mui/material/AlertTitle';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("This is form data: ", console.log(formData));
    };

    const registerUser = async () => {
        const email = formData.email;
        const firstname = formData.firstName;
        const lastname = formData.lastName;
        const password = formData.password;
        const IDCard = formData.image;

        console.log("This is the formdata ", email, firstname, lastname, password, IDCard)

        if (formData.email.length > 1 && formData.password.length > 1) {
            let result = await fetch('http://localhost:5000/api/user/register', {
                method: 'post',
                body: JSON.stringify({ email, firstname, lastname, password, IDCard }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            result = await result.json()

            // localStorage.setItem("user", JSON.stringify(result));
            // localStorage.setItem("owner", name);

            if (result.auth) {
                alert("You have been succesfully registered!")
                localStorage.setItem('token', JSON.stringify(result.auth))
                localStorage.setItem('user', JSON.stringify(result.newUser))
                dispatch(setUser(result.newUser))
                navigate('/');
            }
        } else {
            alert("Please enter valid details");
        }
    }


    const submitSignupForm = (e) => {
        e.preventDefault();
        console.log("Signup called");

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

        axios.post('http://localhost:5000/api/user/register', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => console.log("An eror", res))
            .catch(err => console.log(err));
    }

    return (
        <div className='signup'>
            {/* <img
                className='signup_logo'
                src={Logo}
            /> */}

            <div className='signup_container'>
                <h1>Sign-up</h1>

                <form >
                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.pid} onChange={handlePidChange} label="PID*" variant="outlined" />
                    </div>

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.email} onChange={handleEmailChange} label="Email" variant="outlined" />
                    </div>

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.firstName} onChange={handleFirstNameChange} label="Firstname" variant="outlined" />
                    </div>

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.lastName} onChange={handleLastNameChange} label="Lastname" variant="outlined" />
                    </div>

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.phone} onChange={handlePhoneChange} label="Phone-no" variant="outlined" />
                    </div>



                    <div className='inputField'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Year</InputLabel>
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
                            <InputLabel id="demo-simple-select-label">Select Dept</InputLabel>
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
                            <InputLabel id="demo-simple-select-label">Select Class</InputLabel>
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
                        <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password" variant="outlined" />
                    </div>





                    {/* <h5>E-mail</h5>
                    <input type='text' value={formData.email} onChange={handleEmailChange} />

                    <h5>First Name</h5>
                    <input type='text' value={formData.firstName} onChange={handleFirstNameChange} />

                    <h5>Last Name</h5>
                    <input type='text' value={formData.lastName} onChange={handleLastNameChange} />

                    <h5>Password</h5>
                    <input type='password' value={formData.password} onChange={handlePasswordChange}></input> */}

                    <h5>Upload SFIT Identity card</h5>
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

                <p>by signing-in you agree to AMAZON FAKE CLONE conditions of Use and sale. Please see our Privacy Notice, our Cookies Noties and our Interest-Based Ads </p>

                <Button variant="contained" onClick={submitSignupForm}>
                    Create UniEx Account
                </Button>
            </div>
        </div>
    )
}

export default Signup
