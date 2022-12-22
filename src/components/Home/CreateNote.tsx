/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useSupabaseCRUD } from '../../hooks/useSupabaseCRUD'
import { RootState } from '../../store/store'
import { NoteProps } from '../../types/types'
import Save from '../buttons/Save'
import NewNote from '../labels/NewNote'

export interface NoteCardProps {
  note: NoteProps
}

const CreateNote:FC = () => {

  const { user } = useSelector((state: RootState) => state.user);
  const [title, setTitle] = useState("")
  const [noteDetails, setNoteDetails] = useState("")

  const { createNote } = useSupabaseCRUD();

  const handleSave = async () => {

    if ( title !== "" && noteDetails !==""  ) {

      await createNote({
        title: title,
        details: noteDetails,

      }, user?.id as unknown as string)

      setTitle("")
      setNoteDetails("")
    }
  }

  return (
    <div>
      <div className="h-12 flex items-center gap-x-2 px-2">
      </div>
      
      <div className="rounded-2xl w-[360px] p-4 border-4 bg-paper-texture bg-cover bg-center border-CYAN100 h-[245px] bg-white shadow-md">

        <div className="flex justify-end">
          <NewNote/>
        </div>

        <div className="mt-2">
          <textarea placeholder="Title here"onChange={(e)=> { setTitle(e.target.value)}} className="px-2 py-1  w-full bg-transparent disabled:bg-inherit outline-CYAN100 text-md text-gray-700 font-medium leading-tight" value={title} ></textarea>
        </div>

        <div className="bg-GREY50 bg-opacity-20 h-[2px] mb-[8px] mt-[2px]"></div>

        <div className="">
          <textarea placeholder="Detail here" onChange={(e)=> { setNoteDetails(e.target.value) }} className="px-2 py-1 h-[4.5rem] bg-transparent w-full disabled:bg-inherit outline-CYAN100 text-md text-gray-700 font-medium leading-tight" value={noteDetails}></textarea>
        </div>

        <div className="flex justify-start items-center">
          <div onClick={handleSave} >
            <Save/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateNote;