import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const PrimaryBackground:FC<Props> = ({children}) => {
  return (
    <div className="bg-gradient-to-br from-BLUE100 via-PURPLE50 to-CYAN100 min-h-screen">
      <div>
        {children}
      </div>
    </div>
  )
}

export default PrimaryBackground