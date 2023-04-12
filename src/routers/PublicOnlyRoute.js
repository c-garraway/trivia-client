import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import { selectIsLoggedIn } from '../features/userData/userDataSlice';

const PublicOnlyRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

return (
    !isLoggedIn ? <Outlet/> : <Navigate to='/game'/>
  )
}

export default PublicOnlyRoute;
