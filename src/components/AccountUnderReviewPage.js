import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function AccountUnderReviewPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 3000);

    }, []);


  return (
    <div>
      <h1>.</h1>
      <h1>Your account is under revieew</h1>
    </div>
  )
}

export default AccountUnderReviewPage
