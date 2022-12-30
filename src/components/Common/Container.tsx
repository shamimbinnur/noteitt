import React, { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Container:FC<Props> = ({children}) => {
  return (
    <div className="flex justify-center p-2">
      {children}
    </div>
  )
}

export default Container