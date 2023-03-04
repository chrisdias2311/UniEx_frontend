import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './BookedProductsCard.css'
import { useNavigate } from 'react-router-dom';

function BookedProductsCard({ transactionId, buyerName, transactionType, productName, date }) {
    const navigate = useNavigate();


    const view = (id)=> {
        navigate('/dashboard/bookedproductdetails/'+id)
    }


    return (
        <div className='booked_prod_card'>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="subtitle1" color="text.secondary">
                    <strong>{buyerName}</strong> {transactionType} your <strong>{productName}</strong> on <strong>{date}</strong>
                </Typography>
                <Button onClick={()=>view(transactionId)} color="primary">
                    View Details
                </Button>
            </CardContent>
        </div>
    )
}

export default BookedProductsCard