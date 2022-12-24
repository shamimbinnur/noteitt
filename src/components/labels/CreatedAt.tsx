import React, { FC } from 'react'
import moment from 'moment'
import { BsFillClockFill } from 'react-icons/bs'

interface Prop {
  dateTime: string
}

const CreatedAt: FC<Prop> = ({dateTime}) => {
  return (
    <div className="min-w-26 rounded-2xl py-1 px-2 gap-x-1 bg-opacity-95 bg-PURPLE50 flex items-center ">
      <BsFillClockFill className="w-[20px] h-[20px] text-white"/>
      <div className=" flex flex-col gap-y-[1px]">
        <p className="text-[0.60rem] font-semibold text-white leading-none"> {moment(dateTime).format('dddd')} </p>
        <p className="text-[0.55rem] text-gray-100 leading-none "> {moment().format("Do MMM YY")} </p> 
      </div>
    </div>
  )
}

export default CreatedAt;