import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function BookingSuccessful() {
    const navigate = useNavigate();
    

    const navigateToHome = () => {
        navigate('/')
    }

    const navigateToDashboard = () => {
        navigate('/dashboard')
    }


    return (
        <div style={{padding:'10px'}}>
            <br></br><br></br><br></br><br></br>
        
            <h1>Product booked successfully!</h1> 

            <Typography gutterBottom variant="h6" component="div">
                You can check your dashboard for the Transacton details. Thanks for choosing UniEx.
            </Typography>

            <br></br> <br></br> 

            <Button onClick={navigateToDashboard} sx={{ ':hover': { bgcolor: 'grey', color: 'white' }, bgcolor: 'black', margin:2 }} variant='contained'>Go to Dashboard</Button>
            <Button onClick={navigateToHome} sx={{margin:2}}  variant='contained'>Go to Home</Button>
            
        </div>
    )
}

export default BookingSuccessful
