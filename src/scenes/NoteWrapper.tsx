import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import NoteCard from '../components/Home/NoteCard'
import { NoteProps } from '../types/types'
import { useFetchNotes } from '../hooks/useFetchNotes'
import NoteSkeleton from './NoteSkeleton'

const NotesWrapper = () => {
  
  useFetchNotes()
  const { isNoteInitialized, isLoading, notes } = useSelector((state: RootState) => state.note);

  return (
    <div className="h-full">
      <div className="flex flex-wrap justify-center gap-4">
        {/* <CreateNote/> */}
        {
          !isNoteInitialized && isLoading && <NoteSkeleton/>
        }
        {
          notes && 
          notes.map( (note ) => (
            <div key={ note.id}>
              <NoteCard note={note as NoteProps}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default NotesWrapper;