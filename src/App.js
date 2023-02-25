import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Signup from './components/Signup';
import AdminRegister from './components/AdminRegister';
import Adminlogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import InvalidUsers from './components/InvalidUsers';
import AddProduct from './components/AddProduct';
import UserLogin from './components/UserLogin';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

import InvalidUserCard from './components/InvalidUserCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<><Home/></>}></Route>
        <Route path='/signup' element={<><Signup/></>}></Route>
        <Route path='/userlogin' element={<><UserLogin/></>}></Route>
        <Route path='/adminregister' element={<><AdminRegister/></>}></Route>
        <Route path='/adminlogin' element={<><Adminlogin/></>}></Route>
        <Route path='/admindashboard' element={<><AdminDashboard/></>}></Route>
        <Route path='/invalidusers' element={<><InvalidUsers/></>}></Route>
        <Route path='/usercard' element={<><InvalidUserCard/></>}></Route>
        <Route path='/addproduct' element={<><AddProduct/></>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
