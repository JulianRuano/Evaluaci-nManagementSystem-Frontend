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

export default function BasicSpeedDial({
  showEditModal,
  showAssignLabourModal
}) {
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
      name: 'Autoevaluaciones'
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
  showAssignLabourModal: propTypes.func
}
