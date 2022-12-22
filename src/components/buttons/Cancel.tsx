import React, { FC } from 'react'
import { setSelectedCard } from '../../store/features/card/cardSlice'
import { MdNotInterested } from 'react-icons/md'
import { useDispatch } from 'react-redux'

const Cancel:FC = () => {

  const dispatch = useDispatch()
  
  const onClickHadler = () => {

    dispatch(setSelectedCard(null))
    
  }

  return (
    <div onClick={onClickHadler} className="bg-white bg-opacity-5 w-7 h-7 p-1 rounded-full cursor-pointer group">
      <MdNotInterested  className=" w-full h-full text-gray-200 group-hover:text-gray-300 transition-all"/>
    </div>
  )
}

export default Cancel