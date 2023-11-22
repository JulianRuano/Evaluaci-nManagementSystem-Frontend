import { Tag } from 'antd'
import React from 'react'
import propTypes from 'prop-types'

const RoleTag = ({ role }) => {
  const roles = {
    Coordinador: 'geekblue',
    Decano: 'red',
    Docente: 'green'
  }
  const color = roles[role]
  return <Tag color={color}>{role}</Tag>
}

export default RoleTag
RoleTag.propTypes = {
  role: propTypes.string.isRequired
}
