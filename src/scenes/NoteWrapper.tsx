import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import NoteCard from '../components/Home/NoteCard'
import { NoteProps } from '../types/types'
import { useFetchNotes } from '../hooks/useFetchNotes'
import LoaderSec from './LoaderSec'
import CreateNote from '../components/Home/CreateNote'
import { motion } from 'framer-motion'

const NotesWrapper = () => {
  
  useFetchNotes()
  const { isNoteInitialized, isLoading, notes } = useSelector((state: RootState) => state.note);
  
  return (
    <div className="w-full max-w-6xl justify-center flex">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 1, opacity: 1 }}
        transition={{ delay: 0, type: 'spring', stiffness: 150 }}
        className="flex justify-center flex-wrap gap-x-2 gap-y-1"
      >   
          {!isNoteInitialized
            && isLoading
            && <LoaderSec/>
          }

          {isNoteInitialized
          &&
          <CreateNote/>
          }
          
          {notes
          && notes.map( (note) => (  
            <div key={ note.id}>
              <div>
                <NoteCard note={note as NoteProps}/>
              </div>
            </div>
            ))
          }
      </motion.div>
    </div>
  )
}

export default NotesWrapper;
