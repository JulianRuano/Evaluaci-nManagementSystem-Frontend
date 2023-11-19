import React from 'react'
import { DownOutlined, BellOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import propTypes from 'prop-types'
import { startHandleLogout } from '../actions/auth'

const Header = ({ toggleSidebar }) => {
  const userName = useSelector(
    (state) => state.auth?.user?.firstName || 'Usuario'
  )
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(startHandleLogout())
  }
  const items = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          Mi perfil
        </a>
      ),
      key: '0'
    },
    {
      label: <p onClick={handleSignOut}>Cerrar sesión</p>,
      key: '1'
    },
    {
      type: 'divider'
    },
    {
      label: 'Opcion deshabilitada',
      key: '3',
      disabled: true
    }
  ]
  return (
    <header className="bg-indigo-500 text-white   py-4 z-50 px-5">
      <div className="container mx-auto flex justify-end items-center relative ">
        <i
          className="fa-solid fa-bars text-3xl   absolute cursor-pointer left-0 pl-1 text-white md:hidden"
          onClick={() => toggleSidebar((prev) => !prev)}
        ></i>
        <nav>
          <ul className="flex space-x-4">
            <li className="flex items-center">
              <BellOutlined className="text-2xl mr-4 cursor-pointer" />
              <i className="fa-solid fa-circle-user text-3xl mr-2 text-white"></i>
              <Dropdown
                menu={{
                  items
                }}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    <p className="text-sm cursor-default">{userName}</p>
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

Header.propTypes = {
  toggleSidebar: propTypes.func
}
