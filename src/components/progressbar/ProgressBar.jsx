import React from 'react'
import './progressbar.scss'

const ProgressBar = ({ percent, height, containerColor, fillColor }) => {
  const containerStyle = {
    height: height,
    backgroundColor: containerColor
  }

  const fillStyle = {
    backgroundColor: fillColor,
    'width': `${percent}%`
  }
  return (
    <div className='progress-container' style={containerStyle}>
        <div className='progress-percentage' style={fillStyle}>
        </div>
    </div>
  )
}

export default ProgressBar