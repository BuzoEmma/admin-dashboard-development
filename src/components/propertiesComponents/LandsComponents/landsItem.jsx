import React from 'react'

const landsItem = ({itemData}) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.publicId}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.location?.address}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.price?.toLocaleString()}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">------</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.size}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.plots}</td>
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">...</td>
    </tr>
  )
}

export default landsItem
