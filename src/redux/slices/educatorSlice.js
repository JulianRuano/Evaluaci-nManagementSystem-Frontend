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
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key]
      })
    },
    updateEducator: (state, action) => {
      const { id, data: values } = action.payload
      console.log('values', values)
      const index = state.educators.findIndex((docent) => docent.uid === id)
      console.log(index)
      if (index !== -1) {
        const newEducators = [...state.educators]
        newEducators[index] = values
        return { ...state, educators: newEducators }
      }

      // If no match is found, return the state as is
      return state
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
