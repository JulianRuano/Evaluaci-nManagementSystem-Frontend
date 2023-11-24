import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  labours: [],
  labourTypes: [],
  labourTypeUidToEdit: ''
}

const labourSlice = createSlice({
  name: 'labours',
  initialState,
  reducers: {
    setLabours: (state, action) => {
      state.labours = action.payload
    },
    addLabourTypes: (state, action) => {
      state.labourTypes = action.payload
    },
    addLabour: (state, action) => {
      state.labours = [...state.labours, action.payload]
    },
    setlabourTypeUidToEdit: (state, action) => {
      state.labourTypeUidToEdit = action.payload
    },
    clearLabourState: (state) => {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key]
      })
    }
  }
})

export const {
  setLabours,
  clearLabourState,
  addLabourTypes,
  addLabour,
  setlabourTypeUidToEdit
} = labourSlice.actions

export default labourSlice.reducer
