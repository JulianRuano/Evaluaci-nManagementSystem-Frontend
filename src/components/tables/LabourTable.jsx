import React from 'react'
import { Table, Space } from 'antd'
import propTypes from 'prop-types'
import { StopOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'

const LabourTable = ({ labours }) => {
  const columns = [
    {
      title: 'Tipo de Trabajo',
      dataIndex: ['labourType', 'description'],
      key: 'labourType'
    },
    {
      title: 'ID de Trabajo',
      dataIndex: ['labourType', 'idlabourType'],
      key: 'idlabourType'
    },
    {
      title: 'Código de Trabajo',
      dataIndex: ['labourType', 'code'],
      key: 'code'
    },
    {
      title: 'Nombre del Trabajo',
      dataIndex: 'nameWork',
      key: 'nameWork'
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
        <Space size="middle">
          <a className="text-highlightColor">
            <StopOutlined /> Inactivar
          </a>
          <a className="text-highlightColor">
            <EditOutlined /> Editar
          </a>
          <a className="text-highlightColor">
            <DeleteOutlined /> Eliminar
          </a>
        </Space>
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
