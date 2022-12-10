import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import CreateNote from '../components/CreateNote'
import NoteCard from '../components/NoteCard'
import { NoteProps } from '../types/types'



const NoteContainer = () => {
    const { notes } = useSelector((state: RootState) => state.note)

    return (
      <div>
        <div className="flex flex-wrap justify-center gap-4">
          <CreateNote/>
          {
            notes && 
            notes.map( (note)=> (
              <div>
                <NoteCard note={note as NoteProps}/>
              </div>
            ))
          }
        </div>
      </div>
    )
}

export default NoteContainer