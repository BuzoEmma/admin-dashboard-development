import React from 'react'

const OthersItem = ({itemData}) => {
  return (
    <tr style={{fontSize: '10px'}}>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData.date}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData.expense}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">{itemData?.unit}</td>
        <td className="whitespace-nowrap px-px py-4 border-b font-semibold" style={{color: '#1EA06A'}}>{itemData?.amount}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default OthersItem
