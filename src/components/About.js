import React from 'react'
import './About.css';
import Chris from '../Chris.jpg'
import Jason from '../Jason.jpg'
import Stalen from '../Stalen.jpg'
import Avatar from '@mui/material/Avatar';
import Vighnesh from '../Vighnesh.jpg'
import Mustafiz from '../Mustafiz.jpg'
import Typography from '@mui/material/Typography';

function About() {
    return (
        <div className='about'>
            <br></br><br></br><br></br>
            <h1>About</h1>

            <div className='info'>
                Uniex is an innovative marketplace designed exclusively for university students to exchange items and services within their campus community. This platform was created to facilitate the exchange of goods and services between students, allowing them to easily trade and share items without the need for money.

                The UniEx platform is user-friendly and intuitive, allowing students to create listings for items they want to exchange, view listings from other students, and connect with potential exchange partners. UniEx enables students to exchange a wide range of items, including textbooks, electronics, furniture, and even services like tutoring or language exchange.

                UniEx aims to create a more sustainable and cost-effective way for students to obtain the items they need while also reducing waste and promoting community engagement. By providing a platform for students to exchange items, UniEx contributes to the development of a circular economy within university campuses, fostering a sense of community and sustainability.

                UniEx is committed to ensuring the safety and security of its users. The platform incorporates measures to protect users from fraud, spam, and other malicious activities, ensuring that exchanges are conducted in a safe and trustworthy manner.

                In summary, UniEx is a valuable platform that empowers university students to exchange items and services in a safe, sustainable, and cost-effective manner. With its user-friendly interface and commitment to user safety, UniEx is a valuable addition to any university community, fostering community engagement and promoting sustainability.
            </div>

            <div className='members'>
                <div className='membercard'>
                    <Avatar
                        alt="Chris Dias"
                        src={Chris}
                        sx={{ width: 100, height: 100 }}
                    />
                    <div className='member_info'>
                        <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                            Chris Dias
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2">
                            Co-founder and Full Stack Engineer
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body1">
                            -UniEx
                        </Typography>
                    </div>
                </div>
                <div className='membercard'>
                    <Avatar
                        alt="Jason Sampy"
                        src={Jason}
                        sx={{ width: 100, height: 100 }}
                    />
                    <div className='member_info'>
                        <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                            Jason Sampy
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2">
                            Co-founder and Software Developer
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body1">
                            -UniEx
                        </Typography>
                    </div>
                </div>
                <div className='membercard'>
                    <Avatar
                        alt="Stalen Ferreira"
                        src={Stalen}
                        sx={{ width: 100, height: 100 }}
                    />
                    <div className='member_info'>
                        <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                            Stalen Ferreira
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2">
                            Co-founder and Marketing Lead
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body1">
                            -UniEx
                        </Typography>
                    </div>
                </div>

                <div className='membercard'>
                    <Avatar
                        alt="Mustafiz Ansari"
                        src={Mustafiz}
                        sx={{ width: 100, height: 100 }}
                    />
                    <div className='member_info'>
                        <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                            Mustafiz Ansari
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2">
                            Software Developer
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body1">
                            -UniEx
                        </Typography>
                    </div>
                </div>

                <div className='membercard'>
                    <Avatar
                        alt="Vighnesh Mestry"
                        src={Vighnesh}
                        sx={{ width: 100, height: 100 }}
                    />
                    <div className='member_info'>
                        <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h5" component="div">
                            Vighnesh Mestry
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2">
                            Software Developer
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body1">
                            -UniEx
                        </Typography>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
