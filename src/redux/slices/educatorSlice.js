import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  educators: [],
  selectedLabours: [],
  selectedEducatorToEdit: ''
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
    },
    setSelectedLabours: (state, action) => {
      state.selectedLabours = action.payload
    },
    clearSelectedLabours: (state) => {
      state.selectedLabours = []
    },
    setSelectedEducatorToEdit: (state, action) => {
      state.selectedEducatorToEdit = action.payload
    }
  }
})

export const {
  setEducators,
  clearEducators,
  updateEducator,
  addEducator,
  setSelectedLabours,
  clearSelectedLabours,
  setSelectedEducatorToEdit
} = educatorSlice.actions

export default educatorSlice.reducer
