import { configureStore } from '@reduxjs/toolkit'
import noteReducer from '../store/features/note/noteSlice'
import userReducer from '../store/features/user/userSlice'
import cardReducer from '../store/features/card/cardSlice'

export const store = configureStore({
  reducer: {
    note: noteReducer,
    user: userReducer,
    card: cardReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch