import React, { FC } from 'react'
import { Menu } from '@headlessui/react'
import { IoMdColorPalette } from 'react-icons/io'
import { useSupabaseCRUD } from '../../hooks/useSupabaseCRUD'

interface Props {
  noteUUID: string
}

const Color:FC<Props> = ({ noteUUID }) => {

  const { setNoteColor } = useSupabaseCRUD();

  const colors = [
    {
      text: "blue",
      colorCode: "bg-BLUE50"
    },
    {
      text: "purple",
      colorCode: "bg-PURPLE100"
    },
    {
      text: "orange",
      colorCode: "bg-orange-400"
    },
    {
      text: "cyan",
      colorCode: "bg-CYAN100"
    },
  ]

  const handleClick = async (noteUUID: string, color: string) => {
    await setNoteColor(noteUUID, color);
  }

  return (
    <div title="Colors" className="flex items-end justify-end relative">
      <Menu>
        <Menu.Items>
          <div className="absolute my-1 ml-2 p-1 flex gap-x-1 bg-white bg-gradient-to-b from-CYAN10 to-GREY10 rounded-md shadow-md">
            {colors.map (color => (
              <div key={color.text}>
                <Menu.Item>
                  <div onClick={async() => handleClick(noteUUID, color.text)} className={`w-6 h-6 hover:scale-105 transition-all rounded-sm cursor-pointer ${color.colorCode}`}>
                  </div>
                </Menu.Item>
              </div>
            ))
            }
          </div>
        </Menu.Items>

        <Menu.Button>
          <div className="bg-white w-7 h-7 p-1 rounded-full cursor-pointer group">
            <IoMdColorPalette className="w-full h-full text-green-400 group-hover:text-cyan-600 transition-all"/>
          </div>
         </Menu.Button>
      </Menu>
    </div>
  )
}

export default Color