import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  educators: []
}

const educatorSlice = createSlice({
  name: 'educators',
  initialState,
  reducers: {
    setEducators: (state, action) => {
      state.educators = action.payload
    },
    clearEducators: (state) => {
      state.educators = []
    }
  }
})

export const { setEducators, clearEducators } = educatorSlice.actions

export default educatorSlice.reducer
