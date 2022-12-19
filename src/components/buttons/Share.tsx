import React, { FC, useState } from 'react'
import { FaShareAlt } from 'react-icons/fa'
import { TbShareOff } from 'react-icons/tb'

const Share:FC = () => {

  const [isShared, setIsShared] = useState(false);

  const handleClick = () => {
    setIsShared(!isShared)
  }

  return (
    <div onClick={handleClick} className="bg-white w-7 h-7 p-[5px] rounded-full cursor-pointer group">
      {
        isShared ?
        <FaShareAlt  className=" w-full h-full text-orange-500 animate-pulse group-hover:text-BLUE100 transition-all"/> :
        <TbShareOff  className=" w-full h-full text-BLUE50 group-hover:text-BLUE100 transition-all"/>
      }
    </div>
  )
}

export default Share