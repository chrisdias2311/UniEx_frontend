import React, { useState } from 'react'
import './Profile.css';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react';
import axios from 'axios';


// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import LinearProgress from '@mui/material/LinearProgress';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Profile() {
    const params = useParams();
    const [id, setId] = useState('');
    const [pid, setPid] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [userClass, setUserClass] = useState('')
    const [validity, setValidity] = useState('')
    const [phone, setPhone] = useState('');
    const [otpPending, setOtpPending] = useState(false);
    const [otp, setOtp] = useState('');
    const [verified, setVerified] = useState('')

    const [deleteUser, setDeleteUser] = useState(false);
    const [loader, setLoader] = useState(true)

    const navigate = useNavigate()

    const handleOtpChange = (event) => {
        setOtp(event.target.value)
    }

    useEffect(() => {
        if (!JSON.parse(localStorage.getItem('user'))._id) {
            navigate('/')
        } else {
            const formdata = new FormData()
            formdata.append('userid', JSON.parse(localStorage.getItem('user'))._id);

            axios.post('https://uniexserver.onrender.com/api/transactions/userdetails', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    setLoader(false)
                    setId(res.data._id)
                    setName(res.data.firstname + ' ' + res.data.lastname)
                    setEmail(res.data.email)
                    setUserClass(res.data.year + "  " + res.data.dept + "  " + res.data.class)
                    setPhone(res.data.phone)
                    setPid(res.data.pid);
                    setValidity(res.data.validity)
                    setVerified(res.data.verified)
                })
                .catch(err =>
                    console.log("This is the error", err),
                );
        }
    }, [])

    const deleteFunc = () => {
        setDeleteUser(true);
    }

    const navigateToOTP = () => {
        navigate('/validateotp/' + id)
    }

    const deleteUserFunc = () => {
        const formdata = new FormData()
        formdata.append('id', JSON.parse(localStorage.getItem('user'))._id);

        axios.post('https://uniexserver.onrender.com/api/user/deleteuser', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                localStorage.clear();
                alert("Your Account has been successfully deleted")
                navigate('/')
            })
            .catch(err =>
                console.log("This is the error", err),
            );
    }

    const submitOtp = () => {
        const id = JSON.parse(localStorage.getItem('user')).email

        axios.get(`https://uniexserver.onrender.com/api/user/verifyotp/${id}/${otp}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    deleteUserFunc();
                }
            })
            .catch(err => console.log(err));
    }

    const getOtp = () => {
        setDeleteUser(false);
        const id = JSON.parse(localStorage.getItem('user')).email
        axios.get(`https://uniexserver.onrender.com/api/user/generateotp/${id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                setOtpPending(true)
            })
            .catch(err => console.log(err));
    }


    const cancelDelete = () => {
        setDeleteUser(false);
    }


    return (
        <div >
            <h1>P</h1>
            <div className='profilecard'>
                <h1>Your Profile</h1>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        {
                            loader?
                            <LinearProgress/>
                            :
                            <></>
                        }
                    
                        <CardContent>
                            
                            <Typography gutterBottom variant="h5" component="div">
                                Details
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                PID : <strong>{pid}</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Email : <strong>{email}</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Name : <strong>{name}</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Class : <strong>{userClass}</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Phone : <strong>{phone}</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Validity : <strong>{validity}</strong>
                            </Typography>

                            <br></br>

                            {
                                (validity === 'No') ?
                                    <Typography sx={{ color: 'red' }} variant="body3" color="text.secondary">
                                        Your account is being verified by the admin. We will notify you once it is verified.
                                    </Typography>
                                    :
                                    <></>
                            }

                            {
                                (verified !== 'yes' ) ?
                                    <>
                                        <Typography sx={{ color: 'red' }} variant="body3" color="text.secondary">
                                            Complete your signup by verifying your email address
                                        </Typography>
                                        <Button sx={{ color: 'red' }} onClick={navigateToOTP} >
                                            Verify email
                                        </Button>
                                    </>
                                    :
                                    <></>
                            }

                        </CardContent>
                    </CardActionArea>
                    <CardActions sx={{ justifyContent: 'center' }}>
                        <Button sx={{ color: 'red' }} onClick={deleteFunc} >
                            Delete Account
                        </Button>

                    </CardActions>
                </Card>

                <br></br>

                {
                    deleteUser ?
                        <Card sx={{ minWidth: 275 }}>
                            <CardContent>
                                <Typography variant="body2">
                                    Are you sure you want to delete your UniEx account?
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button onClick={cancelDelete} size="small">No</Button>
                                <Button onClick={getOtp} size="small">Yes</Button>
                            </CardActions>
                        </Card>
                        :
                        <></>
                }

                {
                    otpPending ?
                        <div className='otp_form'>
                            <br></br>
                            <br></br>
                            <h2>We sent an OTP to {JSON.parse(localStorage.getItem('user')).email}</h2>

                            <TextField className='inputField' fullWidth id="outlined-basic" value={otp} onChange={handleOtpChange} label="Enter OTP" variant="outlined" />
                            <br></br>
                            <br></br>

                            <Button onClick={submitOtp} sx={{ ':hover': { bgcolor: 'grey', color: 'white' }, bgcolor: 'black' }} variant="contained" >
                                Verify & Delete Account
                            </Button>

                            <br></br><br></br>

                        </div>
                        :
                        <></>
                }
            </div>



        </div>
    )
}

export default Profile
