import React, { FC, ReactNode } from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedCard } from '../../store/features/card/cardSlice';

interface Props {
  children: ReactNode
}

const PrimaryBackground:FC<Props> = ({children}) => {
  return (
    <div className="blankSpace bg-gradient-to-br from-BLUE100 via-PURPLE50 to-CYAN100 h-screen">
      <div className="bg-radial-shaddow bg-center bg-no-repeat h-screen">
        {children}
      </div>
    </div>
  )
}

export default PrimaryBackground