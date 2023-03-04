import React from 'react';
import './AdminRegister.css'
import { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import './AdminLogin.css'

import TextField from '@mui/material/TextField';

function AdminLogin() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loader, setLoader] = useState(false);

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



  const loginAdmin = (e) => {


    if (formData.pid !== '' && formData.password !== '') {
      setLoader(true)

      e.preventDefault();
      setOpen(!open);

      const formdata = new FormData();
      formdata.append('pid', formData.pid);
      formdata.append('password', formData.password);

      axios.post('https://uniexserver.onrender.com/api/admin/login', formdata, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          setOpen(false);
          setLoader(false);
          if (res.data._id) {
            localStorage.clear()
            localStorage.setItem('admin', JSON.stringify(res.data));
            navigate('/invalidusers');
          } else {
            alert("Invalid Details")
          }
        })
        .catch(err =>
          console.log("This is the error", err)
        );
    } else {
      alert("Enter valid details")
    }
  }


  return (
    <div className='adminlogin'>
      <br></br>
      <br></br>
      <div className='adminlogin_container'>

        {
          loader ?
            <LinearProgress /> : <></>
        }

        <h1>Login as Admin</h1>

        <div className='al_form_and_button'>

          <form>
            <div className='inputField'>
              <TextField className='inputField' fullWidth id="outlined-basic" value={formData.pid} onChange={handlePidChange} label="PID*" variant="outlined" />
            </div>

            <div className='inputField'>
              <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password*" variant="outlined" />
            </div>
          </form>

          <Button variant="contained" onClick={loginAdmin}>
            Login
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
