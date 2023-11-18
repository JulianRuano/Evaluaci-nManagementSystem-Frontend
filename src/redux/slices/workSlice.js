import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  educators: []
}

const educatorSlice = createSlice({
  name: 'educators',
  initialState,
  reducers: {
    addEducators: (state, action) => {
      state.educators = [...state.educators, action.payload]
    }
  }
})

export const { addEducators } = educatorSlice.actions

export default educatorSlice.reducer
