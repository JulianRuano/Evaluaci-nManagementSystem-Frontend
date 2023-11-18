import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'
import MainContent from './MainContent'

const AppRouter = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  )
}

export default AppRouter
