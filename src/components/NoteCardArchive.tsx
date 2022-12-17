import React, { FC, useEffect, useState } from 'react'
import { TiTick } from 'react-icons/ti'
import { AiFillDelete } from 'react-icons/ai'
import useDebounce from '../utils/useDebounce'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { NoteProps } from '../types/types'
import { useSupabaseCRUD } from '../hooks/useSupabaseCRUD'


let slectionStyles = "outline-lime-400 rounded-md outline-[1.5px]  "

export interface NoteCardProps {
  note: NoteProps
}

const NoteCard:FC<NoteCardProps> = ({note}) => {
  const [noteTitle, setNoteTitle] = useState("")
  const [noteDetails, setNoteDetails] = useState("")

  const [isDetailsSelected, setIsDetailsSelected] = useState(false)
  const [isTitleSelected, setIsTitleSelected] = useState(false)
  const [isNoteModified, setIsNoteModified] = useState(false)
  const [isCardClicked, setIsCardClicked] = useState(false)
  const [triggerTyping, setTriggerTyping] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const debouncedValue2 = useDebounce<string>(noteTitle, 1000)
  const debouncedValue = useDebounce<string>(noteDetails, 1000)

  const notes = useSelector((state: RootState) => state.note)
  const user = useSelector((state: RootState) => state.user)
  const dispatch = useDispatch()

  const {deleteNote, updateSpecificNote} = useSupabaseCRUD()

  useEffect(() => {
    setIsTyping(false);
    updateRealtime();

  }, [debouncedValue, noteTitle])

  const inputHandler = (e: any) => {
    if(isDetailsSelected) {
      setNoteDetails(e.target.value)
      setIsNoteModified(true)
      setIsTyping(true)
    }
  }
  const titleInputHandler = (e: any) => {
    if(isTitleSelected) {
      setNoteTitle(e.target.value)
      setIsNoteModified(true)
    }
  }

  const cardClickHander = async () => {
    setIsCardClicked(!isCardClicked)
  }

  const updateRealtime = async () => {
    if(isDetailsSelected || isTitleSelected){
      if(!isNoteModified){
        setIsDetailsSelected(false)
        setIsTitleSelected(false)
        setIsCardClicked(false)

        return
      }

      await updateSpecificNote({title: noteTitle, details: noteDetails}, note.id)
    }
  }

  const closeEditing = async () => {
    setIsDetailsSelected(false)
    setIsTitleSelected(false)
    setIsCardClicked(false)
  }

  const deleteHandler = async () => {
    await deleteNote(note.id)
    setIsCardClicked(false)
  }

  useEffect(() => {
    setNoteTitle(note.title)
    setNoteDetails(note.details)
  }, [note])
  

  return (
    <div className="">
      
      <div className="relative font-rubik p-4 shadow-md max-w-sm rounded-xl  border-gray-500 bg-gradient-to-b from-green-100  to-white">

        <div className="absolute -top-2 -right-2 flex h-6 mb-2 justify-end">
          <div className="">
            {
              ( isDetailsSelected  || isTitleSelected ) &&
              <button onClick={closeEditing} className="p-[6px] bg-opacity-50 text-green-600 items-center justify-center bg-green-500 rounded-full " >
                <TiTick/>
              </button>
            }
            {
              !isDetailsSelected  && !isTitleSelected  && isCardClicked &&
              <button onClick={deleteHandler} className="p-[6px] bg-opacity-50 text-red-600 items-center justify-center bg-red-500 rounded-full " >
                <AiFillDelete/>
              </button>
            }
          </div>
        </div>

        <div onClick={cardClickHander} className="flex flex-col gap-5">
          <input onChange={titleInputHandler} onDoubleClick={()=> setIsTitleSelected(!isTitleSelected)} type="text" value={noteTitle} className={"p-2 text-md border-gray-300 border-b-[1px] bg-opacity-5 bg-green-100 cursor-default outline-none "+ (isTitleSelected ? slectionStyles : "")} />
          
          <textarea onChange={inputHandler} onDoubleClick={()=> setIsDetailsSelected(!isDetailsSelected)} value={noteDetails} className={"p-2 text-md border-gray-300 border-t-[1px] bg-opacity-5 bg-green-100 min-h-[7rem] cursor-default outline-none "+ (isDetailsSelected ? slectionStyles : "")} ></textarea>
        </div>

        <div>
          {
            isTyping.toString()
          }
        </div>
      </div>
    </div>
  )
}

export default NoteCard