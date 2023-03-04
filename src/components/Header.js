import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Logo from '../Logo.jpeg';
import "./Header.css";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchAllProducts } from '../redux/actions/formActions';
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';




function Header() {
    const [search, setSearch] = useState([]);
    const [textSearch, setTextSearch] = useState('');
    const data = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log("MF DATA", data.products)

    const handleSearch = (e) => {
        setTextSearch(e.target.value)

        if (data.products.buttons.allProducts === true) {
            console.log(e.target.value);
            dispatch(searchAllProducts(e.target.value))
        }
        setSearch(data.products.searchproducts)
    }

    console.log("Name", data.products.searchproducts.name)



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
                    <SearchIcon className="header_searchIcon" />
                </div>
            </div>
        </div>
    )
}

export default Header
