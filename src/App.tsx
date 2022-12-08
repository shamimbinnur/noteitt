import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import supabase from './config/supabaseClient';
import Home from './pages/Home';
import New from './pages/New';
import Update from './pages/Update';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateAllNotes, updateError } from './store/features/note/noteSlice'
import { PostgrestError } from '@supabase/supabase-js';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    updateState()
  })

  useEffect(() => {
    supabase
    .channel('public:notes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, payload => {
      updateState()
    })
    .subscribe()

    return () => {
      supabase.removeAllChannels()
    }
  })

  const updateState = async () => {
    const { data, error } = await supabase
    .from("notes")
    .select()
    .order('created_at', { ascending: false })

    if ( error){
        dispatch(updateError(error))
        dispatch(updateAllNotes([]))
    }
    if (data) {
      dispatch(updateAllNotes(data))
      dispatch(updateError(null as unknown as PostgrestError))
    }
  }
  

  return (
    <div className="mx-auto min-h-screen bg-gradient-to-b from-white via-green-50  to-white">
      <div className="mx-auto relative max-w-7xl">
        <BrowserRouter >
          <nav>
            <Link to="/">Home</Link>
            <Link to="/new">New</Link>
          </nav>

          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/new" element={< New />} />
            <Route path="/:id" element={< Update />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
