import React from 'react';
import './AdminRegister.css'
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import TextField from '@mui/material/TextField';

function AdminLogin() {
  const navigate = useNavigate();

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
  const handlePasswordChange = (event) => {
    setFormData({ ...formData, password: event.target.value });
  }



  const createAdmin = (e) => {
    e.preventDefault();
    console.log("Admin login called");

    const formdata = new FormData();
    formdata.append('pid', formData.pid);
    formdata.append('password', formData.password);

    axios.post('http://localhost:5000/api/admin/login', formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log("This is the response: ", res.data);
        if (res.data !== 'No user found') {
          localStorage.setItem('admin', JSON.stringify(res.data));
          navigate('/admindashboard');
        }else{
          alert("Invalid Details")
        }
      })
      .catch(err =>
        console.log("This is the error", err),
      );
  }


  return (
    <div className='adminregister'>
      <div className='adminRegisterForm'>
        <h1>Login as Admin</h1>

        <form>
          <div className='inputField'>
            <TextField className='inputField' fullWidth id="outlined-basic" value={formData.pid} onChange={handlePidChange} label="PID*" variant="outlined" />
          </div>

          <div className='inputField'>
            <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password" variant="outlined" />
          </div>
        </form>

        <Button variant="contained" onClick={createAdmin}>
          Login
        </Button>
      </div>
    </div>
  )
}

export default AdminLogin
