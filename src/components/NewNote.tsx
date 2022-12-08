import React, { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import supabase from '../config/supabaseClient'
import { deleteNote } from '../utils/supabseCrudFunctions'

import { TiTick } from 'react-icons/ti'
import { AiFillDelete } from 'react-icons/ai'
import useDebounce from '../utils/useDebounce'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store/store'

const NewNote:FC = () => {

  return (
    <div>
    </div>
  )
}

export default NewNote