import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedEducatorUid: null,
  educators: []
}

const educatorSlice = createSlice({
  name: 'educators',
  initialState,
  reducers: {
    selectEducatorUid: (state, action) => {
      state.selectedEducatorUid = action.payload
    },
    setEducators: (state, action) => {
      state.educators = action.payload
    }
  }
})

export const { selectEducatorUid, setEducators } = educatorSlice.actions

export default educatorSlice.reducer
