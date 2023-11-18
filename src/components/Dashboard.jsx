import React from 'react'
import Header from './shared/Header'
import ProSidebar from './shared/ProSidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  const [toggled, setToggled] = React.useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header toggleSidebar={setToggled} />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <ProSidebar toggled={toggled} setToggled={setToggled} />
        <div style={{ flexGrow: 1, overflow: 'auto' }}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
