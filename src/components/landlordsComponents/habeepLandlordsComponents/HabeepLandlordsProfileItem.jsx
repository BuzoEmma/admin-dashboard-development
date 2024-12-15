import React from 'react'

const HabeepLandlordsProfileItem = ({ itemData }) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.nickName}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.location}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.agent}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.noOfHouses}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">
            <button className='bg-[#DDE4FF] text-[#1B49FF] w-20'>{itemData?.certification}</button>
        </td>
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">...</td>
    </tr>
  )
}

export default HabeepLandlordsProfileItem
