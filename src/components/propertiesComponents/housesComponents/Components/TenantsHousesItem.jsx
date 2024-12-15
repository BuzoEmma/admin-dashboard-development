import React from 'react'

const TenantsHousesItem = ({itemData}) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.id}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.houses[0]?.location?.state} - {itemData?.houses[0]?.location?.city}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">N{itemData?.houses[0]?.rentAmount.toLocaleString()}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.surname} {itemData?.fname}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">-----</td>
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">...</td>
    </tr>
  )
}

export default TenantsHousesItem
