import React, { useState } from 'react'
import { Select } from 'antd'
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setSelectedLabours } from '../redux/slices/educatorSlice'

const SelectLabourAutoEval = ({ data, setFieldValue }) => {
  const [selectedItems, setSelectedItems] = useState([])
  const dispatch = useDispatch()
  const handleChange = (value) => {
    setSelectedItems(value)
    // dispatch(setSelectedLabours(value))
    setFieldValue('labour', value)
    setFieldValue('labourName', 'ok')
  }

  return (
    <Select
      placeholder="Seleccione la labor"
      value={selectedItems}
      onChange={handleChange}
      style={{
        width: '100%'
      }}
      options={data.map((item) => ({
        value: item.uid,
        label: item.nameWork
      }))}
    />
  )
}

SelectLabourAutoEval.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      uid: propTypes.string.isRequired,
      namework: propTypes.string.isRequired
    })
  ).isRequired,
  setFieldValue: propTypes.func.isRequired
}

export default SelectLabourAutoEval
