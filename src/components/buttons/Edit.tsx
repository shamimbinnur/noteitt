import React, { FC } from 'react'
import { BsPencilFill } from 'react-icons/bs'

const Edit:FC = () => {
  return (
    <div className="bg-white w-7 h-7 p-[5px] rounded-full cursor-pointer group">
      <BsPencilFill  className=" w-full h-full text-CYAN100 group-hover:text-cyan-600 transition-all"/>
    </div>
  )
}

export default Edit