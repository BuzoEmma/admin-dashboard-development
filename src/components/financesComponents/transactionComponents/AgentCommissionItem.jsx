import React from 'react'

const AgentCommissionItem = ({ itemData }) => {
  return (
    <tr style={{fontSize: '10px'}}>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">{itemData.adsNumber}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.username}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.date}</td>
        <td className="whitespace-nowrap px-px py-4 border-b font-semibold text-center" style={{color: '#2BB2FE'}}>{itemData?.amount}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default AgentCommissionItem
