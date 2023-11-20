import React from 'react'
import { Space, Table } from 'antd'
import propTypes from 'prop-types'
import { EyeOutlined } from '@ant-design/icons'
// import { useNavigate } from 'react-router-dom'

const PeriodTable = ({ periods }) => {
  // const navigate = useNavigate()
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Año',
      dataIndex: 'year',
      key: 'year'
    },
    {
      title: 'Semestre',
      dataIndex: 'semester',
      key: 'semester'
    },
    {
      title: 'Fecha de inicio',
      dataIndex: 'startDate',
      key: 'startDate'
    },
    {
      title: 'Fecha de fin',
      dataIndex: 'endDate',
      key: 'endDate'
    },
    {
      dataIndex: 'uid',
      key: 'uid',
      className: 'hidden'
    },
    {
      title: 'Acciones',
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
