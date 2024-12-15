import React from 'react'

const RentHistoryItem = ({itemData}) => {
  return (
    <tr>
       <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.date}</td>
       <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.action}</td>
       <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.amount}</td>
    </tr>
  )
}

export default RentHistoryItem
