import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  autoEvaluations: [],
  periods: [],
  periodUidEdit: ''
}

const autoEvaluationSlice = createSlice({
  name: 'utoEvaluations',
  initialState,
  reducers: {
    setAutoevaluations: (state, action) => {
      state.autoEvaluations = action.payload
    },
    addPeriods: (state, action) => {
      state.periods = action.payload
    },
    addAutoEvaluations: (state, action) => {
      state.autoEvaluations = [...state.autoEvaluations, action.payload]
    },
    setPeriodUidToEdit: (state, action) => {
      state.periodUidEdit = action.payload
    },
    clearAutoEvaluations: (state) => {
      Object.keys(initialState).forEach((key) => {
        state[key] = initialState[key]
      })
    }
  }
})

export const {
  setAutoevaluations,
  clearAutoEvaluations,
  addPeriods,
  addAutoEvaluations,
  setPeriodUidToEdit
} = autoEvaluationSlice.actions

export default autoEvaluationSlice.reducer
