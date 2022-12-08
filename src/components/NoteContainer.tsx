import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import supabase from '../config/supabaseClient'
import { RootState } from '../store/store'
import NewNote from './NewNote'
import Card from './Note'

export interface noteProps {
  id: number,
  created_at: string,
  title: string,
  details: string,
}

const NoteContainer = () => {
  const [fetchError, setFetchError] = useState<string>("")
    const [notes, setNotes] = useState<any>([])
    const noteSate = useSelector((state: RootState) => state.note)

    useEffect(() => {
      console.log("....")
      console.log(noteSate.notes)
      console.log(notes)
      console.log("....")
    }, [])
    

    useEffect(() => {
      const fun = async () => {
        supabase
        .channel('public:notes')
        .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, payload => {
          console.log("Receiveed")
          fetchNotes();
        })
        .subscribe()
      }
      fun();
    }, [])
    
    useEffect(() => {
      fetchNotes();
    }, [])

    const fetchNotes = async () => {
      const { data, error } = await supabase
      .from("notes")
      .select()
      .order('created_at', { ascending: false })

      if ( error){
          setFetchError("Failed to fetch notes!")
          setNotes([])
          console.log(error)
      }
      if (data) {
          setNotes(data)
          setFetchError("")
          console.log(data)
      }
    }
    

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4">
        <NewNote/>
        {
          notes && 
          notes.map( (note: noteProps) => (
              <Card note={note}/>
          ))
        }
      </div>
    </div>
  )
}

export default NoteContainer