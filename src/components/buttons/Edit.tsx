import React, { FC } from 'react'
import { BsPencilFill } from 'react-icons/bs'
interface Props {
  isTextAreaReadOnly: boolean;
}

const Edit:FC<Props> = ({isTextAreaReadOnly}) => {
  return (
    <div className="bg-white w-7 h-7 p-[5px] rounded-full cursor-pointer group">
      <BsPencilFill className={`w-full h-full text-CYAN100 group-hover:text-cyan-600 transition-all ${!isTextAreaReadOnly ? "animate-pulse" :""}`}/>
    </div>
  )
}

export default Edit