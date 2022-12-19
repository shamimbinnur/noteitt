import React, { FC, useEffect, useRef, useState } from 'react'
import { NoteProps } from '../../types/types'
import Color from '../buttons/Color'
import Coppy from '../buttons/Coppy'
import Delete from '../buttons/Delete'
import Edit from '../buttons/Edit'
import Share from '../buttons/Share'
import LastModified from '../labels/LastModified'

let slectionStyles = "outline-lime-400 rounded-md outline-[1.5px]  "

export interface NoteCardProps {
  note: NoteProps
}

const NoteCard:FC<NoteCardProps> = ({ note }) => {
  const [title, setTitle] = useState("This is a nice title to be placed on the note! AwesomeS")
  const [noteDetails, setNoteDetails] = useState("This is a nice details of specific note to be placed on the note!")
  const [isTextAreaReadOnly, setTextAreaReadOnly] = useState(true)
  const [outline, setOutline] = useState("outline-CYAN10")

  const titleRef = useRef<any>("")
  const detailRef = useRef<any>("")

  const handleEditClick = () => {
    setTextAreaReadOnly(!isTextAreaReadOnly)
    detailRef.current.focus()

    setTimeout(() => {
      titleRef.current.focus()
      
    }, 300);
  }

  return (
    <div className="">
      <div className="h-12 flex items-center gap-x-2 px-2">
        <div onClick={handleEditClick}>
          <Edit isTextAreaReadOnly={isTextAreaReadOnly} />
        </div>
        <Color/>
        <Coppy/>
        <Share/>
        <Delete/>
      </div>

      <div className="rounded-2xl w-[360px] p-4 border-4 border-CYAN100 h-56 bg-white shadow-md">
        <div className="flex justify-end">
          <LastModified/>
        </div>

        <div className="py-2">
          <textarea ref={titleRef} readOnly={isTextAreaReadOnly} className={`py-2 px-1 w-full disabled:bg-inherit ${ isTextAreaReadOnly ? "outline-none " : "outline-CYAN100 "} `} value={title} ></textarea>
        </div>

        <div className="bg-GREY50 bg-opacity-20 h-[2px]"></div>

        <div className="">
          <textarea ref={detailRef} readOnly={isTextAreaReadOnly} className={`py-2 px-1 w-full disabled:bg-inherit ${ isTextAreaReadOnly ? "outline-none " : "outline-CYAN100 "} `} value={noteDetails}></textarea>
        </div>
      </div>

    </div>
  )
}

export default NoteCard