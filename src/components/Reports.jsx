import React from 'react'
import { useGetAutoEvaluations } from '../hooks/queries/useGetAutoEvaluation'
import { useParams } from 'react-router-dom'

import { Pie } from 'react-chartjs-2'
import ReportTable from './tables/ReportTable'

const Reports = () => {
  //const { year, semester } = useParams()
  const { data } = useGetAutoEvaluations('2023', 1)
  console.log('aca estoy')
  console.log(data)

  const barChartData = {
    labels: ['Categoría 1', 'Categoría 2', 'Categoría 3'],
    datasets: [
      {
        label: 'Puntuación',
        backgroundColor: ['#3490dc', '#38a169', '#f6e05e'],
        borderColor: ['#3182ce', '#4a5568', '#ecc94b'],
        borderWidth: 1,
        barChartData: [75, 90, 60]
      }
    ]
  }

  const opciones = {
    responsive: true
  }
  return (
    <div>
      <div className="pt-6 text-center">
        <div className="flex justify-between px-2 mb-2">
          <h1 className="font-semibold pt-1 md:pl-12 text-2xl text-stone-700">
            Docentes
          </h1>
        </div>
        <ReportTable autoEvaluations={data} />
      </div>

      <div className="pt-6 text-center">
        <div className="flex justify-between px-2 mb-2">
          <h1 className="font-semibold pt-1 md:pl-12 text-2xl text-stone-700">
            Cordinadores
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Reports
