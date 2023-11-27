import React, { useState } from 'react'
import { Select } from 'antd'
import propTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedLabours } from '../redux/slices/educatorSlice'
import { useParams } from 'react-router-dom'

const SelectLaboursInput = ({ data, setFieldValue, initialSelectedItems }) => {
  const [selectedItems, setSelectedItems] = useState(initialSelectedItems || [])
  const params = useParams()
  const { id } = params
  const laboursAutoEval = useSelector((state) =>
    state.educators.educators
      .find((e) => e.uid === id)
      .autoEvaluations.map((autoEval) => autoEval.labour.uid)
  )
  console.log(laboursAutoEval)
  const dispatch = useDispatch()
  const handleChange = (value) => {
    setSelectedItems(value)
    dispatch(setSelectedLabours(value))
    setFieldValue('labours', value)
  }
  console.log(initialSelectedItems)
  return (
    <Select
      mode="multiple"
      placeholder="Seleccione las labores"
      value={selectedItems}
      onChange={handleChange}
      style={{
        width: '100%'
      }}
      maxTagCount="responsive"
      options={data.map((item) => ({
        value: item.uid,
        label: item.nameWork,
        disabled: laboursAutoEval.includes(item.uid)
      }))}
    />
  )
}

SelectLaboursInput.propTypes = {
  data: propTypes.arrayOf(
    propTypes.shape({
      uid: propTypes.string.isRequired,
      namework: propTypes.string.isRequired
    })
  ).isRequired,
  setFieldValue: propTypes.func.isRequired,
  initialSelectedItems: propTypes.arrayOf(propTypes.string)
}

export default SelectLaboursInput
