import React, { FC } from 'react'
import { FaShareAlt } from 'react-icons/fa'
import { TbShareOff } from 'react-icons/tb'
import { useSupabaseCRUD } from '../../hooks/useSupabaseCRUD'

interface Props {
  publicMode: boolean
  noteUUID: string
}

const Share:FC<Props> = ({ publicMode, noteUUID }) => {
  const { setPublicMode } = useSupabaseCRUD()

  const handleClick = async () => {
    await setPublicMode(noteUUID, !publicMode,)
  }

  return (
    <div onClick={handleClick} className="bg-white w-7 h-7 p-[5px] rounded-md cursor-pointer group">
      {publicMode
      ? <FaShareAlt  className="w-full h-full text-orange-600 animate-pulse group-hover:text-BLUE100 transition-all"/>
      : <TbShareOff  className="w-full h-full text-BLUE50 group-hover:text-BLUE100 transition-all"/>
      }
    </div>
  )
}

export default Share