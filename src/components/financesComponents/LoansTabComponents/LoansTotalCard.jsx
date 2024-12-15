import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";
import TotalSkeleton from '../../skeleton/TotalSkeleton'


const LoansTotalCard = ({bgColor, title, amount, loadingStatus}) => {
  return (
    <>
      {
          loadingStatus === 'idle' ? 
          (
            <TotalSkeleton />
          ) : (
            <div className={`bg-[${bgColor}] p-3 rounded-2xl`}>
            <p className=' text-xs text-[#FFFFFF] mb-4' style={{fontSize: 10}}>{title}</p>
            <h2 className='text-[#FFFFFF] text-xl mb-3'>NGN {abbreviateNumber(amount, 1)}</h2>
            </div>
          )
      }
    </>
  )
}

export default LoansTotalCard
