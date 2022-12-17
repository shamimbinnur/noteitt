import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { AuthUser } from '@supabase/supabase-js'

export interface UserState {
  user: AuthUser | null
  isLoading: boolean
}

const initialState: UserState = {
  user: null,
  isLoading: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    updateUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload
    },
    logout: (state) => {
        state.user = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, updateUser, logout } = userSlice.actions

export default userSlice.reducer