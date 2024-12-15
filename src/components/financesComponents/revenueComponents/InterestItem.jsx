import React from 'react'

const InterestItem = ({ itemData }) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-3 py-4 border-b">{itemData?.date}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b">{itemData?.tenant}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b">{itemData?.rentAmount}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b">{itemData?.loanAndInterest}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b">{itemData?.location?.state} - {itemData?.location?.city}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b completed">{itemData?.duration}</td>
        <td className="whitespace-nowrap px-3 py-4 border-b text-center">...</td>
    </tr>
  )
}

export default InterestItem
