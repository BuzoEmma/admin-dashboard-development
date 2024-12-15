import React from 'react'

const LoanItem = ({ itemData }) => {
  return (
    <tr style={{fontSize: '10px'}}>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData.amount}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.username}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.date}</td>
        <td className="whitespace-nowrap px-px py-4 border-b font-semibold" style={{color: '#1B49FF'}}>{itemData?.paid}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default LoanItem
