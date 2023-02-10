import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logo from '../Logo.jpeg';
import "./Header.css";

function Header() {
    return (
        <div className='header'>
            <div className='nav_left'>
                <img
                    className="header_logo"
                    src={Logo}
                />

                <div className="header__nav">
                    <div className="header__option1">
                        <span className="header__optionLineTwo">Sign In</span>
                        <AccountBoxIcon className='header_profileIcon' />
                    </div>



                    <div className="header__option1">
                        <span className="header__optionLineTwo">Bookings</span>
                    </div>
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionLineTwo header_basketCount">2</span>
                    </div>
                </div>
            </div>

            <div className='nav_right'>
                <div className="header_search">
                    <input className="header_searchInput" type="text"></input>
                    <SearchIcon className="header_searchIcon" />
                </div>
            </div>


        </div>
    )
}

export default Header
