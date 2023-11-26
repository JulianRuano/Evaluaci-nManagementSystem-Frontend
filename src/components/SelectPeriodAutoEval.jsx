import React, { useState } from 'react'
import { Select } from 'antd'
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setSelectedLabours } from '../redux/slices/educatorSlice'
import { format } from 'date-fns'

const SelectPeriodAutoEval = ({ data, setFieldValue, periods }) => {
  const dispatch = useDispatch()
  const handleChange = (value) => {
    setFieldValue('periodId', value)
    setFieldValue('periodName', 'ok')

    const period = periods.find((period) => period.id === value)
    console.log(period)

    setFieldValue('year', period.year)
    setFieldValue('semester', period.semester)
    setFieldValue('startDate', format(new Date(period.startDate), 'dd/MM/yyyy'))
    setFieldValue('endDate', format(new Date(period.endDate), 'dd/MM/yyyy'))
  }

  return (
    <Select
      placeholder="Seleccione el periodo"
      onChange={handleChange}
      style={{
        width: '100%'
      }}
      options={data.map((item) => ({
        value: item.id,
        label: item.name
      }))}
    />
  )
}

SelectPeriodAutoEval.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired
    })
  ).isRequired,
  periods: propTypes.array,

  setFieldValue: propTypes.func.isRequired
}

export default SelectPeriodAutoEval
