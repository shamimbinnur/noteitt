import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSupabaseCRUD } from '../../hooks/useSupabaseCRUD'
import { RootState } from '../../store/store'

const CreateNote:FC = () => {

  const { user } = useSelector((state: RootState) => state.user)
  const { createNote } = useSupabaseCRUD()


  const info = {
        title: "hahah",
        details: "details",
      }

  return (
    <div>
      <button onClick={async()=> await createNote(info, user?.id as unknown as string) }>crate</button>

    </div>
  )
}

export default CreateNote