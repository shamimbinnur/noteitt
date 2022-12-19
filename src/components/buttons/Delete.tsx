import React from 'react'
import { Menu } from '@headlessui/react'
import { AiFillDelete } from 'react-icons/ai'
import { BiCheck, BiX } from 'react-icons/bi'

const Delete = () => {

  return (
    <div className="flex items-end justify-end relative">
      <Menu>
          <Menu.Items>
            <div className="absolute my-1 ml-1 px-1 py-1 flex gap-x-1 bg-white bg-gradient-to-b from-CYAN10 to-GREY10 rounded-md shadow-md">
                <Menu.Item>
                  <div className="w-6 h-6 flex items-center justify-center bg-red-400 text-white hover:bg-red-500 hover:scale-105 transition-all rounded-sm cursor-pointer">
                    <BiCheck/>
                  </div>
                </Menu.Item>
                <Menu.Item>
                  <div className="w-6 h-6 flex items-center justify-center bg-green-400 text-white hover:bg-green-500 hover:scale-105 transition-all rounded-sm cursor-pointer">
                    <BiX/>
                  </div>
                </Menu.Item>
            </div>
          </Menu.Items>

        <Menu.Button>
          <div className="bg-white w-7 h-7 p-1 rounded-full cursor-pointer group">
            <AiFillDelete  className=" w-full h-full text-RED50 group-hover:text-RED100 transition-all"/>
          </div>
         </Menu.Button>
      </Menu>
    </div>
  )
}

export default Delete