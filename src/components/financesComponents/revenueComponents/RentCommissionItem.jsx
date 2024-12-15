import React from 'react'

const PropertiesItem = ({ itemData }) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-3 py-4 border-b">{itemData.date}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b">{itemData?.tenant}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b">{itemData?.rentAmount}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b completed">{itemData?.commission}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b">{itemData?.location?.city} - {itemData?.location.state}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b text-center">...</td>
    </tr>
  )
}

export default PropertiesItem
