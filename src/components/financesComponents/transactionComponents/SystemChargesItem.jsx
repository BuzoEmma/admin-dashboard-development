import React from 'react'

const SystemChargesItem = ({itemData}) => {
  return (
    <tr style={{fontSize: '10px'}}>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData.date}</td>
        <td className="whitespace-nowrap px-px py-4 border-b font-semibold" style={{color: '#F9C80E'}}>{itemData?.chargeOrUpdate}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.amount}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default SystemChargesItem
