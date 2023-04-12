import React from 'react';
import { Navigate, Outlet } from 'react-router-dom'
import { selectIsLoggedIn } from '../features/userData/userDataSlice';
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

return (
    isLoggedIn ? <Outlet/> : <Navigate to='/login'/>
  )
}

export default ProtectedRoutes;