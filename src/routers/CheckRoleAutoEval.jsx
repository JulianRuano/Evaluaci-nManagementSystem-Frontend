import React from 'react'
import { PropTypes } from 'prop-types'
import AutoEvaluationDocent from '../components/AutoEvaluationDocent'
import Autoevaluacion from '../components/AutoEvaluation'

const CheckRoleAutoEval = ({ role }) => {
  if (role === 'Docente') {
    return <AutoEvaluationDocent />
  } else if (role === 'Coordinador') {
    return <Autoevaluacion />
  }
}

export default CheckRoleAutoEval
CheckRoleAutoEval.propTypes = {
  role: PropTypes.string.isRequired,
  expectedRoles: PropTypes.arrayOf(PropTypes.string).isRequired,
  element: PropTypes.element.isRequired
}
