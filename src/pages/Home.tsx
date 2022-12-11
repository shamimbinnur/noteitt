import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import NoteContainer from '../scenes/NoteContainer'


const Home = () => { 
    return (
    <div>
        <NoteContainer/>
    </div>
    )
}

export default Home