import React from 'react'
import './About.css';
import Chris from '../Chris.jpg'
import Jason from '../Jason.jpg'
import Stalen from '../Stalen.jpg'
import Avatar from '@mui/material/Avatar';
import Vighnesh from'../Vighnesh.jpg'
import Mustafiz from '../Mustafiz.jpg'
import Typography from '@mui/material/Typography';

function About() {
    return (
        <div className='about'>
            <br></br><br></br><br></br>
            <h1>About</h1>

            <div className='info'>
                The lone lamp post of the one-street town flickered, not quite dead but definitely on its way out. Suitcase by her side, she paid no heed to the light, the street or the town. A car was coming down the street and with her arm outstretched and thumb in the air, she had a plan.
                He stepped away from the mic. This was the best take he had done so far, but something seemed missing. Then it struck him all at once. Visuals ran in front of his eyes and music rang in his ears. His eager fingers went to work in an attempt to capture his thoughts hoping the results would produce something that was at least half their glory.
                I'm so confused by your ridiculous meltdown that I must insist on some sort of explanation for your behavior towards me. It just doesn't make any sense. There's no way that I deserved the treatment you gave me without an explanation or an apology for how out of line you have been.

                The lone lamp post of the one-street town flickered, not quite dead but definitely on its way out. Suitcase by her side, she paid no heed to the light, the street or the town. A car was coming down the street and with her arm outstretched and thumb in the air, she had a plan.
                He stepped away from the mic. This was the best take he had done so far, but something seemed missing. Then it struck him all at once. Visuals ran in front of his eyes and music rang in his ears. His eager fingers went to work in an attempt to capture his thoughts hoping the results would produce something that was at least half their glory.
                I'm so confused by your ridiculous meltdown that I must insist on some sort of explanation for your behavior towards me. It just doesn't make any sense. There's no way that I deserved the treatment you gave me without an explanation or an apology for how out of line you have been.
            </div>

            <div className='members'>
                <div className='membercard'>
                    <Avatar
                        alt="Chris Dias"
                        src={Chris}
                        sx={{ width: 100, height: 100 }}
                    />
                    <div className='member_info'>
                        <Typography sx={{textAlign:'left'}} gutterBottom variant="h5" component="div">
                            Chris Dias
                        </Typography>
                        <Typography sx={{textAlign:'left'}} variant="body2">
                            Co-founder and Full Stack Engineer
                        </Typography>
                        <Typography sx={{textAlign:'left'}} variant="body1">
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
                        <Typography sx={{textAlign:'left'}} gutterBottom variant="h5" component="div">
                            Jason Sampy
                        </Typography>
                        <Typography sx={{textAlign:'left'}} variant="body2">
                            Co-founder and Software Developer
                        </Typography>
                        <Typography sx={{textAlign:'left'}} variant="body1">
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
                        <Typography sx={{textAlign:'left'}} gutterBottom variant="h5" component="div">
                            Stalen Ferreira
                        </Typography>
                        <Typography sx={{textAlign:'left'}} variant="body2">
                            Co-founder and Marketing Lead
                        </Typography>
                        <Typography sx={{textAlign:'left'}} variant="body1">
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
                        <Typography sx={{textAlign:'left'}} gutterBottom variant="h5" component="div">
                            Mustafiz Ansari
                        </Typography>
                        <Typography sx={{textAlign:'left'}} variant="body2">
                            Software Developer
                        </Typography>
                        <Typography sx={{textAlign:'left'}} variant="body1">
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
                        <Typography sx={{textAlign:'left'}} gutterBottom variant="h5" component="div">
                            Vighnesh Mestry
                        </Typography>
                        <Typography sx={{textAlign:'left'}} variant="body2">
                            Software Developer
                        </Typography>
                        <Typography sx={{textAlign:'left'}} variant="body1">
                            -UniEx
                        </Typography>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About
