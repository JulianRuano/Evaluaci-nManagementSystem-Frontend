import { Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import React from 'react'
import Dashboard from '../components/coordinator/Dashboard'
import PublicRoute from './PublicRoute'
import { useSelector } from 'react-redux'
import PrivateRoute from './PrivateRoute'

const MainContent = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute
            element={<Dashboard />}
            isAuthenticated={isAuthenticated}
          />
        }
      />
      <Route
        path="/auth/login"
        element={
          <PublicRoute
            element={<LoginScreen />}
            isAuthenticated={isAuthenticated}
          />
        }
      />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  )
}
export default MainContent
