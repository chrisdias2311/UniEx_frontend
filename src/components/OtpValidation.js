import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { bgcolor } from '@mui/system';
import './OtpValidation.css'

function OtpValidation() {
    const navigate = useNavigate();

    const [otp, setOtp] = useState('');

    const [otpPending, setOtpPending] = useState(true)
    const [otpSend, setOtpSend] = useState(false)


    const handleOtpChange = (event) => {
        setOtp(event.target.value)
    }


    const getOtp = () => {
        const id = JSON.parse(localStorage.getItem('user')).email
        axios.get(`https://uniexserver.onrender.com/api/user/generateotp/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                setOtpPending(false)
            })
            .catch(err => console.log(err));
    }


    const submitOtp = () => {
        const id = JSON.parse(localStorage.getItem('user')).email
        
        axios.get(`https://uniexserver.onrender.com/api/user/verifyotp/${id}/${otp}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                navigate('/')
            })
            .catch(err => console.log(err));
    }


    return (
        <div className='verify_otp'>

            {
                otpPending ?
                    <div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1>We need to verify your Email </h1>
                        <Button onClick={getOtp} sx={{ ':hover': { bgcolor: 'grey', color: 'white' }, bgcolor: 'black' }} variant="contained" >
                            Get OTP
                        </Button>
                        <br></br> <br></br> <br></br><br></br><br></br>
                    </div> :
                    <div className='otp_form'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h2>We sent an OTP to {JSON.parse(localStorage.getItem('user')).email}</h2>

                        <TextField className='inputField' fullWidth id="outlined-basic" value={otp} onChange={handleOtpChange} label="Enter OTP" variant="outlined" />
                        <br></br>
                        <br></br>

                        <Button onClick={submitOtp} sx={{ ':hover': { bgcolor: 'grey', color: 'white' }, bgcolor: 'black' }} variant="contained" >
                            Verify OTP
                        </Button>

                        <br></br><br></br>
                        
                    </div>
            }
        </div>
    )
}

export default OtpValidation
