import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import PrimaryBackground from '../components/Common/PrimaryBackground'
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
      <PrimaryBackground>
        <div className="text-center pt-20">
          <p className="text-xl  text-white py-10">Login with Google</p>
          <button className="py-1 px-4 rounded-md text-white bg-blue-600" onClick={signInWithGoogle}>Login</button>
        </div>
      </PrimaryBackground>
    </div>
  )
}

export default Landing;