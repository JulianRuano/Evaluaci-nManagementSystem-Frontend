import React from 'react'
import { DownOutlined } from '@ant-design/icons'
import { Dropdown, Space } from 'antd'
import { useSelector } from 'react-redux'
import propTypes from 'prop-types'

const Header = ({ toggleSidebar }) => {
  const userName = useSelector(
    (state) => state.auth?.user?.firstName || 'Usuario'
  )
  const items = [
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
      key: '0'
    },
    {
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
      key: '1'
    },
    {
      type: 'divider'
    },
    {
      label: '3rd menu item（disabled）',
      key: '3',
      disabled: true
    }
  ]
  return (
    <header className="bg-primary  py-4 z-50 px-5">
      <div className="container mx-auto flex justify-end items-center relative ">
        <i
          className="fa-solid fa-bars text-3xl   absolute cursor-pointer left-0 pl-1 text-white md:hidden"
          onClick={toggleSidebar}
        ></i>
        <nav>
          <ul className="flex space-x-4">
            <li className="flex items-center">
              <i className="fa-regular fa-bell text-xl text-highlightColor mr-5 cursor-pointer"></i>
              <i className="fa-solid fa-circle-user text-3xl mr-2 text-highlightColor"></i>
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
