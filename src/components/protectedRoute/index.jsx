import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const location = useLocation();
    const isAuth = useSelector(store => store.authReducer.isAuth);
    if (!isAuth)
        return <Navigate state={location.pathname} to={'/login'} />
    return props.children;
}

export default ProtectedRoute