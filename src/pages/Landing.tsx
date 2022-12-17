import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import supabase from '../config/supabaseClient'
import { RootState } from '../store/store'

const Landing = () => {

  const { user }  =  useSelector((state: RootState) => state.user);
  
  const signInWithGoogle = async ()=> {

     await supabase.auth.signInWithOAuth({ provider: 'google', })

  }

  if ( user ) return <Navigate to="/app" />

  return (
    <div>
      <h1> Noice Landing Page! </h1>
      <button onClick={signInWithGoogle}>Login</button>
    </div>
  )
}

export default Landing;