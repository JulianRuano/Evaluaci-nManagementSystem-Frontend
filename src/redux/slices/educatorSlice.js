import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  educators: []
}

const educatorSlice = createSlice({
  name: 'educators',
  initialState,
  reducers: {
    setEducators: (state, action) => {
      return { ...state, educators: action.payload }
    },
    clearEducators: (state) => {
      return { ...state, educators: [] }
    },
    updateEducator: (state, action) => {
      const { id, values } = action.payload
      const index = state.educators.findIndex((docent) => docent.uid === id)
      const newEducators = [...state.educators]
      newEducators[index] = { ...newEducators[index], ...values }
      return { ...state, educators: newEducators }
    },
    addEducator: (state, action) => {
      state.educators = [...state.educators, action.payload]
    }
  }
})

export const { setEducators, clearEducators, updateEducator, addEducator } =
  educatorSlice.actions

export default educatorSlice.reducer
