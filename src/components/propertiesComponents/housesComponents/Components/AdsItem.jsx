import React from 'react'

const AdsItem = ({ itemData }) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData._id}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.location?.address}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.price.toLocaleString()}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">--------</td>
        <td className="whitespace-nowrap px-px py-4 border-b">
          <button className='p-3 bg-[#DDE4FF] text-[#1B49FF]'>For sell</button>
        </td>
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">...</td>
    </tr>
  )
}

export default AdsItem
