import React from 'react'
import './MyProducts.css'
import MyProductCard from './MyProductCard'
import { setMyProducts } from '../redux/actions/formActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

function MyProducts() {
  const data = useSelector((state) => state);
  const [uid, setUid] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setUid(JSON.parse(localStorage.getItem('user'))._id)
    dispatch(setMyProducts(uid))
  }, [])
  // console.log("This is the UID", uid)
  console.log(" data", data);

  return (
    <div>
      <h1>My Productsa</h1>
      <h1>My Productsa</h1>
      <MyProductCard />
    </div>
  )
}

export default MyProducts
