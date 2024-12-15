import React from 'react'
import uptrend from '../../asserts/Icons/uptrend.svg'
import downtrend from '../../asserts/Icons/downtrend.svg'
import { abbreviateNumber } from "js-abbreviation-number";

export const Total = ({ title, total, color, stat }) => {

  const num = Number(abbreviateNumber(stat.value));
  const percentage = num.toFixed(0)

  const handleTrend = () => {
    if(stat?.remark === 'increase') {
      return uptrend
    } else {
      return downtrend
    }
  }

  return (
    <div style={{background: color}} className='total-tile'>
        <p>{title}</p>
        <h1 className='text-3xl font-bold'>{total}</h1>
        <div className='flex items-center'>
            {
              stat?.remark ==='decrease' || stat?.remark === 'increase' ?  <div><img src={handleTrend()} alt="" /></div> : '_'
            }
            <span className={`${stat?.remark === 'increase' ? 'uptrend trend-percent' : stat?.remark === 'decrease' ? 'downtrend trend-percent' : 'trend-percent'}`} style={{marginLeft: '-10px'}}>{stat?.remark  ? percentage : 0}%</span>
        </div>
    </div>
  )
}
