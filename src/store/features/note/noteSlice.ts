import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PostgrestError } from '@supabase/supabase-js'

export interface Notes {
  title: string
  details: string
}

export interface NoteState {
  isLoading: boolean
  notes: Notes[]
  error: PostgrestError
}

const initialState: NoteState = {
  isLoading: false,
  notes: [],
  error: null as unknown as PostgrestError,
}

export const noteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    updateAllNotes: (state, action: PayloadAction<Notes[]>) => {
      state.notes = action.payload
    },
    updateError: (state, action: PayloadAction<PostgrestError>) => {
      state.error = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLoading, updateAllNotes, updateError } = noteSlice.actions

export default noteSlice.reducer