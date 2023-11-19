import React from 'react'
import { Space, Table } from 'antd'
import propTypes from 'prop-types'
import { EyeOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const DocentTable = ({ educators }) => {
  const navigate = useNavigate()
  const handleSelectEducator = async (uid) => {
    navigate(uid)
  }
  const columns = [
    {
      title: 'Nombres',
      dataIndex: 'firstName',
      key: 'firstName'
    },
    {
      title: 'Apellidos',
      dataIndex: 'lastName',
      key: 'lastName'
    },
    {
      title: 'Tipo ID',
      dataIndex: 'idType',
      key: 'idType'
    },
    {
      title: 'Identificación',
      dataIndex: 'identification',
      key: 'identification'
    },
    {
      title: 'Tipo docente',
      dataIndex: 'docentType',
      key: 'docentType'
    },
    {
      dataIndex: 'uid',
      key: 'uid',
      className: 'hidden'
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    },
    {
      title: 'Titulo',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Acciones',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <a
            onClick={() => handleSelectEducator(record.uid)}
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
      dataSource={educators}
    />
  )
}

export default DocentTable

DocentTable.propTypes = {
  educators: propTypes.array.isRequired
}
