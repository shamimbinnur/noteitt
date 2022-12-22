import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CardState {
  selectedCard: string | null | number
}

const initialState: CardState = {
  selectedCard: null
}

export const CardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setSelectedCard: (state, action: PayloadAction<string | null | number>) => {
      state.selectedCard = action.payload
    },
  },
})

export const { setSelectedCard } = CardSlice.actions

export default CardSlice.reducer