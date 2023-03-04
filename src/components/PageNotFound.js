import React from 'react'
import page1 from '../page1.svg'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate('/')
  }

  return (
    <div className='pnf_main'>
      <div class="wrapper">
        <br></br> 
        <h2>Oops! Page not found.</h2>
        <div>
          <img src={page1} alt="" />
        </div>
        <h4>We can't find the page you're looking :(</h4>
        <button onClick={navigateToHome} type="button" class="main-btn">GO BACK TO HOME</button>
      </div>
    </div>
  )
}

export default PageNotFound