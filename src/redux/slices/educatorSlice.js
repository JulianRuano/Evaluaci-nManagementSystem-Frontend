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
    }
  }
})

export const { setEducators } = educatorSlice.actions

export default educatorSlice.reducer
