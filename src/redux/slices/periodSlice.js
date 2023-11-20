import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  periods: []
}

const periodSlice = createSlice({
  name: 'periods',
  initialState,
  reducers: {
    setPeriods: (state, action) => {
      return { ...state, periods: action.payload }
    },
    clearPeriods: (state) => {
      return { ...state, periods: [] }
    },
    updatePeriod: (state, action) => {
      const { id, values } = action.payload
      const index = state.educators.findIndex((period) => period.uid === id)
      const newPeriods = [...state.periods]
      newPeriods[index] = { ...newPeriods[index], ...values }
      return { ...state, periods: newPeriods }
    },
    addPeriod: (state, action) => {
      state.periods = [...state.periods, action.payload]
    }
  }
})

export const { setPeriods, updatePeriod, addPeriod, clearPeriods } =
  periodSlice.actions

export default periodSlice.reducer
