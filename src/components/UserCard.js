import React from 'react'
import './UserCard.css';
import Logo from '../Logo.jpeg';
import IdCard from '../IdCard.jpeg';
import Button from '@mui/material/Button';

function UserCard({ pid, email, firstname, lastname, phone, year, dept, div, idimage }) {
    return (
        <div className='box'>
            <div className='card'>
                <div className='leftImage'>
                    <img className='IdImage' src={"http://"+idimage}></img>
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
                            <Button className='controlButton' variant="contained">Register</Button>
                        </div>
                        <div className='controlButton'>
                            <Button className='controlButton' variant="contained" color='success'>Expand</Button>
                        </div>
                        <div className='controlButton'>
                            <Button className='controlButtons' variant="contained" color='error'>Decline</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserCard
