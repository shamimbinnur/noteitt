import React from 'react';
import { Routes, Route, redirect, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import useAuthenticate from './hooks/useAuthenticate';
import Authenticated from './components/Authenticated';
import Landing from './pages/Landing';
import { RootState } from './store/store';
import { useSelector } from 'react-redux';
import GuestAccess from './pages/GuestAccess';

function App() {
  useAuthenticate()
  const { user } = useSelector((state: RootState) => state.user)

  return (
    <>
      <Routes>
        <Route path="/" element={ !user ? <Landing /> : <Navigate to={"/app"} />} />
        <Route path='/' element={<Authenticated/>}>
          <Route path="app" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/guest/note/:id" element={<GuestAccess />}/>
      </Routes>
    </>
  );
}

export default App;
