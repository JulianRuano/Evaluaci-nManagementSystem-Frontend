import { Tag } from 'antd'
import React from 'react'
import propTypes from 'prop-types'

const RecordTag = ({ record }) => {
  const statusMapping = {
    'En ejecución': { color: 'yellow', text: 'En ejecución' },
    Terminado: { color: 'green', text: 'Terminado' },
    Suspendido: { color: 'red', text: 'Suspendido' }
  }

  const { color, text } = statusMapping[record.state]

  return <Tag color={color}>{text}</Tag>
}

export default RecordTag

RecordTag.propTypes = {
  record: propTypes.object
}
