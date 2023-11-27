import React from 'react'
import { Space, Table, Tag } from 'antd'
import propTypes from 'prop-types'
import { EditOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import { setlabourTypeUidToEdit } from '../../redux/slices/labourSlice'

const LabourTable = ({
  labours,
  setIsEditModalOpen,
  canEdit = true,
  isPaginated = true
}) => {
  const dispatch = useDispatch()
  const columns = [
    {
      title: <div className="text-stone-700">Nombre</div>,
      dataIndex: 'nameWork',
      key: 'nameWork'
    },
    {
      title: <div className="text-stone-700">Descripción</div>,
      dataIndex: ['labourType', 'description'],
      key: 'description'
    },
    {
      title: <div className="text-stone-700">ID de Labor</div>,
      dataIndex: ['labourType', 'idLabourType'],
      key: 'idlabourType'
    },
    {
      title: <div className="text-stone-700">Código de Labor</div>,
      dataIndex: ['labourType', 'code'],
      key: 'labourTypeCode'
    },

    {
      title: <div className="text-stone-700">Horas Asignadas</div>,
      dataIndex: 'assignedHours',
      key: 'assignedHours'
    },
    {
      title: <div className="text-stone-700">Estado</div>,
      dataIndex: 'isActive',
      key: 'isActive',
      render: (_, record) => (
        <Space size="middle">
          <Tag color={record.isActive ? 'green' : 'red'}>
            {record.isActive ? 'Activa' : 'Inactiva'}
          </Tag>
        </Space>
      )
    },
    {
      dataIndex: '_id',
      key: '_id',
      className: 'hidden'
    }
  ]

  if (canEdit) {
    columns.push({
      title: <div className="text-stone-700">Acciones</div>,
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
    })
  }
  return (
    <Table
      pagination={isPaginated ? { position: ['topleft'] } : false}
      columns={columns}
      dataSource={labours}
    />
  )
}

export default LabourTable
LabourTable.propTypes = {
  labours: propTypes.array.isRequired,
  setIsEditModalOpen: propTypes.func,
  canEdit: propTypes.bool,
  isPaginated: propTypes.bool
}
