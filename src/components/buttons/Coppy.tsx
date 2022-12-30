import React, { FC } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { AiFillCopy } from 'react-icons/ai'

interface Props {
  noteUUID: string
}

const Coppy:FC<Props> = ({ noteUUID }) => {
  const getPublicURL = (noteUUID: string): string => {
    const path = window.location.href
    const arrayOfPath = path.split("/")
    const publicURL = `${arrayOfPath[0]}//${arrayOfPath[2]}/guest/note/${noteUUID}`

    return publicURL
  }

  return (
    <CopyToClipboard text={getPublicURL(noteUUID)}>
      <div className="bg-white w-7 h-7 p-1 rounded-full cursor-pointer group">
        <AiFillCopy className="w-full h-full text-BLUE50 group-hover:text-BLUE100 transition-all"/>
      </div>
    </CopyToClipboard>
  )
}

export default Coppy