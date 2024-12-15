import React from 'react'
import increase from '../../../asserts/Icons/increase.png'
import decrease from '../../../asserts/Icons/decrease.png'

const RatesCard = ({ title, price, percent, growth, titleColor, bgColor }) => {
  const style = {
    backgroundColor: `${bgColor}`
  }
  const titleStyle = {
    color: titleColor
  }

  const percentStyle = {
    fontSize: '10px',

  }

  return (
    <div className='rounded-lg p-2' style={style}>
      <div className='flex justify-between items-center' style={titleStyle}>
        <p className='text-xs' style={{fontSize: '10px'}}>{title}</p>
        <span className='cursor-pointer text-lg' style={{marginTop: '-10px'}}>...</span>
      </div>
      <div className='inline-flex items-baseline'>
        <h2 className='text-white'>₦{price}</h2>
        <small className='text-xs mx-1.5' style={{fontSize: '10px', color: growth === 'increase' ? '#1EA06A' : '#EB3D4D'}}>{percent}%</small>
        <img className='w-2' src={growth === 'increase' ? increase : decrease} alt="" />
      </div>
    </div>
  )
}

export default RatesCard
