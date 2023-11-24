import { Routes, Route } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import React from 'react'
import PublicRoute from './PublicRoute'
import { useSelector } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import Dashboard from '../components/Dashboard'
import HomePage from '../components/HomePage'
import AutoEvaluation from '../components/AutoEvaluation'
import Labour from '../components/Labour'
import Period from '../components/Period'
import Docent from '../components/Docent'
import DocentInfo from '../components/DocentInfo'
import DocentRoute from './DocentRoute'
import NotFoundPage from '../components/NotFoundPage'
import AssignLabours from '../components/AssignLabourModal'
import CheckRole from './CheckRole'
import Reports from '../components/Reports'
import ManageAutoevaluation from '../components/ManageAutoEvaluation'

const Roles = {
  Coordinador: 'Coordinador',
  Decano: 'Decano',
  Docente: 'Docente'
}

const MainContent = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  const role = useSelector((state) => state.auth?.user?.role)

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
          path="autoevaluaciones"
          element={
            <CheckRole
              role={role}
              expectedRoles={[Roles.Docente]}
              element={<AutoEvaluation />}
            />
          }
        />
        <Route
          path="gestionar-autoevaluaciones"
          element={
            <CheckRole
              role={role}
              expectedRoles={[Roles.Coordinador, Roles.Decano]}
              element={<ManageAutoevaluation />}
            />
          }
        />
        <Route
          path="labores"
          element={
            <CheckRole
              role={role}
              expectedRoles={[Roles.Coordinador]}
              element={<Labour />}
            />
          }
        />
        <Route
          path="periodos"
          element={
            <CheckRole
              role={role}
              expectedRoles={[Roles.Coordinador]}
              element={<Period />}
            />
          }
        />
        <Route
          path="docentes"
          element={
            <CheckRole
              role={role}
              expectedRoles={[Roles.Coordinador, Roles.Decano]}
              element={<DocentRoute role={role} />}
            />
          }
        >
          <Route index element={<Docent />} />
          <Route path=":id" element={<DocentInfo />} />
          <Route path="asignar-labores" element={<AssignLabours />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route
          path="reportes"
          element={
            <CheckRole
              role={role}
              expectedRoles={[Roles.Decano]}
              element={<Reports />}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
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
    </Routes>
  )
}

export default MainContent
