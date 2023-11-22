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
    <div className="pt-6  text-center">
      <div className="flex justify-between px-2 mb-2  md:pl-12">
        <h1 className="font-semibold pt-1 text-3xl">Autoevaluaciones</h1>

        <button className="  max-w-xs  bg-indigo-500 hover:bg-indigo-700  text-white rounded-lg px-2 py-2 md:mr-20 font-semibold">
          Crear nueva
        </button>
      </div>
      <DocentAutoEvaluations autoevaluations={autoevaluacionesMock} />
    </div>
  )
}

export default Autoevaluacion
