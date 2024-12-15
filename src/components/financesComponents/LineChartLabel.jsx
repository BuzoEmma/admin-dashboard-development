import React from 'react'
import increase from '../../asserts/Icons/increase.png'
import decrease from '../../asserts/Icons/decrease.png'
import properties from '../../asserts/Icons/properties.png'
import rent from '../../asserts/Icons/rent.png'
import fees from '../../asserts/Icons/fees.png'
import { abbreviateNumber } from "js-abbreviation-number";


const LineChartLabel = ({ title, amount, percent, growth }) => {
  
  return (
    <div className='line-chart-label items-center'>
      <img className='line-icon' src={title === 'Properties' ? properties : title === 'Registration' ? fees : title === 'Rent Commission' || 'Loan Interests' ? rent : ''} alt="" />
      <div>
        <p className='' style={{fontSize: '10px'}}>{title}</p>
        {/* { title === 'Properties' ? (
          <h2>{amount}</h2>
        ) : ( */}
          <h2>₦{abbreviateNumber(amount, 2)}</h2>
        {/* )
        } */}
      </div>
      {/* <div className='percent-div'>
        <span className={growth === 'increase' ? `uptrend` : growth ==='decrease' ? `downtrend` : ''}>{percent}%</span>
        <img className='growth' src={growth === 'increase' ? increase : decrease} alt="" />
      </div> */}
    </div>
  )
}

export default LineChartLabel
