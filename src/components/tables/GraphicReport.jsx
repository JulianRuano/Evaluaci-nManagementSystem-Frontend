import React from 'react'
import PropTypes from 'prop-types'
import { Pie } from 'react-chartjs-2'
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'
import 'chartjs-plugin-datalabels'

Chart.register(ArcElement, Tooltip, Legend)

const GraphicReport = ({ autoEvaluations }) => {
  const pieChartData = {
    labels: ['Completado', 'Faltante'],
    datasets: [
      {
        backgroundColor: ['#3490dc', '#FFC300'],
        data: [
          autoEvaluations.percentageCompleted,
          100 - autoEvaluations.percentageCompleted
        ],
        borderColor: ['#6CA8DD ', ' #F9C402 ']
      }
    ]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right'
      },
      datalabels: {
        display: true,
        color: 'white',
        formatter: (value, context) => {
          return context.dataset.label[context.dataIndex]
        }
      }
    }
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '500px',
          height: '500px',
          margin: 'auto'
        }}
      >
        <Pie data={pieChartData} options={options} />
      </div>
    </div>
  )
}

GraphicReport.propTypes = {
  autoEvaluations: PropTypes.array.isRequired
}

export default GraphicReport
