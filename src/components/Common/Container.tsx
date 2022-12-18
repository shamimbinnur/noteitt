import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container:FC<Props> = ({children}) => {
  return (
    <div className="px-6 py-6">
      {children}
    </div>
  )
}

export default Container