import React from 'react'

const HbpTransactionItem = ({ itemData }) => {
  return (
    <tr style={{fontSize: '9px'}}>
        <td  className="whitespace-nowrap px-px py-4 border-b">{itemData?.amount}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?._id}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.createdAt}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">
            <p className={itemData.status === 'FAILED' ? `failed` : itemData?.status === 'COMPLETED' ? `completed` : itemData?.status === 'PENDING' ? `pending` : '' }>{itemData?.status}</p>
        </td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default HbpTransactionItem
