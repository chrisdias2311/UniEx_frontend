import React, { useState } from 'react'
import "./Signup.css";
import { useDispatch } from 'react-redux';
import { signUpUser } from '../redux/actions/formActions';
import { Connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/actions/formActions';

import axios from 'axios';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { grey } from '@mui/material/colors';

import Alert from '@mui/material/Alert';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect } from 'react';

import LinearProgress from '@mui/material/LinearProgress';

function UpdateUserProfile() {
    const [Year, setYear] = useState('')
    const [Department, setDepartment] = useState('');
    const [Div, setDiv] = useState('')

    const navigate = useNavigate()

    const [loader, setLoader] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);


    const year = [
        {
            value: 'FE',
            label: 'FE',
        },
        {
            value: 'SE',
            label: 'SE',
        },
        {
            value: 'TE',
            label: 'TE',
        },
        {
            value: 'BE',
            label: 'BE',
        },
    ];

    const dept = [
        {
            value: 'CMPN',
            label: 'CMPN',
        },
        {
            value: 'INFT',
            label: 'INFT',
        },
        {
            value: 'EXTC',
            label: 'EXTC',
        },
        {
            value: 'ELEC',
            label: 'ELEC',
        },
        {
            value: 'MECH',
            label: 'MECH',
        }
    ];

    const div = [
        {
            value: 'A',
            label: 'A',
        },
        {
            value: 'B',
            label: 'B',
        },
        {
            value: 'FE1',
            label: 'FE1',
        },
        {
            value: 'FE2',
            label: 'FE2',
        },
        {
            value: 'FE3',
            label: 'FE3',
        },
        {
            value: 'FE4',
            label: 'FE4',
        },
        {
            value: 'FE5',
            label: 'FE5',
        },
        {
            value: 'FE6',
            label: 'FE6',
        },
        {
            value: 'FE7',
            label: 'FE7',
        }
    ];

    const handleYearChange = (event) => {
        setYear(event.target.value)
    }
    const handleDeptChange = (event) => {
        setDepartment(event.target.value)
    }
    const handleDivChange = (event) => {
        setDiv(event.target.value)
    }



    useEffect(() => {
        setYear(JSON.parse(localStorage.getItem('user')).year)
        setDepartment(JSON.parse(localStorage.getItem('user')).dept)
        setDiv(JSON.parse(localStorage.getItem('user')).class)

    }, []);

    const updateProfile = () => {
        const formdata = new FormData();
        formdata.append('user_id', JSON.parse(localStorage.getItem('user'))._id);
        formdata.append('year', Year);
        formdata.append('department', Department);
        formdata.append('class', Div);

        axios.post('http://localhost:5000/api/user/updateuser', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                if(res.status===200){
                    alert('Details updated successfully')
                }
            })
            .catch(err =>
                console.log("Frontend error", err),
            );
    }


    return (
        <div className='signup'>

            <div className='signup_container'>
                {
                    loader ? <LinearProgress /> : <></>
                }
                <h1>Update Profile</h1>

                <div className='sp_form_and_button'>
                    <form >
                        <div className='inputField'>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Year*</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Year}
                                    label="Select Class"
                                    onChange={handleYearChange}
                                >
                                    {
                                        year.map((option) =>
                                            (<MenuItem value={option.value} key={option.value}>{option.value}</MenuItem>)
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </div>

                        <div className='inputField'>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Dept*</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Department}
                                    label="Select Class"
                                    onChange={handleDeptChange}
                                >
                                    {
                                        dept.map((option) =>
                                            (<MenuItem value={option.value} key={option.value}>{option.value}</MenuItem>)
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </div>

                        <div className='inputField'>
                            <FormControl margin="normal" fullWidth>
                                <InputLabel id="demo-simple-select-label">Select Class*</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Div}
                                    label="Select Class"
                                    onChange={handleDivChange}
                                >
                                    {
                                        div.map((option) =>
                                            (<MenuItem value={option.value} key={option.value}>{option.value}</MenuItem>)
                                        )
                                    }
                                </Select>
                            </FormControl>
                        </div>

                        <br></br>
                        <br></br>
                    </form>

                    {/* {
                        success ? <Alert severity="success">Logged in Successfully!</Alert> : (
                            error ? <Alert severity="error">Make sure you've entered the correct details!</Alert> : <></>
                        )
                    } */}

                    <br></br>

                    <Button variant="contained" onClick={updateProfile}>
                        Update Profile
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default UpdateUserProfile
