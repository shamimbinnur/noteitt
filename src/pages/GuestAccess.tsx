import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PrimaryBackground from '../components/Common/PrimaryBackground'
import CreatedAt from '../components/labels/CreatedAt'
import supabase from '../config/supabaseClient'
import { useSupabaseCRUD } from '../hooks/useSupabaseCRUD'
import { GuestNoteProps } from '../types/types'
import { getBackgroundColor, getBorderColor } from '../utils/tailwindColor'
interface NoteState {
  note: GuestNoteProps | null
  error: object | null
}

const GuestAccess = () => {
  const { id } = useParams()
  const { fetchGuestNote } = useSupabaseCRUD()

  const initialState = {
    note: null,
    error: null
  }

  const [noteState, setNoteState] = useState<NoteState>(initialState)

  useEffect(() => {
    console.log("I started listening")

    supabase
    .channel('public:notes')
    .on('postgres_changes', { event: '*', schema: 'public', table: 'notes' }, payload => {
      fetchNote()
      console.log('Received!')
    })
    .subscribe()

    return () => {
      supabase.removeAllChannels()
    }

  },[])

  const fetchNote = async () => {
    const { data, error } = await fetchGuestNote(id)
    if(data) {
      setNoteState({
         note: data as unknown as GuestNoteProps,
         error: null
      })
    }
    else if (error) {
      setNoteState({
        note: null,
        error: error
      })
    }
    console.log(noteState)
  }
  fetchNote()

  useEffect(()=>{
    
  },[])

  return (
    <div>
      <PrimaryBackground>
        <div className="flex justify-center pt-10 px-4">
            <div  className={`rounded-2xl w-[660px] p-4 border-2 bg-paper-texture bg-cover bg-center h-[245px] bg-white shadow-md border-opacity-95 border-CYAN100 ${getBorderColor(noteState.note?.color || "")} `}>
            <div className="flex justify-between">
              <div></div>
              {noteState.note
                && <CreatedAt colorCode={getBackgroundColor(noteState.note?.color || "")} dateTime={noteState.note?.created_at || ""} />
              }
            </div>
            
            {noteState.note
              ? <div className="mt-2 font-rubik text-gray-600">
                  <div>
                    <textarea readOnly className={`px-2 py-1 w-full bg-transparent disabled:bg-inherit leading-tight outline-CYAN100 `} value={noteState.note?.title || ""} ></textarea>
                  </div>

                  <div>
                    <textarea readOnly={true} className={`px-2 py-1 h-[6.5rem] w-full bg-transparent disabled:bg-inherit outline-CYAN100 `} value={noteState.note?.details || ""}></textarea>
                  </div>
                </div>
              : <p className="mt-20 text-gray-500 text-center text-xl"> Nothing found :) </p>
            }
          </div>
        </div>
      </PrimaryBackground>
    </div>
  )
}

export default GuestAccess