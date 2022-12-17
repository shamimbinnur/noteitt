import React from 'react'
import Container from '../components/Container'
import HomeBackround from '../components/HomeBackround'
import UserAvatar from '../components/UserAvatar'
import NoteWrapper from '../scenes/NotedWrapper'

const Home = () => { 
    return (
      <HomeBackround>
        <Container>
          <NoteWrapper/>

          <UserAvatar/>
        </Container>
      </HomeBackround>
    )
}

export default Home