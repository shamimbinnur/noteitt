import React, { FC } from 'react'
import { Menu } from '@headlessui/react'
import { AiFillDelete } from 'react-icons/ai'
import { useSupabaseCRUD } from '../../hooks/useSupabaseCRUD'

interface Props {
  noteUUID: string
}

const Delete:FC <Props> = ({ noteUUID }) => {
  const { deleteNote } = useSupabaseCRUD()

  return (
    <div title="Delete" className="flex items-end justify-end relative">
      <Menu>
        <Menu.Items>
          <div className="absolute my-1 ml-1 px-1 py-1 flex gap-x-1 bg-white bg-gradient-to-b from-CYAN10 to-GREY10 rounded-md shadow-md">
            <Menu.Item>
              <div onClick={async()=> await deleteNote(noteUUID)} className="h-6 px-1 flex text-xs items-center justify-center bg-red-400 text-white hover:bg-red-500 hover:scale-105 transition-all rounded-sm cursor-pointer">
                <p>Yes</p>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className="h-6 px-1 text-xs flex items-center justify-center bg-green-400 text-white hover:bg-green-500 hover:scale-105 transition-all rounded-sm cursor-pointer">
                <p>No</p>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>

        <Menu.Button>
          <div className="bg-white w-7 h-7 p-1 rounded-full cursor-pointer group">
            <AiFillDelete className=" w-full h-full text-RED50 group-hover:text-RED100 transition-all"/>
          </div>
         </Menu.Button>
      </Menu>
    </div>
  )
}

export default Delete