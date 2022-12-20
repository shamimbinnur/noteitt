/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useRef, useState } from 'react'
import { useSupabaseCRUD } from '../../hooks/useSupabaseCRUD'
import { NoteProps } from '../../types/types'
import useDebounce from '../../utils/useDebounce'
import Color from '../buttons/Color'
import Coppy from '../buttons/Coppy'
import Delete from '../buttons/Delete'
import Edit from '../buttons/Edit'
import Share from '../buttons/Share'
import LastModified from '../labels/LastModified'
import Typing from '../labels/Typing'
export interface NoteCardProps {
  note: NoteProps
}

const NoteCard:FC<NoteCardProps> = ({ note }) => {
  const [title, setTitle] = useState("")
  const [noteDetails, setNoteDetails] = useState("")
  const [isTextAreaReadOnly, setTextAreaReadOnly] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  
  const titleRef = useRef<any>("")
  const detailRef = useRef<any>("")
  // const cardRef = useRef<any>("")

  const { deleteNote, updateSpecificNote } = useSupabaseCRUD()
  const debouncedTitle = useDebounce<string>(title, 1000)
  const debouncedDetails = useDebounce<string>(noteDetails, 1000)
  
  useEffect(() => {

    setTitle(note.title)
    setNoteDetails(note.details)

  }, [note.title, note.details])

  useEffect( ()=> {
    setIsTyping(false)
    updateRealtime()
  }, [debouncedTitle, debouncedDetails])

  const updateRealtime = async () => {
    if ( !isTextAreaReadOnly && ( title !== note.title || noteDetails !== note.details ) ) {

        await updateSpecificNote({title: title, details: noteDetails}, note.id)

      }
  }
  
  const handleEditClick = () => {

    setTextAreaReadOnly(!isTextAreaReadOnly)
    detailRef.current.focus()

    setTimeout(() => {

      titleRef.current.focus()
      
    }, 300);
  }

  return (
    <div>
      <div className="h-12 flex items-center gap-x-2 px-2">
        <div onClick={handleEditClick}>
          <Edit isTextAreaReadOnly={isTextAreaReadOnly} />
        </div>
        <Color/>
        <Coppy/>
        <Share/>
        <Delete/>
      </div>

      <div className="rounded-2xl w-[360px] p-4 border-4 border-CYAN100 h-[245px] bg-white shadow-md">
        <div className="flex justify-between">
          {
          isTyping ?
          <Typing/> :
          <div></div>
          }
          <LastModified/>
        </div>
        <div className="mt-2">
          <textarea ref={titleRef} onChange={(e)=> { setTitle(e.target.value); setIsTyping(true)}}  readOnly={isTextAreaReadOnly} className={`px-2 py-1 w-full disabled:bg-inherit text-md leading-tight font-medium text-gray-800 ${ isTextAreaReadOnly ? "outline-none " : "outline-CYAN100 "} `} value={title} ></textarea>
        </div>

        <div className="bg-GREY50 bg-opacity-20 h-[2px] mb-[8px] mt-[2px]"></div>

        <div className="">
          <textarea ref={detailRef} onChange={(e)=> { setNoteDetails(e.target.value); setIsTyping(true) }} readOnly={isTextAreaReadOnly} className={`px-2 py-1 h-[6.5rem] w-full disabled:bg-inherit text-md text-gray-700 font-medium leading-tight ${ isTextAreaReadOnly ? "outline-none " : "outline-CYAN100 "} `} value={noteDetails}></textarea>
        </div>
      </div>
    </div>
  )
}

export default NoteCard