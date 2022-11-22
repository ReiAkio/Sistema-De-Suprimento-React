import { Outlet, Navigate } from 'react-router-dom'
import React from 'react';

const PrivateRoutes = () => {
    if (sessionStorage.getItem("Login") == 'true') {
        
        return (<Outlet/>)
    } else {
        return(<Navigate to="/login"/>)
    }
}

export default PrivateRoutes