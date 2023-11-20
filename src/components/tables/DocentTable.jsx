import React, { useRef, useState } from 'react'
import { Space, Table, Input, Button } from 'antd'
import propTypes from 'prop-types'
import { EyeOutlined, SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import Highlighter from 'react-highlight-words'

const DocentTable = ({ educators }) => {
  const searchInput = useRef(null)
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    console.log(selectedKeys[0])
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }

  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText(undefined)
  }

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Buscar por ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
            className="bg-highlightColor text-white"
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current.select(), 100)
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      )
  })

  const navigate = useNavigate()
  const handleSelectEducator = async (uid) => {
    navigate(uid)
  }
  const columns = [
    {
      title: 'Nombres',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('Nombres')
    },
    {
      title: 'Apellidos',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('Apellidos')
    },
    {
      title: 'Tipo ID',
      dataIndex: 'idType',
      key: 'idType',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['descend', 'ascend']
    },
    {
      title: 'Identificación',
      dataIndex: 'identification',
      key: 'identification',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('Identificación')
    },
    {
      title: 'Tipo docente',
      dataIndex: 'docentType',
      key: 'docentType',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['descend', 'ascend']
    },
    {
      dataIndex: 'uid',
      key: 'uid',
      className: 'hidden'
    },
    {
      title: 'Titulo',
      dataIndex: 'title',
      key: 'title',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['descend', 'ascend']
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
  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }
  return (
    <Table
      locale={{
        triggerDesc: 'Orden descendente',
        triggerAsc: 'Orden ascendente',
        cancelSort: 'Desactivar orden'
      }}
      pagination={{
        position: ['topRight']
      }}
      columns={columns}
      dataSource={educators}
      onChange={onChange}
    />
  )
}

export default DocentTable

DocentTable.propTypes = {
  educators: propTypes.array.isRequired
}
