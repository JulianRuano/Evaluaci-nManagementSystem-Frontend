import { Table, Space, Modal, Tag } from 'antd'
import PropTypes from 'prop-types'
import { EyeOutlined } from '@ant-design/icons'
import React, { useState } from 'react'

const DocentAutoEvaluations = ({ autoevaluations }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedAutoevaluation, setSelectedAutoevaluation] = useState(null)

  const showModal = (record) => {
    setSelectedAutoevaluation(record)
    setIsModalOpen(true)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const columns = [
    {
      title: <div className="text-stone-700">Labor</div>,
      dataIndex: ['labour', 'nameWork'],
      key: 'nameWork'
    },
    {
      title: <div className="text-stone-700">Periodo</div>,
      dataIndex: ['period', 'semester'],
      key: 'semester'
    },
    {
      title: <div className="text-stone-700">Resultado</div>,
      dataIndex: 'results',
      key: 'results'
    },
    {
      title: <div className="text-stone-700">Fecha</div>,
      dataIndex: 'date',
      key: 'date'
    },
    {
      title: <div className="text-stone-700">Puntuación</div>,
      dataIndex: 'puntuation',
      key: 'puntuation'
    },
    {
      title: <div className="text-stone-700">Estado</div>,
      key: 'state',
      render: (_, record) => (
        <Space size="middle">
          <a className="text-highlightColor">
            <Tag color="green">En ejecución</Tag>
          </a>
        </Space>
      )
    },
    {
      title: <div className="text-stone-700">Acciones</div>,
      key: 'acciones',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => showModal(record)} className="text-highlightColor">
            <EyeOutlined /> Ver
          </a>
        </Space>
      )
    }
  ]

  return (
    <>
      <Table
        columns={columns}
        dataSource={autoevaluations}
        pagination={{
          position: ['topRight']
        }}
      />

      {/* Modal para mostrar la información detallada */}
      <Modal
        title="Detalles de la Autoevaluación"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        {selectedAutoevaluation && (
          // Renderizar detalles de la autoevaluación aquí
          <div>
            <p>Labor: {selectedAutoevaluation.labour.nameWork}</p>
            <p>Periodo: {selectedAutoevaluation.period.semester}</p>
            {/* Agregar más detalles según sea necesario */}
          </div>
        )}
      </Modal>
    </>
  )
}

DocentAutoEvaluations.propTypes = {
  autoevaluations: PropTypes.array.isRequired
}

export default DocentAutoEvaluations
