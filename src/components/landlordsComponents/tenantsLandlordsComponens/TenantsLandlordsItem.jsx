import React from 'react'


const TenantsLandlordsItem = ({ itemData }) => {

  return (
    <tr>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.username}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.location}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.tenant}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.phoneNumber}</td>
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">...</td>
    </tr>
  )
}

export default TenantsLandlordsItem
