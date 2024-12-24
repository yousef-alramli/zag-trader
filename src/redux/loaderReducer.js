import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
};

export const loadingSlice = createSlice({
  name: 'isLoading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer
