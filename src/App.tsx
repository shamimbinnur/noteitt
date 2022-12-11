import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import useAuthenticate from './hooks/useAuthenticate';
import Authenticated from './components/Authenticated';
import Landing from './pages/Landing';

function App() {
  useAuthenticate()

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path='/app' element={<Authenticated/>}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </>
  );
}

export default App;
