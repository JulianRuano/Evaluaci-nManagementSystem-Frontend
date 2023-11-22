import React from 'react'
import { Space, Table, Tag } from 'antd'
import propTypes from 'prop-types'
import { EditOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { setlabourTypeUidToEdit } from '../../redux/slices/labourSlice'

const LabourTable = ({ labours, setIsEditModalOpen }) => {
  const dispatch = useDispatch()
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
      title: 'Horas Asignadas',
      dataIndex: 'assignedHours',
      key: 'assignedHours'
    },
    {
      title: 'Estado',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (_, record) => (
        <Space size="middle">
          <a className="text-highlightColor">
            <Tag color={record.isActive ? 'green' : 'red'}>
              {record.isActive ? 'Activa' : 'Inactiva'}
            </Tag>
          </a>
        </Space>
      )
    },
    {
      dataIndex: '_id',
      key: '_id',
      className: 'hidden'
    },
    {
      title: 'Acciones',
      key: 'actions',
      width: 5,
      render: (_, record) => (
        <a
          className="text-highlightColor"
          onClick={() => {
            dispatch(setlabourTypeUidToEdit(record.uid))
            setIsEditModalOpen(true)
          }}
        >
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
  labours: propTypes.array.isRequired,
  setIsEditModalOpen: propTypes.func.isRequired
}
