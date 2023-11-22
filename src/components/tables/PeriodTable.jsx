import React from 'react'
import { Space, Table } from 'antd'
import propTypes from 'prop-types'
import { EyeOutlined } from '@ant-design/icons'
// import { useNavigate } from 'react-router-dom'

const PeriodTable = ({ periods }) => {
  // const navigate = useNavigate()
  const columns = [
    {
      title: <div className="text-stone-700">Nombre</div>,
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: <div className="text-stone-700">Año</div>,
      dataIndex: 'year',
      key: 'year'
    },
    {
      title: <div className="text-stone-700">Semestre</div>,
      dataIndex: 'semester',
      key: 'semester'
    },
    {
      title: <div className="text-stone-700">Fecha inicio</div>,
      dataIndex: 'startDate',
      key: 'startDate'
    },
    {
      title: <div className="text-stone-700">Fecha fin</div>,
      dataIndex: 'endDate',
      key: 'endDate'
    },
    {
      dataIndex: 'uid',
      key: 'uid',
      className: 'hidden'
    },
    {
      title: <div className="text-stone-700">Acciones</div>,
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <a
            // onClick={() => handleSelectEducator(record.uid)}
            className="text-highlightColor"
          >
            <EyeOutlined /> Ver
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
      dataSource={periods}
    />
  )
}

export default PeriodTable

PeriodTable.propTypes = {
  periods: propTypes.array.isRequired
}
