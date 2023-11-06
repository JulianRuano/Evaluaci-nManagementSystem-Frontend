import { Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import React from 'react'
import Dashboard from '../components/coordinator/Dashboard'

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/auth/login" element={<LoginScreen />} />
      <Route path="*" element={<Navigate to="/auth/login" replace={true} />} />
    </Routes>
  )
}
export default MainContent
