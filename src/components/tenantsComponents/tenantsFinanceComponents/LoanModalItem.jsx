import React from 'react'

const LoanModalItem = ({name, value}) => {
  return (
    <div className='bg-[#F7F7F7] rounded p-2'>
      <p className='text-[#767888] text-xs mb-2'>{name}</p>
      <p className='text-black font-semibold'>{value}</p>
    </div>
  )
}

export default LoanModalItem
