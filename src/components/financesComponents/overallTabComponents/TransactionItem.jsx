import React from 'react'

const TransactionItem = ({ itemData }) => {
  return (
    <tr className='finance-user-td' key={itemData?.transactionId} style={{fontSize: 10}}>
        <td className="whitespace-nowrap px-px py-4 border-b" style={{fontSize: 10}}>
            <p>{itemData?.date}</p>
            <p>{itemData?.time}</p>
        </td>
        <td className={`${itemData.txnType.includes('DEPOSIT') ? `phcn` : itemData?.txnType.includes('PAYMENT') ? `hpb` : itemData?.txnType.includes('LOAN') ? `airtime` : itemData?.txnType.includes('TOPUP') ? 'rent' : itemData?.txnType.includes('WITHDRAWAL') ? 'text-[#E11B1C]' : '' } whitespace-nowrap px-px py-4 border-b`}>
          {itemData?.txnType}
        </td>
        {/* <td className="whitespace-nowrap px-px py-4 border-b" style={{fontSize: 10}}>
          {itemData?.txnType}
        </td> */}
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?._id}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData ?.amount.toLocaleString()}</td>
        <td className={`${itemData.status === 'Failed' ? `failed` : itemData?.status === 'Completed' ? `completed` : itemData?.status === 'Pending' ? `pending` : '' } whitespace-nowrap px-px py-4 border-b `}>
        {itemData?.status}
        </td>        
        <td className="whitespace-nowrap px-px py-4 border-b pl-5">...</td>
    </tr>
  )
}

export default TransactionItem
