import React, { useEffect } from 'react'
import { useState } from 'react'
import blueArrow from '../../asserts/Icons/blue-arrow.png'
import whiteArrow from '../../asserts/Icons/white-arrow.png'

const TotalCard = ({ title, year, total, bgColor, textColor, arrow, users }) => {
  const style = {
    backgroundColor: bgColor,
    color: textColor
  }

  // const [hbpSum, setHbpSum] = useState(calculateHbpBalance() || 0)

  // const calculateHbpBalance = (users) => {
  //   let sum = 0
  //   users?.map(user => {
  //     sum += user.wallets?.coin?.data?.info?.accountValue;
  //   });

  //   console.log(sum)
  // }

  // calculateHbpBalance()

  // useEffect(() => {
  //   setHbpSum(calculateHbpBalance())
  // }, [])

    return (
    <div className='finance-total-card shadow-xl border' style={style}>
      <div className='mb-5'>
        <p className='text-xl font-bold'>{title}{year}</p>
        <h2 className='text-xl font-bold'>NGN {total}</h2>
      </div>
      <img className='arrow' src={arrow === 'blue' ? blueArrow : whiteArrow} alt="" />
    </div>
  )
}

export default TotalCard
