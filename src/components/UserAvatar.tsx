import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { Menu } from '@headlessui/react'

const UserAvatar = () => {
  const { user } = useSelector( (state: RootState) =>  state.user)

  return (
    <div className="flex absolute bottom-8 right-8 table:bottom-10 tablet:right-10 flex-col items-end justify-end">
      <Menu>
          <Menu.Items>
            <div className="bg-white p-4 rounded-md m-2 shadow-md">
              <Menu.Item>
                <div>
                  <p className=" text-GREY100 font-semibold text-lg">{user.user_metadata.full_name}</p>
                  <p className=" text-GREY100 font-medium text-sm">{user.email}</p>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>

        <Menu.Button>
          <div className="w-20 h-20 cursor-pointer rounded-full border-white overflow-hidden border-2">
            <img referrerPolicy="no-referrer" className="w-full h-full" src={user.user_metadata.avatar_url || ""} alt={user?.user_metadata.full_name} /> 
          </div>
         </Menu.Button>
      </Menu>
    </div>
  )
}

export default UserAvatar