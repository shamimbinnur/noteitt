import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import NoteCard from '../components/NoteCard'
import { NoteProps } from '../types/types'
import { useFetchNotes } from '../hooks/useFetchNotes'
import NoteSkeleton from './NoteSkeleton'

const NotesWrapper = () => {
  
    useFetchNotes()
    const { isLoading, notes } = useSelector((state: RootState) => state.note);

    return (
      <div className="h-full">
        <div className="flex flex-wrap justify-center gap-4">
          {/* <CreateNote/> */}
          {
            isLoading && <NoteSkeleton/>
          }
          {
            notes && 
            notes.map( (note) => (
              <div>
                <NoteCard note={note as NoteProps}/>
              </div>
            ))
          }
        </div>
      </div>
    )
}

export default NotesWrapper;