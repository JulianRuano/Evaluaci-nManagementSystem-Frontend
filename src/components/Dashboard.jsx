import React, { Suspense } from 'react'
import Header from './shared/Header'
import ProSidebar from './shared/ProSidebar'
import { Outlet } from 'react-router-dom'
import { Skeleton } from 'antd'

const Dashboard = () => {
  const [toggled, setToggled] = React.useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header toggleSidebar={setToggled} />
      <div
        style={{ display: 'flex', flexGrow: 1 }}
        className="container mx-auto"
      >
        <ProSidebar toggled={toggled} setToggled={setToggled} />
        <div style={{ flexGrow: 1, overflow: 'auto' }}>
          <Suspense
            fallback={
              <div className="px-5 py-5">
                <Skeleton active />
                <br />
                <Skeleton active />
                <br />
                <Skeleton active />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
