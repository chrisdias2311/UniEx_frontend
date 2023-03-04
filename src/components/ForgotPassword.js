import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { bgcolor } from '@mui/system';
import './ForgotPassword.css'

function ForgotPassword() {
    const navigate = useNavigate();

    const [otp, setOtp] = useState('');

    const [email, setEmail] = useState('');

    const [otpPending, setOtpPending] = useState(true)
    const [otpSend, setOtpSend] = useState(false)     // False 
    const [changePass, setChangePass] = useState(false);  // False 

    const [newPass, setNewPass] = useState('')

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }
    const handleOtpChange = (event) => {
        setOtp(event.target.value)
    }
    const handleNewPassChange = (event) => {
        setNewPass(event.target.value)
    }

    useEffect(() => {
        if(!localStorage.getItem('user')){
            navigate('/404page')
        }
    }, []);

    const getOtp = () => {
        if (email !== '') {
            const id = email
            axios.get(`http://localhost:5000/api/user/generateotp_pass/${id}`, {
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
    }


    const submitOtp = () => {
        const id = email

        axios.get(`http://localhost:5000/api/user/verifyotp_pass/${id}/${otp}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log(res)
                if (res.data === 'verified_otp') {
                    setChangePass(true)
                }
                // console.log(res.data._id)
                // navigate('/validateotp/' + res.data._id)
            })
            .catch(err => console.log(err));
    }

    const changePassword = () => {

        axios.get(`http://localhost:5000/api/user/change_pass/${email}/${newPass}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert('Password changes successfully!')
                    navigate('/')

                }
            })
            .catch(err => console.log(err));    
    }


    return (
        <div className='verify_pass'>
            <div className='verify_pass_form'>
                <TextField type="email" className='inputField' fullWidth id="outlined-basic" value={email} onChange={handleEmailChange} label="Enter email" variant="outlined" />

                <br></br>
                <br></br>
                {
                    otpPending ?
                        <div>
                            <Button onClick={getOtp} sx={{ ':hover': { bgcolor: 'grey', color: 'white' }, bgcolor: 'black' }} variant="contained" >
                                Get OTP
                            </Button>
                        </div> :
                        <div className='verify_otp_form'>
                            {
                                changePass ?
                                    <>
                                        <TextField onChange={handleNewPassChange} className='inputField' fullWidth id="outlined-basic" label="Enter New Password" variant="outlined" />
                                        <br></br>
                                        <br></br>

                                        <Button onClick={changePassword} sx={{ ':hover': { bgcolor: 'grey', color: 'white' }, bgcolor: 'black' }} variant="contained" >
                                            Change Password
                                        </Button>
                                    </> :
                                    <>
                                        <h3>We sent an OTP to {email}</h3>

                                        <TextField className='inputField' fullWidth id="outlined-basic" value={otp} onChange={handleOtpChange} label="Enter OTP" variant="outlined" />
                                        <br></br>
                                        <br></br>

                                        <Button onClick={submitOtp} sx={{ ':hover': { bgcolor: 'grey', color: 'white' }, bgcolor: 'black' }} variant="contained" >
                                            Verify OTP
                                        </Button>

                                        <br></br>
                                        <br></br>
                                    </>

                            }
                        </div>
                }
            </div>


        </div>
    )
}

export default ForgotPassword
