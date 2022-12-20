import React, { FC } from 'react'
import { AiFillCopy } from 'react-icons/ai'

const Save:FC = () => {
  return (
    <div className=" flex items-center justify-center text-xs font-bold text-white bg-PURPLE50 px-4 p-[6px] rounded-xl cursor-pointer group">
      {/* <AiFillCopy  className=" w-full h-full text-BLUE50 group-hover:text-BLUE100 transition-all"/> */}
      <p>Save now</p>
    </div>
  )
}

export default Save