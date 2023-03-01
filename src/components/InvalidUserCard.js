import React from 'react'
import './InvalidUserCard.css';
import Logo from '../Logo.jpeg';
import IdCard from '../IdCard.jpeg';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/formActions'
import { declineUser } from '../redux/actions/formActions';
import axios from 'axios';


import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { bookProd } from '../redux/actions/formActions';
import { useNavigate } from 'react-router-dom';

function InvalidUserCard({ id, pid, email, firstname, lastname, phone, year, dept, div, idimage, verified }) {
    const dispatch = useDispatch();

    const register = (userId) => {
        axios.put(`http://localhost:5000/api/user/validateuser/${userId}`, {
            validity: 'Yes'
        })
            .then(res => {
                alert("User Registered Successfully")
                console.log("Successful", res)
                dispatch(registerUser(userId))
            })
            .catch(err => console.log(err));
    }

    const decline = (userId) => {
        axios.put(`http://localhost:5000/api/user/declineuser/${userId}`, {
            validity: 'Decline'
        })
            .then(res => {
                alert("User Registration Declined")
                console.log("Successful", res)
                dispatch(declineUser(userId))
            })
            .catch(err => console.log(err));
        // console.log(userId)
        // dispatch(declineUser(userId))
    }


    return (
        <div className='maincard'>
            <Card sx={{  display: 'flex', maxWidth:600,  flexWrap:'wrap', justifyContent:'center'}}>
                <CardMedia
                    sx={{ height: 200, maxWidth:200 }}
                    component="img"
                    image={"http://" + idimage}
                    alt="Image"
                />
                <CardContent sx={{ justifyContent: 'flex-start' }}>
                    <Typography gutterBottom variant="h6" component="div">
                        Name: {firstname} {lastname}
                    </Typography>
                    <Typography variant="body" color="text.secondary">
                        <strong>{email}</strong>
                    </Typography>
                    <br></br>
                    <Typography variant="body" color="text.secondary">
                        PID: <strong>{pid}</strong>
                    </Typography>
                    <br></br>
                    <Typography variant="body" color="text.secondary">
                        Class: <strong>{year} {dept} {div}</strong>
                    </Typography>
                    <br></br>
                    <Typography variant="body" color="text.secondary">
                        Phone: <strong>{phone}</strong>
                    </Typography>
                    {
                        (verified === 'yes') ? <h3>Verified</h3> : <h3 className='unverified'>Unverified</h3>
                    }
                </CardContent>
                <CardActions sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Button className='controlButton' sx={{ margin: 1 }} variant="contained" onClick={() => register(id)}>Register</Button>
                    <Button className='controlButtons' sx={{ margin: 1 }} variant="contained" color='error' onClick={() => decline(id)}>Decline</Button>
                    <a className='link_tag' href={"http://" + idimage} target="_blank" rel="noreferrer"> View </a>
                </CardActions>
            </Card>
        </div>







        // <div className='box'>
        //     <div className='card'>
        //         <div className='leftImage'>
        //             <img className='IdImage' src={"http://" + idimage}></img>
        //         </div>
        //         <div className='rightContent'>
        //             <div className='floor1'>
        //                 <h2>Name: {firstname} {lastname}</h2>
        //                 <h2 className='fields'>PID: {pid}</h2>
        //                 <h2 className='fields'>Phone: {phone}</h2>
        //             </div>
        //             <h4 className='individualFiels'>Email: {email}</h4>
        //             <h4 className='individualFiels'>Year: {year}</h4>
        //             <h4 className='individualFiels'>Dept: {dept}</h4>
        //             <h4 className='individualFiels'>Class: {div}</h4>
        //             <h4 className='individualFiels'>Verified: {verified}</h4>
        //             <div className='buttonsContainer'>
        //                 <div className='controlButton'>
        //                     <Button className='controlButton' variant="contained" onClick={() => register(id)}>Register</Button>
        //                 </div>
        //                 <div className='controlButton'>
        //                     <Button className='controlButton' variant="contained" color='success'>Expand</Button>
        //                 </div>
        //                 <div className='controlButton'>
        //                     <Button className='controlButtons' variant="contained" color='error' onClick={() => decline(id)}>Decline</Button>
        //                 </div>
        //             </div>

        //         </div>
        //     </div>
        // </div>
    )
}

export default InvalidUserCard
