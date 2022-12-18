import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store/store'
import { Menu } from '@headlessui/react'
import {IoMdLogOut } from 'react-icons/io'
import supabase from '../../config/supabaseClient'

const UserAvatar = () => {
  const { user } = useSelector( (state: RootState) =>  state.user);
  const handleLogout = async () => await supabase.auth.signOut();

  return (
    <div className="flex absolute bottom-8 right-8 table:bottom-10 tablet:right-10 flex-col items-end justify-end">
      <Menu>
          <Menu.Items>
            <div className="bg-white p-4 bg-gradient-to-b w-[15rem] from-CYAN10 to-GREY10 rounded-md mb-3 mr-6 shadow-md">
              <Menu.Item>
                <div>
                  <div className="border-l-4 border-opacity-60 border-PURPLE50 px-3">
                    <p className=" text-GREY100 font-semibold text-xl">{user?.user_metadata.full_name}</p>
                    <p className=" text-GREY100 font-medium text-xs">{user?.email}</p>
                  </div>

                  <div className="flex justify-end">
                    <button
                    onClick={handleLogout}
                    className="mt-8 flex gap-2 items-center text-sm font-bold text-white px-3 py-1 rounded-2xl bg-RED50 hover:bg-RED100 hover:scale-105 transition-all">
                      <IoMdLogOut/>
                      <p>Logout</p>
                    </button>
                  </div>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>

        <Menu.Button>
          <div className="w-20 h-20 cursor-pointer rounded-full border-white overflow-hidden border-2">
            <img referrerPolicy="no-referrer" className="w-full h-full" src={user?.user_metadata.avatar_url || ""} alt={user?.user_metadata.full_name} /> 
          </div>
         </Menu.Button>
      </Menu>
    </div>
  )
}

export default UserAvatar