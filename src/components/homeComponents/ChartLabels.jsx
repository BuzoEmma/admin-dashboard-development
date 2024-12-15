import React from 'react'

const ChartLabels = ({ title, color, total}) => {
  return (
    <div className="label-container">
        <div className='chart-label'>
            <div className='chart-label-color' style={{backgroundColor: color, color: color}}>text</div>
            <div className='chart-label-data'>
                <p>{title}</p>
                <p>{total}</p>
            </div>
        </div>
    </div>
  )
}

export default ChartLabels