import React from 'react'
import { FaLeaf } from 'react-icons/fa';

const NewNote = () => {
  return (
    <div className="min-w-26 rounded-2xl py-1 px-2 gap-x-[6px] bg-opacity-95 bg-CYAN100 flex items-center ">
      <FaLeaf className="w-[20px] h-[20px] text-white"/>
      <div className=" flex flex-col gap-y-[1px]">
        <p className="text-[0.70rem] font-semibold text-white leading-none">New note</p>
      </div>
    </div>
  )
}

export default NewNote;