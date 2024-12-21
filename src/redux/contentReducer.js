import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
};

export const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setContent } = contentSlice.actions

export default contentSlice.reducer

