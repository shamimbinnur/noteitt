import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { PostgrestError } from '@supabase/supabase-js'

export interface Notes {
  title: string
  details: string
}

export interface NoteState {
  isNoteInitialized: boolean
  isLoading: boolean
  notes: Notes[]
  error: PostgrestError
}

const initialState: NoteState = {
  isNoteInitialized: false,
  isLoading: false,
  notes: [],
  error: null as unknown as PostgrestError
}

export const noteSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setNoteInitialized: (state, action: PayloadAction<boolean>) => {

      state.isNoteInitialized = action.payload

    },
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

export const { setNoteInitialized, setLoading, updateAllNotes, updateError } = noteSlice.actions;
export default noteSlice.reducer;