import React from 'react'
import './UserDashboard.css'
import AvailableProductCard from './AvailableProductCard'
import { setAvailableProducts, setBookedProducts, setTransactions } from '../redux/actions/formActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

import BookedProductsCard from './BookedProductsCard'
import TransactionCard from './TransactionCard'
import Popper from '@mui/material/Popper';

function UserDashboard() {
  const data = useSelector((state) => state);
  const [uid, setUid] = useState('');
  const [products, setProducts] = useState([]);

  const [availableProds, setAvailableProds] = useState([])
  const [bookedProds, setBookedProds] = useState([])
  const [trans, setTrans] = useState([])

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [availableProductsButton, setAvalaibleProductsButton] = useState(true)
  const [bookedProductsButton, setBookedProductsButton] = useState(false)
  const [transactionsButton, setTransactionsButton] = useState(false)

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('user'))._id) {

      setUid(JSON.parse(localStorage.getItem('user'))._id)

      const formdata = new FormData();
      formdata.append('ownerId', JSON.parse(localStorage.getItem('user'))._id);

      axios.post('http://localhost:5000/api/products/myproducts', formdata, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(res => {
          console.log("This is the response: ", res.data);
          setAvailableProds(res.data)
          dispatch(setAvailableProducts(res.data))
        })
        .catch(err =>
          console.log("This is the error", err),
        );
    } else {
      navigate('/userlogin')
    }
  }, [])

  const available_products = data.userdashboard.availableproducts;

  const getAvailableProducts = () => {
    setAvalaibleProductsButton(true);
    setBookedProductsButton(false);
    setTransactionsButton(false);
  }


  const getBookedProducts = () => {
    setAvalaibleProductsButton(false);
    setBookedProductsButton(true);
    setTransactionsButton(false);

    const formdata = new FormData();
    formdata.append('id', JSON.parse(localStorage.getItem('user'))._id);

    axios.post('http://localhost:5000/api/transactions/soldproducts', formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log("This is the response: ", res.data);
        // setProducts(res.data)
        setBookedProds(res.data)
        dispatch(setBookedProducts(res.data))
      })
      .catch(err =>
        console.log("This is the error", err),
      );
  }

  const getTransactions = () => {
    setAvalaibleProductsButton(false);
    setBookedProductsButton(false);
    setTransactionsButton(true);


    const formdata = new FormData();
    formdata.append('id', JSON.parse(localStorage.getItem('user'))._id);

    axios.post('http://localhost:5000/api/transactions/mytransactions', formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        console.log("This is the response: ", res.data);
        // setProducts(res.data)
        setTrans(res.data)
        dispatch(setTransactions(res.data))
      })
      .catch(err =>
        console.log("This is the error", err),
      );

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
      <h1>My Products</h1>
      <div className='buttonsPanel'>
        <ColorButton sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} onClick={getAvailableProducts} variant="contained">Your Products</ColorButton>     {/*   Which of my products are unsold. can update/Delete them  */}
        <ColorButton sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} onClick={getBookedProducts} variant="contained">Booked Products</ColorButton>       {/*   which of my products wese sold? I have bought  */}
        <ColorButton sx={{ maxWidth: 300, minWidth: 300, margin: 2, height: 45 }} onClick={getTransactions} variant="contained">My Transactions</ColorButton>       {/*   What I have bought    */}
      </div>

      <br></br>

      {
        availableProductsButton ?
          <>
            <h1>Your Products</h1>
            <div className='available_products'>

              {
                available_products.length > 0 ? available_products.map((item, index) =>
                  <AvailableProductCard
                    id={item._id}
                    ownerId={item.ownerId}
                    name={item.name}
                    description={item.description}
                    category={item.category}
                    price={item.price}
                    image={item.productImage}
                    link={item.link}
                  />
                ) : <h4>No products found</h4>
              }
            </div>
          </>
          :
          (
            bookedProductsButton ?
              <div>
                <h1>Booked Products</h1>
                {
                  bookedProds.length > 0 ? bookedProds.map((item, index) =>
                    <BookedProductsCard
                      transactionId={item._id}
                      buyerName={item.buyerName}
                      transactionType={item.transactionType}
                      productName={item.productName}
                      date={item.date}
                    />
                  ) : <h4>No transactions found</h4>
                }
              </div>
              :
              <div>
                <h1>My Transactions</h1>

                {
                  trans.length > 0 ? trans.map((item, index) =>
                    <TransactionCard
                      transactionId={item._id}
                      transactionType={item.transactionType}
                      productName={item.productName}
                      date={item.date}
                    />
                  ) : <h4>No transactions found</h4>
                }


              </div>
          )
      }


      <br></br> <br></br> <br></br>
    </div>
  )
}

export default UserDashboard
