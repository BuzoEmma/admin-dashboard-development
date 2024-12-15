import React from 'react'
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const PieChart = ({ chartData, chartOptions }) => {
  return (
    <div >
      <Pie data={chartData} options={chartOptions} />
    </div>

  )
}

export default PieChart