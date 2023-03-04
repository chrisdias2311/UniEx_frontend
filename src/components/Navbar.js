import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Logo from '../Logo.jpeg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';



import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const drawerWidth = 240;
// const navItems = ['Home', 'About', 'Contact'];


function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();

    const [admin, setAdmin] = useState('');
    const [user, setUser] = useState('');

    useEffect(() => {
        if (localStorage.getItem('admin')) {
            setAdmin(JSON.parse(localStorage.getItem('admin')).firstname)
        } else if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')).firstname)
        }
    }, [])

   

    //Navigations
    const navigateToHome = () => {
        navigate('/')
    }
    const navigateToAbout = () => {
        navigate('/about')
    }
    const navigateToAddProduct = () => {
        navigate('/addproduct')
    }
    const navigateToMyDashboard = () => {
        navigate('/dashboard')
    }
    const navigateToPeddler = () => {
        navigate('/peddler')
    }
    const navigateToSignIn = () => {
        setAnchorEl(null);
        navigate('/userlogin')
    }
    const navigateToSignUp = () => {
        navigate('/signup')
    }
    const navigateToUserProfile = () => {
        setAnchorEl(null);
        // const P_id = JSON.parse(localStorage.getItem('user')).pid
        navigate('/profile/'+JSON.parse(localStorage.getItem('user'))._id)
    }
    const navigateToForgotPassword = () => {
        navigate('/forgotpassword')
    }
    const updateProfile = () =>{
        navigate('/updateuserprofile')
    } 



    const logout = () => {
        setAnchorEl(null);
        localStorage.clear();
        alert("Logged Out successfully!")
    }


    //Admin 
    const navigateToAdminDashboard = () => {
        navigate('/admindashboard')
    }
    const navigateToAdminLogin = () => {
        setAnchorEl(null);
        navigate('/adminlogin')
    }
    const navigateToRegisterAdmin = () => {
        navigate('/adminregister')
    }
    const navigateToAdminProfile = () => {
        setAnchorEl(null);
        navigate('/adminprofile')
    }
    const navigateToViewUsers = () => {
        navigate('/viewusers')
    }
    const navigateToValidateUsers = () => {
        navigate('/invalidusers')
    }
    const navigateToViewProducts = () => {
        navigate('/viewproducts')
    }
    



    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };



    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <img
                onClick={navigateToHome}
                className="header_logo"
                src={Logo}
            />
            <Divider />


            {
                (localStorage.getItem('user') || localStorage.getItem('admin')) ?
                    (
                        localStorage.getItem('user') ?
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                        <ListItemText onClick={navigateToHome}>Home</ListItemText>
                                        <ListItemText onClick={navigateToAbout}>About</ListItemText>
                                        <ListItemText onClick={navigateToAddProduct}>Add Product</ListItemText>
                                        <ListItemText onClick={navigateToMyDashboard}>Dashboard</ListItemText>

                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                        <ListItemText onClick={logout}>Logout</ListItemText>
                                        <ListItemText onClick={navigateToSignIn}>Sign-In</ListItemText>
                                        <ListItemText onClick={navigateToSignUp}>Sign-Up</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                        <ListItemText onClick={navigateToAdminLogin}>Sign-In as Admin</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>

                            :

                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                        <ListItemText onClick={navigateToHome}>Home</ListItemText>
                                        <ListItemText onClick={navigateToValidateUsers}>Validate Users</ListItemText>
                                        <ListItemText onClick={navigateToRegisterAdmin}>Register Admin</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                        <ListItemText onClick={logout}>Logout</ListItemText>
                                        <ListItemText onClick={navigateToSignIn}>Sign-In as User</ListItemText>
                                        <ListItemText onClick={navigateToSignUp}>Sign-Up</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <Divider />
                                <ListItem disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                        <ListItemText onClick={navigateToAdminLogin}>Sign-In as Admin</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                    )
                    :
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                <ListItemText onClick={navigateToHome}>Home</ListItemText>
                                <ListItemText onClick={navigateToAbout}>About</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                <ListItemText onClick={navigateToSignIn}>Sign-In</ListItemText>
                                <ListItemText onClick={navigateToSignUp}>Sign-Up</ListItemText>
                                <ListItemText onClick={navigateToForgotPassword}>Forgot Password</ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column' }}>
                                <ListItemText onClick={navigateToAdminLogin}>Sign-In as Admin</ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
            }
        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', backgroundColor: grey[900] }}>
            <CssBaseline />
            <AppBar component="nav" sx={{ display: 'flex', backgroundColor: '#242117' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, display: 'flex' }}
                    >
                        <img
                            onClick={navigateToHome}
                            className="header_logo"
                            src={Logo}
                        />
                    </Typography>

                    {
                        (localStorage.getItem('user') || localStorage.getItem('admin')) ?
                            (
                                localStorage.getItem('user') ?
                                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                        <Button onClick={navigateToHome} sx={{ color: '#fff' }}>Home</Button>
                                        <Button onClick={navigateToAbout} sx={{ color: '#fff' }}>About</Button>
                                        <Button onClick={navigateToMyDashboard} sx={{ color: '#fff' }}>Dashboard</Button>
                                        <Button onClick={navigateToAddProduct} sx={{ color: '#fff' }}>Add Product</Button>
                                        {/* <Button onClick={navigateToPeddler} sx={{ color: '#fff' }}>Peddler</Button>
                                        <Button onClick={navigateToSignUp} sx={{ color: '#fff', paddingRight: 3 }}>Sign-Up</Button>
                                        <Button onClick={navigateToAdminLogin} sx={{ color: '#fff' }}>Sign-In as Admin</Button> */}
                                    </Box>
                                    :
                                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                        <Button onClick={navigateToHome} sx={{ color: '#fff' }}>Home</Button>
                                        <Button onClick={navigateToValidateUsers} sx={{ color: '#fff' }}>Validate Users</Button>
                                        <Button onClick={navigateToRegisterAdmin} sx={{ color: '#fff', paddingLeft: 3 }}>Register Admin</Button>
                                    </Box>
                            )
                            :
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                                <Button onClick={navigateToHome} sx={{ color: '#fff' }}>Home</Button>
                                <Button onClick={navigateToAbout} sx={{ color: '#fff' }}>About</Button>
                                <Button onClick={navigateToSignIn} sx={{ color: '#fff', paddingLeft: 3 }}>Sign-In</Button>
                                <Button onClick={navigateToSignUp} sx={{ color: '#fff', paddingRight: 3 }}>Sign-Up</Button>
                                <Button onClick={navigateToAdminLogin} sx={{ color: '#fff' }}>Sign-In as Admin</Button>
                                <Button onClick={navigateToForgotPassword} sx={{ color: '#fff' }}>Forgot Password</Button>
                            </Box>
                    }

                    {
                        (localStorage.getItem('user') || localStorage.getItem('admin')) ?
                            (
                                localStorage.getItem('user') ?
                                    <div>
                                        <IconButton
                                            size="large"
                                            // aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleMenu}
                                            color="inherit"
                                        >
                                            <Avatar alt={user} src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={navigateToUserProfile}>Profile</MenuItem>
                                            <MenuItem onClick={updateProfile}>Update Profile Details</MenuItem>
                                            <MenuItem onClick={logout}>Logout of {user}</MenuItem>
                                            <MenuItem onClick={navigateToSignIn}>Sign in to existing account</MenuItem>
                                            <MenuItem onClick={navigateToSignUp}>Sign up</MenuItem>
                                            <MenuItem onClick={navigateToAdminLogin}>Sign in as admin</MenuItem>
                                        </Menu>
                                    </div>
                                    :
                                    <div>
                                        <IconButton
                                            size="large"
                                            // aria-label="account of current user"
                                            aria-controls="menu-appbar"
                                            aria-haspopup="true"
                                            onClick={handleMenu}
                                            color="inherit"
                                        >
                                            {/* <AccountCircle  size="large" /> */}
                                            <Avatar alt={admin} src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                        <Menu
                                            id="menu-appbar"
                                            anchorEl={anchorEl}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            keepMounted
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                        >
                                            <MenuItem onClick={navigateToAdminProfile}>Profile</MenuItem>
                                            <MenuItem onClick={logout}>Logout of {admin}</MenuItem>
                                            <MenuItem onClick={navigateToAdminLogin}>Sign in to existing Admin account</MenuItem>
                                            <MenuItem onClick={navigateToSignIn}>Sign in as user</MenuItem>
                                            <MenuItem onClick={navigateToSignUp}>Sign up</MenuItem>
                                            <MenuItem onClick={navigateToForgotPassword}>Forgot Password</MenuItem>
                                        </Menu>
                                    </div>
                            )
                            :
                            <></>
                    }
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;