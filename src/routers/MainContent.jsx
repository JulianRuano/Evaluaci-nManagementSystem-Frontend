import { Routes, Route } from 'react-router-dom'
import LoginScreen from '../components/auth/LoginScreen'
import React, { lazy, startTransition } from 'react'
import PublicRoute from './PublicRoute'
import { useSelector } from 'react-redux'

import PrivateRoute from './PrivateRoute'
import Dashboard from '../components/Dashboard'
import HomePage from '../components/HomePage'
import AutoEvaluation from '../components/AutoEvaluation'
import Period from '../components/Period'
import DocentInfo from '../components/DocentInfo'
import NotFoundPage from '../components/NotFoundPage'
import CheckRole from './CheckRole'
import DocentRoute from './DocentRoute'
import AutoEvaluationInfo from '../components/AutoEvaluationInfo'
import CheckRoleAutoEval from './CheckRoleAutoEval'

const Roles = {
  Coordinador: 'Coordinador',
  Decano: 'Decano',
  Docente: 'Docente'
}
const Labour = lazy(() => import('../components/Labour'))
const Reports = lazy(() => import('../components/Reports'))
const Docent = lazy(() => import('../components/Docent'))
const AssignLabours = lazy(() => import('../components/AssignLabourModal'))

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
          element={<CheckRoleAutoEval role={role} />}
        />
        <Route
          path="autoevaluaciones/:id"
          element={
            <CheckRole
              role={role}
              expectedRoles={[Roles.Docente, Roles.Coordinador]}
              element={<AutoEvaluationInfo />}
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
