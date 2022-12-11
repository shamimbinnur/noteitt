import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { RootState } from '../store/store'

const Landing = () => {
  const { user }  =  useSelector((state: RootState) => state.user)
  
  const navigate = useNavigate()
  const handleLogin = () => {
    console.log("login")
    navigate('/login')
  }

  if (user) return <Navigate to="/login" />

  return (
    <div>
      <div>
        GuestAccess
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Landing