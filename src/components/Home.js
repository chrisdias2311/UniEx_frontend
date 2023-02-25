import React, { useEffect } from 'react'
import Product from './Product';
import ProductCard from './ProductCard';
import "./Home.css";
import banner from './banner.jpg'
import { setProducts, setStationery, setNotes, setEnotes, setPreviousPapers, setAllProductsButton, setStationeryButton, setNotesButton, setEnotesButton, setPreviousPapersButton } from '../redux/actions/formActions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { purple } from '@mui/material/colors';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

function Home() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const [products, setAllProducts] = useState([]);

    console.log("This isthe state: ", data)

    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products/allproducts")
            .then((response) => {
                // dispatch(setInvalidUsers(response.data));
                console.log("These are the prods", response.data)
                dispatch(setProducts(response.data))
                dispatch(setStationery(response.data))
                dispatch(setNotes(response.data))
                dispatch(setPreviousPapers(response.data))
                dispatch(setEnotes(response.data))
                setAllProducts(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])
    console.log("This is data: ", data.products.allProducts)

    const allproducts = () => {
        setAllProducts(data.products.allProducts);
        dispatch(setAllProductsButton())
    }
    const stationery = () => {
        setAllProducts(data.products.stationery)
        dispatch(setStationeryButton());
    }
    const notes = () => {
        setAllProducts(data.products.notes)
        dispatch(setNotesButton());
    }
    const enotes = () => {
        setAllProducts(data.products.enotes)
        dispatch(setEnotesButton());
    }
    const previouspapers = () => {
        setAllProducts(data.products.previouspapers)
        dispatch(setPreviousPapersButton());
    }
    

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(grey[900]),
        backgroundColor: grey[900],
        '&:hover': {
            backgroundColor: grey[400],
        },
    }));




    return (
        <div>
            <div className="home_container">
                <img className="home_image" src={banner}></img>

                {/* <h1>Hello</h1> */}
                <div className='buttonsPanel'>
                    <ColorButton onClick={allproducts}  sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">All Products</ColorButton>
                    <ColorButton onClick={stationery}  sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">Stationery & Equipments</ColorButton>
                    <ColorButton onClick={notes}  sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">Notes & Study Material</ColorButton>
                    <ColorButton onClick={previouspapers} sx={{ maxWidth: 300, minWidth: 300, margin: 2 }} variant="contained">Previous papers</ColorButton>
                    <ColorButton onClick={enotes} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">E-notes and Study Material</ColorButton>
                </div>

                <br></br>
                <br></br>

                <div className="home_row">
                    {
                        products.length > 0 ? products.map((item, index) =>
                            <ProductCard
                                id={item._id}
                                ownerId={item.ownerId}
                                name={item.name}
                                description={item.description}
                                category={item.category}
                                price={item.price}
                                image={item.productImage}
                                link={item.link}
                            />
                        ) : <h1>No products found</h1>
                    }

                </div>
            </div>
        </div>
    )
}

export default Home
