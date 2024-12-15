import React from 'react'

const TransactionTotalCard = ({ title, amount, bgColor}) => {
  return (
    <div className='text-white p-3.5 rounded-lg shadow transaction-total-card' style={{backgroundColor: bgColor}}>
      <div className='flex justify-between items-center mb-3'>
        <p className='text-xs' style={{fontSize: '8px'}}>{title}</p>
        <div className='more_vert' >
          <span class="material-symbols-outlined" style={{fontSize: '12px'}}>more_vert</span>
        </div>
      </div>
    <p className='text-lg font-semibold'>{amount}</p>
</div>
  )
}

export default TransactionTotalCard
