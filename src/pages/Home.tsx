import React from 'react'
import Container from '../components/Common/Container'
import PrimaryBackground from '../components/Common/PrimaryBackground'
import UserAvatar from '../components/Home/UserAvatar'
import NotesWrapper from '../scenes/NoteWrapper'

const Home = () => { 
  return (
    <PrimaryBackground>
      <Container>
        <NotesWrapper/>
        <UserAvatar/>
      </Container>
    </PrimaryBackground>
  )
}

export default Home