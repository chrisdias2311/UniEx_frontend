import React from 'react';
import './AdminRegister.css'
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';

function AdminRegister() {

    const [formData, setFormData] = useState({
        pid: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    });


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
    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }



    const createAdmin = (e) => {
        e.preventDefault();
        console.log("Admin register called");

        const formdata = new FormData();
        formdata.append('pid', formData.pid);
        formdata.append('email', formData.email);
        formdata.append('firstname', formData.firstName);
        formdata.append('lastname', formData.lastName);
        formdata.append('password', formData.password);

        axios.post('http://localhost:5000/api/admin/register', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res =>
                console.log("This is the response", res.data),
            )
            .catch(err =>
                console.log("This is the error", err),
            );


    }


    return (
        <div className='adminregister'>
            <div className='adminRegisterForm'>


                <h1>Register Admin</h1>

                <div className='ar_form_and_button'>
                    <form>
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
                            <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password" variant="outlined" />
                        </div>
                    </form>

                    <Button variant="contained" onClick={createAdmin}>
                        Create Admin Account
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AdminRegister
