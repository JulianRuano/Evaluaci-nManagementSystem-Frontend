import React from 'react'
import { DownOutlined, BellOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import propTypes from 'prop-types'
import { startHandleLogout } from '../actions/auth'
import RoleTag from './RoleTag'
import { useQueryClient } from '@tanstack/react-query'

const Header = ({ toggleSidebar }) => {
  const queryClient = useQueryClient()
  const userName = useSelector(
    (state) => state.auth?.user?.firstName || 'Usuario'
  )
  const role = useSelector((state) => state.auth.user.role)

  const dispatch = useDispatch()

  const handleSignOut = async () => {
    await dispatch(startHandleLogout())
    queryClient.removeQueries()
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
      label: (
        <p
          onClick={() => {
            handleSignOut()
          }}
        >
          Cerrar sesión
        </p>
      ),
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
    <header className="bg-indigo-500 text-white   pb-4 z-50 px-5">
      <div className="container mx-auto flex justify-end items-center relative ">
        <i
          className="fa-solid fa-bars text-3xl pt-3  absolute cursor-pointer left-0 pl-1 text-white lg:hidden"
          onClick={() => toggleSidebar((prev) => !prev)}
        ></i>
        <nav>
          <ul className="flex space-x-4">
            <li className="flex items-center">
              <BellOutlined className="text-2xl mr-4 cursor-pointer" />
              <i className="fa-solid fa-circle-user text-3xl mr-2 text-white"></i>
              <div className="flex flex-col mt-6">
                <div className="">
                  <Dropdown
                    menu={{
                      items
                    }}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      <p className="text-sm cursor-default">
                        {userName} <DownOutlined />
                      </p>
                    </a>
                  </Dropdown>
                </div>

                <div>
                  <RoleTag role={role} />
                </div>
              </div>
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
