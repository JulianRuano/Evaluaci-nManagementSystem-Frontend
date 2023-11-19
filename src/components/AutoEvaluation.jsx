import React, { useState } from 'react'
import { EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Modal } from 'antd'

const AutoEvaluation = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedAction, setSelectedAction] = useState('')

  const handleActionChange = (action) => {
    setSelectedAction(action)
    if (action === 'realizar-autoevaluacion') {
      setIsModalVisible(true)
    } else if (action === 'ver-autoevaluacion') {
      setIsModalVisible(true)
    }
  }

  const handleModalOk = () => {
    setIsModalVisible(false)
    setSelectedAction('')
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    setSelectedAction('')
  }

  return (
    <div className="container mx-auto p-4 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-indigo-700">
        Autoevaluación
      </h2>
      <table className="mx-auto border-collapse w-full">
        <thead>
          <tr>
            <th className="p-2 w-1/8">#</th>
            <th className="p-2 w-1/8">Labor</th>
            <th className="p-2 w-1/8">Periodo</th>
            <th className="p-2 w-1/8">Resultado</th>
            <th className="p-2 w-1/8">Fecha</th>
            <th className="p-2 w-1/8">Puntuación</th>
            <th className="p-2 w-1/8">Estado</th>
            <th className="p-2 w-1/8">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">
              <EditOutlined />
            </td>
            <td className="p-2">
              <EyeOutlined />
            </td>
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2 flex items-center justify-center">
              <select
                onChange={(e) => handleActionChange(e.target.value)}
                className="p-1 rounded-md"
                value={selectedAction}
              >
                <option value="" disabled>
                  Elegir Acción
                </option>
                <option value="realizar-autoevaluacion">
                  Realizar Autoevaluación
                </option>
                <option value="ver-autoevaluacion">Ver Autoevaluación</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Modal para "Realizar Autoevaluación" o "Ver Autoevaluación" */}
      <Modal
        title={
          selectedAction === 'realizar-autoevaluacion'
            ? 'Realizar Autoevaluación'
            : selectedAction === 'ver-autoevaluacion'
            ? 'Ver Autoevaluación'
            : 'Elegir Acción'
        }
        visible={isModalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okButtonProps={{ style: { background: '#1890ff', color: '#fff' } }}
        okText={selectedAction === 'ver-autoevaluacion' ? 'Volver' : 'Agregar'}
        cancelButtonProps={{
          style: {
            display:
              selectedAction === 'ver-autoevaluacion' ? 'none' : 'inline-block'
          },
          children: 'Atrás'
        }}
      >
        {/* Contenido del formulario o componente para realizar/ver autoevaluación */}

        <p>
          {selectedAction === 'realizar-autoevaluacion'
            ? 'Contenido del formulario para realizar autoevaluación...'
            : selectedAction === 'ver-autoevaluacion'
            ? 'Contenido para ver la autoevaluación...'
            : 'Selecciona una acción para continuar...'}
        </p>
      </Modal>
    </div>
  )
}

export default AutoEvaluation
