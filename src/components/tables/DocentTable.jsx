import React from 'react'
import { Space, Table } from 'antd'
import propTypes from 'prop-types'

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
        <a>Invite {record.firstName}</a>
        <a>Delete</a>
      </Space>
    )
  }
]

const DocentTable = ({ data }) => <Table columns={columns} dataSource={data} />
export default DocentTable

DocentTable.propTypes = {
  data: propTypes.array.isRequired
}
