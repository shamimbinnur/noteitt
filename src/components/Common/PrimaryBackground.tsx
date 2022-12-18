import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const PrimaryBackground:FC<Props> = ({children}) => {
  return (
    <div className="bg-gradient-to-br from-BLUE100 via-PURPLE50 to-CYAN100 h-screen">
      <div className="bg-radial-shaddow bg-center bg-no-repeat h-screen">
        {children}
      </div>
    </div>
  )
}

export default PrimaryBackground