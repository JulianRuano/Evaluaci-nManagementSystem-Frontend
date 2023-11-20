import React from 'react'
import { Table } from 'antd'
import propTypes from 'prop-types'
import { EditOutlined } from '@ant-design/icons'

const LabourTable = ({ labours }) => {
  const columns = [
    {
      title: 'Nombre de la Labor',
      dataIndex: 'nameWork',
      key: 'nameWork'
    },
    {
      title: 'Descripción',
      dataIndex: ['labourType', 'description'],
      key: 'description'
    },
    {
      title: 'ID de Labor',
      dataIndex: ['labourType', 'idLabourType'],
      key: 'idlabourType'
    },
    {
      title: 'Código de la Labor',
      dataIndex: ['labourType', 'code'],
      key: 'labourTypeCode'
    },

    {
      title: 'Horas Asignadas',
      dataIndex: 'assignedHours',
      key: 'assignedHours'
    },
    {
      title: 'Activo',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive) => (isActive ? 'Sí' : 'No')
    },
    {
      dataIndex: '_id',
      key: '_id',
      className: 'hidden'
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_, record) => (
        <a className="text-highlightColor">
          <EditOutlined /> Editar
        </a>
      )
    }
  ]
  return (
    <Table
      pagination={{
        position: ['topRight']
      }}
      columns={columns}
      dataSource={labours}
    />
  )
}

export default LabourTable
LabourTable.propTypes = {
  labours: propTypes.array.isRequired
}
