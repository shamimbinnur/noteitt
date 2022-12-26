import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import supabase from '../config/supabaseClient'
import { RootState } from '../store/store'


const Login = () => {
  const { user }  =  useSelector((state: RootState) => state.user)
  const location = useLocation()
  const navigate = useNavigate()

  const signInWithGoogle = async ()=> {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
  }

  async function signout() {
    const { error } = await supabase.auth.signOut()
  }

  return (
    <div>
      {
        user?.id && <Navigate to="/app" state={{from: location}} replace />
      }
      <button onClick={signInWithGoogle}>Signin</button>
      <button onClick={signout}>out</button>
    </div>
  )
}

export default Login