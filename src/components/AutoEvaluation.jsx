import React from 'react'
import DocentAutoEvaluations from '../components/tables/DocentAutoEvaluations'

const autoevaluacionesMock = [
  // Simulacion datos de la autoevaluacion
  {
    _id: '1',
    labour: { nameWork: 'Nombre de Trabajo 1' },
    period: { semester: 'Semestre 1' },
    results: 'Resultado 1',
    date: '2023-01-01',
    puntuation: 85,
    state: 'En ejecución'
  }
]

const Autoevaluacion = () => {
  return (
    <div className="pt-4 px-3 text-center">
      <div className="flex justify-between px-4 container">
        <h1 className="font-semibold pt-1 text-3xl mb-4">Autoevaluaciones</h1>
      </div>
      <DocentAutoEvaluations autoevaluations={autoevaluacionesMock} />
    </div>
  )
}

export default Autoevaluacion
