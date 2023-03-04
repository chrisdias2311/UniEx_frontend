import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import "./Home.css";
import banner from './banner.jpg'
import { setProducts, setStationery, setNotes, setEnotes, setPreviousPapers, setAllProductsButton, setStationeryButton, setNotesButton, setEnotesButton, setPreviousPapersButton, searchAllProducts, searchStationery, searchNotes, searchPreviousPapers, searchEnotes } from '../redux/actions/formActions';

import axios from 'axios'

import LinearProgress from '@mui/material/LinearProgress';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

function Home() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state);
    const [products, setAllProducts] = useState([]);
    const [loader, setLoader] = useState(true)

    const [search, setSearch] = useState([]);
    const [textSearch, setTextSearch] = useState('');


    useEffect(() => {
        axios
            .get("http://localhost:5000/api/products/allproducts")
            .then((response) => {
                // dispatch(setInvalidUsers(response.data));
                dispatch(setProducts(response.data))
                dispatch(setStationery(response.data))
                dispatch(setNotes(response.data))
                dispatch(setPreviousPapers(response.data))
                dispatch(setEnotes(response.data))
                setAllProducts(response.data)
                setLoader(false)

                if (JSON.parse(localStorage.getItem('user'))._id) {
                    const formdata = new FormData()
                    formdata.append('userid', JSON.parse(localStorage.getItem('user'))._id);

                    axios.post('http://localhost:5000/api/transactions/userdetails', formdata, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                        .then(res => {
                            localStorage.setItem('user', JSON.stringify(res.data))
                        })
                        .catch(err =>
                            console.log("This is the error", err),
                        );
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [])




    const handleSearch = (e) => {
        setTextSearch(e.target.value)
        if (data.products.buttons.allProducts === true) {
            dispatch(searchAllProducts(e.target.value))
        } else if (data.products.buttons.stationery) {
            dispatch(searchStationery(e.target.value))
        } else if (data.products.buttons.notes) {
            dispatch(searchNotes(e.target.value))
        } else if (data.products.buttons.previouspapers) {
            dispatch(searchPreviousPapers(e.target.value))
        } else if (data.products.buttons.enotes) {
            dispatch(searchEnotes(e.target.value))
        }
        setSearch(data.products.searchproducts)
    }

    const submitSearch = () => {
        if (textSearch !== '') {
            setAllProducts(search)
        }
    }




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
            backgroundColor: grey[600],
        },
    }));




    return (
        <div>
            <div className="home_container">
                <img className="home_image" src={banner}></img>

                <div className="home_search">
                    <div className='home_search_bar'>
                        <div className='inputField'>
                            <Stack spacing={2} sx={{ height: 55, minWidth: 250, maxWidth: 350, color: "white" }}>
                                <Autocomplete
                                    id="free-solo-demo"
                                    freeSolo
                                    options={search.map((option) => option.name)}
                                    renderInput={(params) => <TextField InputProps={{ style: { color: 'white' }, }} {...params} onChange={handleSearch} label="Search Products" />}
                                />
                            </Stack>
                        </div>

                        <ColorButton onClick={submitSearch} sx={{ maxWidth: 100, minWidth: 100, marginRight: 1, height: 40 }} variant="contained">Search</ColorButton>
                    </div>
                </div>

                <div className='buttonsPanel'>
                    <ColorButton onClick={allproducts} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">All Products</ColorButton>
                    <ColorButton onClick={stationery} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">Stationery & Equipments</ColorButton>
                    <ColorButton onClick={notes} sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} variant="contained">Notes & Study Material</ColorButton>
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
                                date={item.sellingDate}
                            />
                        ) : <h1>No products found</h1>
                    }

                </div>
            </div>
            {
                loader ? <LinearProgress color='success' /> : <></>
            }
            <br></br>
            <br></br>
        </div>
    )
}

export default Home
