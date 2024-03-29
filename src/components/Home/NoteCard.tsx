/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { useSupabaseCRUD } from '../../hooks/useSupabaseCRUD'
import { setSelectedCard } from '../../store/features/card/cardSlice'
import { RootState } from '../../store/store'
import { NoteProps } from '../../types/types'
import { getBackgroundColor, getBorderColor } from '../../utils/tailwindColor'
import useDebounce from '../../utils/useDebounce'
import Cancel from '../buttons/Cancel'
import Color from '../buttons/Color'
import Delete from '../buttons/Delete'
import Edit from '../buttons/Edit'
import CreatedAt from '../labels/CreatedAt'
import Typing from '../labels/Typing'
import SharingOption from '../buttons/SharingOption'
export interface NoteCardProps {
  note: NoteProps
}

const NoteCard:FC<NoteCardProps> = ({ note }) => {

  const { selectedCard } = useSelector((state: RootState) => state.card);

  const [title, setTitle] = useState("")
  const [noteDetails, setNoteDetails] = useState("")
  const [isTextAreaReadOnly, setTextAreaReadOnly] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  
  const titleRef = useRef<any>("")
  const detailRef = useRef<any>("")

  const dispatch = useDispatch()
  const { updateSpecificNote } = useSupabaseCRUD()
  const debouncedTitle = useDebounce<string>(title, 1000)
  const debouncedDetails = useDebounce<string>(noteDetails, 1000)
  
  useEffect(() => {
    setTitle(note.title)
    setNoteDetails(note.details)

  }, [note.title, note.details])

  useEffect(()=> {
    setIsTyping(false)
    updateRealtime()
  }, [debouncedTitle, debouncedDetails])

  const updateRealtime = async () => {
    if ( !isTextAreaReadOnly && (title !== note.title || noteDetails !== note.details)) {
      await updateSpecificNote({ title: title, details: noteDetails }, note.id)
    }
  }

  const handleCardClick = () => {
    dispatch(setSelectedCard(note.uuid))
  }
  
  const handleEditClick = () => {
    setTextAreaReadOnly(!isTextAreaReadOnly)
    detailRef.current.focus()

    setTimeout(() => {
      titleRef.current.focus()
      
    }, 300);
  }

  return (
    <motion.div
      initial={{ x: -4, opacity: 1, scale: 1 }}
      animate={{ x: 1, opacity: 1, scale: 1, rotate:[.5, 0] }}
      transition={{ ease:'easeInOut' }}
    >
      <div className="h-12 flex items-center">
        {selectedCard === note.uuid
          ? (<motion.div
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="flex w-full justify-between">
              <div className="flex items-center gap-x-2 px-2">
                <div onClick={handleEditClick}>
                  <Edit isTextAreaReadOnly={isTextAreaReadOnly} />
                </div>
                <Color noteUUID={note.uuid}/>
                {/* <Coppy noteUUID={note.uuid}/>
                <Share publicMode={note.isPublic} noteUUID={note.uuid}/> */}
                <SharingOption noteUUID={note.uuid} publicMode={note.isPublic}   />
                <Delete noteUUID={note.uuid}/>
              </div>
              <Cancel/>
            </motion.div>)
          : ""
        }
      </div>
      <motion.div
        whileTap={{ scale: 0.95, transition: { ease:'easeOut', duration: 1 }}}
        onClick={handleCardClick}
        className={`rounded-2xl w-[350px] p-4 border-2 bg-paper-texture bg-cover bg-center h-[245px] bg-white shadow-md border-opacity-95 ${getBorderColor(note.color)}`}
      >
        <div className="flex mt-2 justify-between">
          {isTyping
            ? <Typing/>
            : <div></div>
          }
          <CreatedAt colorCode={getBackgroundColor(note.color)} dateTime={note.created_at} />
        </div>
        <div className="font-rubik text-gray-600">
          <div>
            <textarea ref={titleRef} onChange={(e)=> {setTitle(e.target.value); setIsTyping(true)}} readOnly={isTextAreaReadOnly} className={`px-2 py-1 w-full bg-transparent disabled:bg-inherit leading-tight ${ isTextAreaReadOnly ? "outline-none " : "outline-CYAN100 "} `} value={title} ></textarea>
          </div>

          <div>
            <textarea ref={detailRef} onChange={(e)=> {setNoteDetails(e.target.value); setIsTyping(true) }} readOnly={isTextAreaReadOnly} className={`px-2 py-1 h-[6.5rem] w-full bg-transparent disabled:bg-inherit ${ isTextAreaReadOnly ? "outline-none " : "outline-CYAN100 "} `} value={noteDetails}></textarea>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default NoteCard