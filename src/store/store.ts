import { configureStore } from '@reduxjs/toolkit'
import noteReducer from '../store/features/note/noteSlice'
import userReducer from '../store/features/user/userSlice'

export const store = configureStore({
  reducer: {
    note: noteReducer,
    user: userReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch