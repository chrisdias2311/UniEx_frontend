import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import AdminRegister from './components/AdminRegister';
import Adminlogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import InvalidUsers from './components/InvalidUsers';
import AddProduct from './components/AddProduct';
import UserLogin from './components/UserLogin';
import UserDashboard from './components/UserDashboard';
import BookedProductDetails from './components/BookedProductDetails';
import TransactionDetails from './components/TransactionDetails';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

import InvalidUserCard from './components/InvalidUserCard';
import UpdateProduct from './components/UpdateProduct';
import ViewProduct from './components/ViewProduct';
import OtpValidation from './components/OtpValidation';
import Profile from './components/Profile';
import UpdateUserProfile from './components/UpdateUserProfile';
import PageNotFound from './components/PageNotFound';
import AccountUnderReviewPage from './components/AccountUnderReviewPage';
import ForgotPassword from './components/ForgotPassword';
import BookingSuccessful from './components/BookingSuccessful';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Header/> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<><Home/></>}></Route>
        <Route path='/about' element={<><About/></>}></Route>
        <Route path='/signup' element={<><Signup/></>}></Route>
        <Route path='/userlogin' element={<><UserLogin/></>}></Route>
        <Route path='/adminregister' element={<><AdminRegister/></>}></Route>
        <Route path='/adminlogin' element={<><Adminlogin/></>}></Route>
        <Route path='/admindashboard' element={<><AdminDashboard/></>}></Route>
        <Route path='/invalidusers' element={<><InvalidUsers/></>}></Route>
        <Route path='/usercard' element={<><InvalidUserCard/></>}></Route>
        <Route path='/addproduct' element={<><AddProduct/></>}></Route>
        <Route path='/dashboard' element={<><UserDashboard/></>}></Route>
        <Route path='/dashboard/bookedproductdetails/:id' element={<><BookedProductDetails/></>}></Route>
        <Route path='/dashboard/transactiondetails/:id' element={<><TransactionDetails/></>}></Route>
        <Route path='/dashboard/updateproduct/:id' element={<><UpdateProduct/></>}></Route>
        <Route path='/viewproduct/:id' element={<><ViewProduct/></>}></Route>
        <Route path='/validateotp/:id' element={<><OtpValidation/></>}></Route>
        <Route path='/profile/:id' element={<><Profile/></>}></Route>
        <Route path='/updateuserprofile' element={<><UpdateUserProfile/></>}></Route>
        <Route path='*' element={<><PageNotFound/></>}></Route>
        <Route path='/404page' element={<><PageNotFound/></>}></Route>
        <Route path='/accountunderreview' element={<><AccountUnderReviewPage/></>}></Route>
        <Route path='/forgotpassword' element={<><ForgotPassword/></>}></Route>
        <Route path='/bookingsuccessful' element={<><BookingSuccessful/></>}></Route>


        <Route path='/viewusers' element={<><h1>View Users</h1><h1>View Users</h1></>}></Route>=
      
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
