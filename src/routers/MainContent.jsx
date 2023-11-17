import { Routes, Route, Navigate } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import React from 'react'
import Dashboard from '../components/coordinator/Dashboard'
import PublicRoute from './PublicRoute'
import { useSelector } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import ConfigureAutoEvaluation from '../components/coordinator/ConfigureAutoEvaluation'
import ManageAcademicPeriod from '../components/coordinator/ManageAcademicPeriod'
import LaborManagement from '../components/coordinator/LaborManagement'
import ManageDocent from '../components/coordinator/ManageDocent'
import HomePage from '../components/HomePage'

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
      >
        <Route index element={<HomePage />} />
        <Route
          path="/gestionar-autoevaluaciones"
          element={<ConfigureAutoEvaluation />}
        />
        <Route path="/gestionar-labores" element={<LaborManagement />} />
        <Route path="/gestionar-periodos" element={<ManageAcademicPeriod />} />
        <Route path="/gestionar-docentes" element={<ManageDocent />} />
      </Route>
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
