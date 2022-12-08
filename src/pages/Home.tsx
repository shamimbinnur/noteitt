import React, { useEffect, useState } from 'react'
import Card from '../components/Note'
import NoteContainer from '../components/NoteContainer'
import supabase from '../config/supabaseClient'

const Home = () => {
    return (
    <div>
        <NoteContainer/>
    </div>
    )
}

export default Home