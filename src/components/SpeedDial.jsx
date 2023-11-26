import * as React from 'react'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'

import {
  EditOutlined,
  FileTextOutlined,
  FormOutlined,
  FundOutlined
} from '@ant-design/icons'
import propTypes from 'prop-types'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function BasicSpeedDial({
  showEditModal,
  showAssignLabourModal,
  showAssignAutoEvalModal
}) {
  const { id } = useParams()
  const notifyError = (message) =>
    toast.error(message, {
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: true,
      pauseOnHover: false
    })

  const hasLabours = useSelector((state) =>
    state.educators.educators.find((e) => e.uid === id)
  ).labours
  const handleClickAssignAutoEval = () => {
    console.log('labores', hasLabours)
    if (hasLabours.length === 0) {
      notifyError('El docente no tiene labores asignadas')
      return
    }

    showAssignAutoEvalModal()
  }
  const actions = [
    {
      icon: <FileTextOutlined />,
      name: 'Labores',
      onClick: () => showAssignLabourModal()
    },
    {
      icon: <FormOutlined />,
      name: 'Editar',
      onClick: () => showEditModal()
    },
    {
      icon: <FundOutlined />,
      name: 'Asignar Autoevaluacion',
      onClick: () => handleClickAssignAutoEval()
    }
  ]
  return (
    <SpeedDial
      ariaLabel="SpeedDial basic example"
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 26,
        zIndex: 1,
        '@media (min-width:1750px)': {
          right: 'calc(50% - 350px)',
          bottom: 'calc(70% - 20px)'
        }
      }}
      icon={
        <EditOutlined
          style={{
            fontSize: '2rem',
            color: 'white'
          }}
        />
      }
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipOpen
          tooltipTitle={action.name}
          onClick={action.onClick}
        />
      ))}
    </SpeedDial>
  )
}

BasicSpeedDial.propTypes = {
  showEditModal: propTypes.func,
  showAssignLabourModal: propTypes.func,
  showAssignAutoEvalModal: propTypes.func
}
