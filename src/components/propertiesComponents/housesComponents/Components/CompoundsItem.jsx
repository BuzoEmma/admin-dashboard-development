import React from 'react'

const CompoundsItem = ({itemData}) => {
  return (
    <tr>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.nickName ? itemData?.nickName : itemData?.title}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.landlordData?.name}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.location?.address}</td>
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">{itemData?.totalHouses}</td>
        {/* <td className="whitespace-nowrap px-px py-4 border-b pl-5">
            <button className={itemData.certification === 'C/O' ? 'CO' : itemData.certification === 'R/O' ? 'RO' : 'None'}>{itemData?.certification}</button>
        </td> */}
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">...</td>
    </tr>
  )
}

export default CompoundsItem
