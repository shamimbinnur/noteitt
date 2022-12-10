import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthUser } from '@supabase/supabase-js'

export interface UserState {
  user: AuthUser | null
}

const initialState: UserState = {
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload
    },
    logout: (state) => {
        state.user = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateUser, logout } = userSlice.actions

export default userSlice.reducer