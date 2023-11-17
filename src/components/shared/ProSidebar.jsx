import React from 'react'
import { Sidebar } from 'react-pro-sidebar'
import propTypes from 'prop-types'

import {
  BookOutlined,
  AuditOutlined,
  SettingOutlined,
  TeamOutlined,
  InsertRowBelowOutlined
} from '@ant-design/icons'
import { Menu } from 'antd'

const ProSidebar = ({ toggled, setToggled }) => {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type
    }
  }
  const items = [
    getItem('Docentes', 'sub1', <TeamOutlined />, [
      getItem('Crear docente', '1'),
      getItem('Editar docente', '2'),
      getItem('Consultar docente', '3'),
      getItem('Inactivar docente', '2')
    ]),
    {
      type: 'divider'
    },
    getItem('Autoevaluaciones', 'sub2', <AuditOutlined />, [
      getItem('Configurar autoevaluación', '4'),
      getItem('Asignar autoevaluación', '5'),
      getItem('Revisar autoevaluaciones', '6'),
      getItem('Notificar a docentes', '7'),
      getItem('Reportes de autoevaluaciones:', '8')
    ]),
    {
      type: 'divider'
    },
    getItem('Labores', 'sub3', <BookOutlined />, [
      getItem('Crear labor ', '9'),
      getItem('Editar labor', '10'),
      getItem('Consultar labor ', '11'),
      getItem('Inactivar labor', '12')
    ]),
    {
      type: 'divider'
    },
    getItem('Periodo académico', 'sub4', <InsertRowBelowOutlined />, [
      getItem('Crear periodo académico ', '13'),
      getItem('Editar periodo académico', '14'),
      getItem('Consultar periodo académico', '15')
    ]),
    {
      type: 'divider'
    },
    getItem('Configuración', 'sub5', <SettingOutlined />, [
      getItem('Cambiar contraseña', '16'),
      getItem('Cambiar correo electrónico', '17'),
      getItem('Subir foto de perfil', '18')
    ])
  ]

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        minHeight: 'calc(100vh - 68px)'
      }}
    >
      <Sidebar
        backgroundColor="#FFFFFF"
        onBackdropClick={() => setToggled(false)}
        toggled={toggled}
        breakPoint="md"
        rootStyles={{
          color: 'white'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px'
          }}
        ></div>

        <Menu
          style={{
            width: 256,
            minHeight: '100vh'
          }}
          mode="inline"
          items={items}
        />
      </Sidebar>
    </div>
  )
}
export default ProSidebar
ProSidebar.propTypes = {
  toggled: propTypes.bool,
  setToggled: propTypes.func
}
