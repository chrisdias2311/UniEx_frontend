import React from 'react'
import './InvalidUserCard.css';
import Logo from '../Logo.jpeg';
import IdCard from '../IdCard.jpeg';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/actions/formActions'
import { declineUser } from '../redux/actions/formActions';
import axios from 'axios';

function InvalidUserCard({ id, pid, email, firstname, lastname, phone, year, dept, div, idimage }) {
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
        <div className='box'>
            <div className='card'>
                <div className='leftImage'>
                    <img className='IdImage' src={"http://" + idimage}></img>
                </div>
                <div className='rightContent'>
                    <div className='floor1'>
                        <h2>Name: {firstname} {lastname}</h2>
                        <h2 className='fields'>PID: {pid}</h2>
                        <h2 className='fields'>Phone: {phone}</h2>
                    </div>
                    <h4 className='individualFiels'>Email: {email}</h4>
                    <h4 className='individualFiels'>Year: {year}</h4>
                    <h4 className='individualFiels'>Dept: {dept}</h4>
                    <h4 className='individualFiels'>Class: {div}</h4>
                    <div className='buttonsContainer'>
                        <div className='controlButton'>
                            <Button className='controlButton' variant="contained" onClick={() => register(id)}>Register</Button>
                        </div>
                        <div className='controlButton'>
                            <Button className='controlButton' variant="contained" color='success'>Expand</Button>
                        </div>
                        <div className='controlButton'>
                            <Button className='controlButtons' variant="contained" color='error' onClick={() => decline(id)}>Decline</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InvalidUserCard
