import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container:FC<Props> = ({children}) => {
  return (
    <div className="flex justify-center px-2 py-8">
      {children}
    </div>
  )
}

export default Container