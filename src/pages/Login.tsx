import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom'
import supabase from '../config/supabaseClient'
import { RootState } from '../store/store'
import { UserInfo } from '../types/types'
import { createUser } from '../utils/createUser'

const Login = () => {

  const { user }  =  useSelector((state: RootState) => state.user)
  const location = useLocation()
  const navigate = useNavigate()

  async function signInWithGoogle() {

    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    const { data: { user } } = await supabase.auth.getUser()
    
    if(user) {
      const userInfo: UserInfo = {
        id: user?.id,
        full_name: user?.user_metadata.full_name,
        email: user?.email,
        avatar: user?.user_metadata.avatar_url,
      }
      await createUser(userInfo)
    }
    
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