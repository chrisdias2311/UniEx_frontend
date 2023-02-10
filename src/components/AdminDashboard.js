import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';



function AdminDashboard() {
    // const checkAdmin = localStorage.getItem('admin');
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem('admin')) {
            navigate('/');
        }
    }, [])



    return (
        <div>
            <h1>This is the admin dashboard</h1>
        </div>
    )
}

export default AdminDashboard