import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import New from './pages/New';
import Update from './pages/Update';
import Login from './pages/Login';
import useAuthenticate from './hooks/useAuthenticate';
import { useFetchNotes } from './hooks/useFetchNotes';


function App() {
  useAuthenticate()
  useFetchNotes()
  
  return (
    <div className="mx-auto min-h-screen bg-gradient-to-b from-white via-green-50  to-white">
      <div className="mx-auto relative max-w-7xl">
        <BrowserRouter >
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new">New</Link>
            <Link to="/login">New</Link>
          </nav>

          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/new" element={< New />} />
            <Route path="/:id" element={< Update />} />
            <Route path="/login" element={< Login />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
