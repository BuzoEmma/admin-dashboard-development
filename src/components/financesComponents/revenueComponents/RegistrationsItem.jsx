import React from 'react'

const RegistrationsItem = ({ itemData }) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.date}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.amount.toLocaleString()}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.name}</td>
        <td className="whitespace-nowrap px-px py-4 border-b ">
            <button className={itemData?.type === 'tenant' ? `tenant-btn` : itemData?.type === 'landlord' ? `landlord-btn` : itemData?.type === 'agent' ? `agent-btn` : itemData?.type === 'Seeker' ? `seeker-btn` : '' }>{itemData?.type}</button>
        </td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.location}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default RegistrationsItem
