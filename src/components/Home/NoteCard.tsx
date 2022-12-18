import React, { FC, useEffect, useState } from 'react'
import { NoteProps } from '../../types/types'
import Color from '../buttons/Color'
import Coppy from '../buttons/Coppy'
import Edit from '../buttons/Edit'
import Share from '../buttons/Share'

let slectionStyles = "outline-lime-400 rounded-md outline-[1.5px]  "

export interface NoteCardProps {
  note: NoteProps
}

const NoteCard:FC<NoteCardProps> = ({ note }) => {
  const [title, setTitle] = useState("This is a nice title to be placed on the note! AwesomeS")
  const [noteDetails, setNoteDetails] = useState("This is a nice details of specific note to be placed on the note!")

  return (
    <div className="">
      <div className="h-12 flex items-center gap-x-2 px-2">
        <Coppy/>
        <Edit/>
        <Share/>
        <Color/>
      </div>
      <div className="rounded-2xl w-[360px] p-4 border-4 border-CYAN100 h-56 bg-white shadow-md">

        <div className="">
          <textarea className="py-2 px-1 w-full" value={title} ></textarea>
        </div>

        <div className="bg-GREY50 bg-opacity-20 h-[2px]"></div>

        <div className="">
          <textarea className="py-2 px-1 w-full" value={noteDetails}></textarea>
        </div>
      </div>

    </div>
  )
}

export default NoteCard