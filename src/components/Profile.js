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


import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function Profile() {
    const params = useParams();
    const [pid, setPid] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [userClass, setUserClass] = useState('')
    const [validity, setValidity] = useState('')
    const [phone, setPhone] = useState('');

    useEffect(() => {
        const formdata = new FormData()
        formdata.append('userid', params.id);

        axios.post('http://localhost:5000/api/transactions/userdetails', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                console.log("This is opposite persons details", res.data)
                // setBuyer(res.data)
                setName(res.data.firstname + ' ' + res.data.lastname)
                setEmail(res.data.email)
                setUserClass(res.data.year + "  " + res.data.dept + "  " + res.data.class)
                setPhone(res.data.phone)
                setPid(res.data.pid);
                setValidity(res.data.validity)
            })
            .catch(err =>
                console.log("This is the error", err),
            );
    }, [])


    return (
        <div >
            <h1>P</h1>
            <div className='profilecard'>
                <h1>Your Profile</h1>

                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Details
                            </Typography>
                            <Typography variant="body2"  color="text.secondary">
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
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Update Details 
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Profile
