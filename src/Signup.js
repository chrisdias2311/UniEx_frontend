import React, { useState } from 'react'
import Logo from './Logo.jpeg';
import "./Signup.css";
import { useDispatch } from 'react-redux';
import { signUpUser } from './redux/actions/formActions';
import { Connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from './redux/actions/formActions';

import axios from 'axios';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { grey } from '@mui/material/colors';

function Signup() {

    const navigate = useNavigate();


    // const color = "#616161";
    // const greyColor = grey[700]
    // const [email, setEmail] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [password, setPassword] = useState('');
    // const [image, setImage] = useState(null);

    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        password: '',
        image: '',
    });
    const imageData = new FormData();

    const dispatch = useDispatch();

    const handleEmailChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
    }
    const handleFirstNameChange = (event) => {
        setFormData({ ...formData, firstName: event.target.value });
    }
    const handleLastNameChange = (event) => {
        setFormData({ ...formData, lastName: event.target.value });
    }
    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }
    const handleIdImageChange = (event) => {
        setFormData({ ...formData, image: event.target.files[0] });
        console.log("handle image called")
        console.log(formData.image)

        imageData.append('file', formData.image);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("his is image", formData)
        dispatch(signUpUser(formData));
    };

    const registerUser = async () => {
        const email = formData.email;
        const firstname = formData.firstName;
        const lastname = formData.lastName;
        const password = formData.password;
        const IDCard = formData.image;

        console.log("This is the formdata ", email, firstname, lastname, password, IDCard)

        if (formData.email.length > 1 && formData.password.length > 1) {
            let result = await fetch('http://localhost:5000/api/user/register', {
                method: 'post',
                body: JSON.stringify({ email, firstname, lastname, password, IDCard }),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            result = await result.json()

            // localStorage.setItem("user", JSON.stringify(result));
            // localStorage.setItem("owner", name);

            if (result.auth) {
                alert("You have been succesfully registered!")
                localStorage.setItem('token', JSON.stringify(result.auth))
                localStorage.setItem('user', JSON.stringify(result.newUser))
                dispatch(setUser(result.newUser))
                navigate('/');
            }
        } else {
            alert("Please enter valid details");
        }
    }



    const submitSignupForm = (e) => {
        e.preventDefault();
        console.log("Signup called");

        const formdata = new FormData();
        formdata.append('email', formData.email);
        formdata.append('firstName', formData.firstName);
        formdata.append('lastName', formData.lastName);
        formdata.append('password', formData.password);
        formdata.append('file', formData.image);

        axios.post('http://localhost:5000/api/user/register', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    return (
        <div className='signup'>
            {/* <img
                className='signup_logo'
                src={Logo}
            /> */}

            <div className='signup_container'>
                <h1>Sign-up</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={formData.email} onChange={handleEmailChange} />

                    <h5>First Name</h5>
                    <input type='text' value={formData.firstName} onChange={handleFirstNameChange} />

                    <h5>Last Name</h5>
                    <input type='text' value={formData.lastName} onChange={handleLastNameChange} />

                    <h5>Password</h5>
                    <input type='password' value={formData.password} onChange={handlePasswordChange}></input>

                    <h5>Upload SFIT Identity card</h5>
                    <Button variant="contained" value={formData.image} component="label" onChange={handleIdImageChange}>
                        Upload
                        <input hidden type="file" />
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label" onChange={handleIdImageChange}>
                        <input hidden type="file" />
                        <PhotoCamera />
                    </IconButton>
                </form>

                <p>by signing-in you agree to AMAZON FAKE CLONE conditions of Use and sale. Please see our Privacy Notice, our Cookies Noties and our Interest-Based Ads </p>

                <Button variant="contained" onClick={submitSignupForm}>
                    Create UniEx Account
                </Button>
            </div>
        </div>
    )
}

export default Signup
