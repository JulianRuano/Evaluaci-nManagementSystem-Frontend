import React, { useRef, useState } from 'react'
import { Space, Table, Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import Highlighter from 'react-highlight-words'
import propTypes from 'prop-types'

const ReportTable = ({ autoEvaluations }) => {
  const searchInput = useRef(null)
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')
  console.log('aca estoy gran hpta')
  console.log(autoEvaluations)
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
    console.log(selectedKeys[0])
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)
  }
  const handleReset = (clearFilters) => {
    clearFilters()
    setSearchText('')
  }
  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Buscar por ${title}`}
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
  /*
  const navigate = useNavigate()
  const handleSelectEducator = async (uid) => {
    navigate(uid)
  }*/
  const columns = [
    {
      title: <div className="text-stone-700">Identificación</div>,
      dataIndex: ['evaluated', 'identification'],
      key: 'identification',
      sorter: (a, b) => a.identification.localeCompare(b.identification),
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('identification', 'identificación')
    },
    {
      title: <div className="text-stone-700">Apellidos</div>,
      dataIndex: ['evaluated', 'firstName'],
      key: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('firstName', 'nombres')
    },
    {
      title: <div className="text-stone-700">Apellidos</div>,
      dataIndex: ['evaluated', 'lastName'],
      key: 'lastName',
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('lastName', 'apellidos')
    },
    {
      title: <div className="text-stone-700">Tipo ID</div>,
      dataIndex: 'idType',
      key: 'idType'
    },
    {
      title: <div className="text-stone-700">Tipo docente</div>,
      dataIndex: 'docentType',
      key: 'docentType'
    },
    {
      dataIndex: 'uid',
      key: 'uid',
      className: 'hidden'
    },
    {
      title: <div className="text-stone-700">Estado</div>,
      dataIndex: 'isActive',
      key: 'title'
    },
    {
      title: <div className="text-stone-700">Puntuacion</div>,
      dataIndex: 'puntuation',
      key: 'puntuation'
    }
  ]
  return (
    <>
      <Table
        locale={{
          triggerDesc: 'Orden descendente',
          triggerAsc: 'Orden ascendente',
          cancelSort: 'Desactivar orden'
        }}
        pagination={{
          position: ['bottomRight']
        }}
        columns={columns}
        dataSource={autoEvaluations}
      />
    </>
  )
}

export default ReportTable
ReportTable.propTypes = {
  autoEvaluations: propTypes.array.isRequired
}
