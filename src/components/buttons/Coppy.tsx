import React, { FC } from 'react'
import { AiFillCopy } from 'react-icons/ai'

interface Props {
  noteUUID: string
}

const Coppy:FC<Props> = ({ noteUUID }) => {
  return (
    <div className="bg-white w-7 h-7 p-1 rounded-full cursor-pointer group">
      <AiFillCopy  className=" w-full h-full text-BLUE50 group-hover:text-BLUE100 transition-all"/>
    </div>
  )
}

export default Coppy