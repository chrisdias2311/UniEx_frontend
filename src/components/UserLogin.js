import React, { useState } from 'react'
import './UserLogin.css'
// import { useDispatch } from 'react-redux';
// import { signUpUser } from '../redux/actions/formActions';
// import { Connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { setUser } from '../redux/actions/formActions';

import axios from 'axios';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { grey } from '@mui/material/colors';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function UserLogin() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',

    });


    const handleUserNameChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
    }
    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }


    const submitSignupForm = (e) => {
        e.preventDefault();
        console.log("Signup called", formData);

        const formdata = new FormData();
        formdata.append('email', formData.email);
        formdata.append('password', formData.password);
        

        axios.post('http://localhost:5000/api/user/login', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res =>{ 
                if(localStorage.getItem('user')){
                    localStorage.clear();
                    localStorage.setItem('user', JSON.stringify(res.data));
                }else{
                    localStorage.setItem('user', JSON.stringify(res.data));
                }

                // localStorage.setItem('admin', JSON.stringify(res.data));
                // alert("You've been logged in successfully!")
                // console.log("Successful!", res.data)

                // localStorage.setItem('admin', JSON.stringify(res.data));
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='signup'>

            <div className='signup_container'>
                <h1 class="tit">Login as User</h1>

                <form >

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.email} onChange={handleUserNameChange} label="Username" variant="outlined" />
                    </div>
                    <div className='inputField'>
                        <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password" variant="outlined" />
                    </div>
                    <br></br>
                    <br></br>
                </form>
                <Button variant="contained" onClick={submitSignupForm}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default UserLogin
