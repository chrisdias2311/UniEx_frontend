import './App.css';
import Header from './Header';
import Home from './Home';
import Signup from './Signup';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<><Home/></>}></Route>
        <Route path='/signup' element={<><Signup/></>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
