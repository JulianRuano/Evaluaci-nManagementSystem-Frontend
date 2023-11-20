import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  labours: [],
  labourTypes: []
}

const labourSlice = createSlice({
  name: 'labours',
  initialState,
  reducers: {
    setLabours: (state, action) => {
      state.labours = [...state.labours, action.payload]
    },
    addLabourTypes: (state, action) => {
      state.labourTypes = [...state.labourTypes, action.payload]
    },
    addLabour: (state, action) => {
      state.labours = [...state.labours, action.payload]
    },
    clearLabourState: (state) => {
      state.labours = []
      state.labourTypes = []
    }
  }
})

export const { setLabours, clearLabourState, addLabourTypes, addLabour } =
  labourSlice.actions

export default labourSlice.reducer
