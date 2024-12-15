import React from 'react'

const PropertiesItem = ({ itemData }) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData.date}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.propertyId}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.value}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.agent}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.location.state} - {itemData?.location.city}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default PropertiesItem
