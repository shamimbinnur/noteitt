import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const UserAvatar = () => {
    const { user } = useSelector( (state: RootState) =>  state.user)

    return (
        <div>
            <div className="w-20 h-20 rounded-full border-gray-500 overflow-hidden border-2">
                <img src={user?.user_metadata.avatar_url} alt={user?.user_metadata.full_name} />

            </div>
        </div>
    )
}

export default UserAvatar