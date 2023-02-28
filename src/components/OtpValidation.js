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

    useEffect(() => {
        // const id = JSON.parse(localStorage.getItem('user')).email
        // axios.get(`http://localhost:5000/api/user/generateotp/${id}`, {
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // })
        //     .then(res => {
        //         console.log("Generate OTP called")
        //     })
        //     .catch(err => console.log(err));
    }, []);

    const getOtp = () => {
        const id = JSON.parse(localStorage.getItem('user')).email
        axios.get(`http://localhost:5000/api/user/generateotp/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                setOtpPending(false)
                console.log("Generate OTP called")
            })
            .catch(err => console.log(err));
    }


    const submitOtp = () => {
        const id = JSON.parse(localStorage.getItem('user')).email
        
        axios.get(`http://localhost:5000/api/user/verifyotp/${id}/${otp}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log(res)
                navigate('/')
                // console.log(res.data._id)
                // navigate('/validateotp/' + res.data._id)
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
                        <h1>You need to verify your Email validation</h1>
                        <Button onClick={getOtp} sx={{ ':hover': { bgcolor: 'grey', color: 'white' }, bgcolor: 'black' }} variant="contained" >
                            Get OTP
                        </Button>
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
                        
                    </div>
            }
        </div>
    )
}

export default OtpValidation
