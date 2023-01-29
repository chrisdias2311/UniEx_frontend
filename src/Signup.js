import React, { useState } from 'react'
import Logo from './Logo.jpeg';
import "./Signup.css";
import { useDispatch } from 'react-redux';
import { signUpUser } from './redux/actions/formActions';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { grey } from '@mui/material/colors';

function Signup() {

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
        image: [null],
    });

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
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("his is image", formData.image)
        dispatch(signUpUser(formData));
    };



    const submitSignupForm = () => {
        console.log("This is the form Data", formData.email, formData.firstName, formData.lastName, formData.password, formData.image)
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
                    <Button variant="contained" component="label" onChange={handleIdImageChange}>
                        Upload
                        <input hidden type="file" />
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label" onChange={handleIdImageChange}>
                        <input hidden type="file" />
                        <PhotoCamera />
                    </IconButton>
                </form>

                <p>by signing-in you agree to AMAZON FAKE CLONE conditions of Use and sale. Please see our Privacy Notice, our Cookies Noties and our Interest-Based Ads </p>

                <Button variant="contained" onClick={handleSubmit}>
                    Create UniEx Account
                </Button>
            </div>
        </div>
    )
}

export default Signup
