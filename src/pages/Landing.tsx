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

  if (user) return <Navigate to="/app" />

  return (
    <div className="flex items-center flex-col gap-y-10 md:flex-row font-istok py-20 px-10 max-w-7xl mx-auto">
      <div className="flex flex-1 flex-col gap-y-5">
        <div>
          <p className="font-bold text-5xl text-CYAN100">Noteitt<span className="text-RED50">.</span></p>
        </div>
        <div className="max-w-[420px]">
          <p className="text-gray-800 text-3xl leading-normal tracking-wider">The simplest note keeping app that you might not use!</p>
        </div>
        <div>
          <button onClick={signInWithGoogle} className="bg-gradient-to-br tracking-wide from-BLUE50 to-PURPLE100 text-white text-xl rounded-md px-3 py-1">Create a note</button>
        </div>
      </div>
      <div className="flex-1">
        <div className="rounded-md w-full h-[250px] bg-opacity-60 bg-CYAN10">
        </div>
      </div>
    </div>
  )
}

export default Landing;