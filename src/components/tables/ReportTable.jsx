import React, { useRef, useState } from 'react'
import { Space, Table, Input, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import Highlighter from 'react-highlight-words'
import propTypes from 'prop-types'

const ReportTable = ({ autoEvaluations }) => {
  const searchInput = useRef(null)
  const [searchText, setSearchText] = useState('')
  const [searchedColumn, setSearchedColumn] = useState('')

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm()
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
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) => {
      const nestedValue = dataIndex
        .split('.')
        .reduce((obj, key) => obj[key], record)
      return nestedValue
        ? nestedValue.toString().toLowerCase().includes(value.toLowerCase())
        : ''
    },
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

  // Calcular el porcentaje completado dentro de la función map
  const dataSource = autoEvaluations.evaluated.map((item, index) => ({
    ...item,
    number: index + 1,
    completedPercentage: (item.completed / item.total) * 100
  }))

  const columns = [
    {
      title: <div className="text-stone-700">#</div>,
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: <div className="text-stone-700">Identificación</div>,
      dataIndex: 'identification',
      key: 'identification',
      sorter: (a, b) => a.identification.localeCompare(b.identification),
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('identification', 'identificación')
    },
    {
      title: <div className="text-stone-700">Nombres</div>,
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('firstName', 'nombres')
    },
    {
      title: <div className="text-stone-700">Rol</div>,
      dataIndex: 'role',
      key: 'role',
      sorter: (a, b) => a.role.localeCompare(b.role),
      sortDirections: ['descend', 'ascend'],
      ...getColumnSearchProps('role', 'rol')
    },
    {
      title: <div className="text-stone-700">Total</div>,
      dataIndex: 'total',
      key: 'total'
    },
    {
      title: <div className="text-stone-700">Completado (%)</div>,
      dataIndex: 'completedPercentage',
      key: 'completedPercentage',
      sorter: (a, b) => a.completedPercentage - b.completedPercentage,
      sortDirections: ['descend', 'ascend']
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
        dataSource={dataSource}
      />
    </>
  )
}

export default ReportTable

ReportTable.propTypes = {
  autoEvaluations: propTypes.array.isRequired
}
