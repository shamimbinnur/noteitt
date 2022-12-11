import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { RootState } from '../store/store'
import Loader from './Loader'

const Authenticated:FC = () => {
    const { user }  =  useSelector((state: RootState) => state.user)
    const location = useLocation()
    
    if (!user) return <Loader/>

    return user?.id ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace /> 
}

export default Authenticated