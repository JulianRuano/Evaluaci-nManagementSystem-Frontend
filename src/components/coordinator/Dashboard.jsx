import React from 'react'
import Sidebar from '../shared/Sidebar'
import Header from '../shared/Header'
import useSidebar from '../../hooks/sidebar/useSidebar'

const Dashboard = () => {
  const { toggleSidebar, isSidebarVisible } = useSidebar()
  return (
    <div>
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isSidebarVisible={isSidebarVisible} />
    </div>
  )
}

export default Dashboard
