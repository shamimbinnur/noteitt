import React, { FC } from 'react'
import { Menu } from '@headlessui/react'
import { BsGlobe } from 'react-icons/bs'
import Share from './Share'
import Coppy from './Coppy'

interface Props {
  noteUUID: string
  publicMode: boolean
}

const SharingOption:FC <Props> = ({ noteUUID, publicMode }) => {

  return (
    <div title="Share" className="flex items-end justify-end relative">
      <Menu>
        <Menu.Items>
          <div className="absolute my-1 ml-1 px-1 py-1 flex gap-x-1 bg-white bg-gradient-to-b from-CYAN10 to-GREY10 rounded-md shadow-md">
            <Menu.Item>
              <Share noteUUID={noteUUID} publicMode={publicMode} />
            </Menu.Item>
            <Menu.Item>
              <Coppy noteUUID={noteUUID}/>
            </Menu.Item>
          </div>
        </Menu.Items>

        <Menu.Button>
          <div className="bg-white w-7 h-7 p-1 rounded-full cursor-pointer group">
            <BsGlobe className={`w-full h-full group-hover:text-RED100 transition-all ${publicMode ? "text-orange-500 " : "text-BLUE50 "}`}/>
          </div>
         </Menu.Button>
      </Menu>
    </div>
  )
}

export default SharingOption