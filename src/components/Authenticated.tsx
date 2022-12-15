import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { RootState } from '../store/store'


const Authenticated:FC = () => {
    const { user }  =  useSelector((state: RootState) => state.user)
    const location = useLocation()

    return user?.id ? <Outlet /> : <Navigate to="/" state={{from: location}} replace /> 
}

export default Authenticated