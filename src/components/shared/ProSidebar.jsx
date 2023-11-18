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
import { NavLink } from 'react-router-dom'

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
    getItem(
      'Menú',
      'grp',
      null,
      [
        getItem(
          <NavLink to="docentes">Docentes</NavLink>,
          '13',
          <TeamOutlined />
        ),
        {
          type: 'divider'
        },
        getItem(
          <NavLink to="autoevaluaciones">Autoevaluaciones</NavLink>,
          '14',
          <AuditOutlined />
        ),
        {
          type: 'divider'
        },
        getItem(
          <NavLink to="labores">Labores</NavLink>,
          '15',
          <BookOutlined />
        ),
        {
          type: 'divider'
        },
        getItem(
          <NavLink to="periodos">Periodo académico</NavLink>,
          '16',
          <InsertRowBelowOutlined />
        )
      ],
      'group'
    ),
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
