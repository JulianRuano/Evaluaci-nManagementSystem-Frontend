import React from 'react'
import { Space, Table } from 'antd'
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { selectEducatorUid } from '../../redux/slices/educatorSlice'

const DocentTable = ({ data, setIsModalOpen }) => {
  const dispatch = useDispatch()
  const handleSelectEducator = async (uid) => {
    dispatch(selectEducatorUid(uid))
    setIsModalOpen(true)
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
          <a onClick={() => handleSelectEducator(record.uid)}>Ver docente</a>
        </Space>
      )
    }
  ]
  return <Table columns={columns} dataSource={data} />
}

export default DocentTable

DocentTable.propTypes = {
  data: propTypes.array.isRequired,
  setIsModalOpen: propTypes.func.isRequired
}
