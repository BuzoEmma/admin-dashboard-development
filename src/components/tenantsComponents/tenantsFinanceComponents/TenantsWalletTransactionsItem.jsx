import React from 'react'

const TenantsWalletTransactionsItem = ({ itemData }) => {
  // console.log(itemData)
  return (
  <tr className="">
    <td>
      <small className={itemData?.txnType === 'TOPUP' ? `credit rounded-lg px-1 mr-2 text-[#1BB121]` : 'debit rounded-lg text-[#E93B3B] px-1 mr-2'}>.</small>
    </td>
    <td className="whitespace-nowrap px-px py-4">
      <p>{itemData?.createdAt}</p>
      <p>{itemData?.time}</p>
    </td>
    <td className="whitespace-nowrap px-px py-4">
      <p>{itemData?.description}</p>
      <p>{itemData?._id}</p>
    </td>
    <td className="whitespace-nowrap px-px py-4">
      <p className='transaction-amount text-lg font-bold' style={itemData?.txnType === 'TOPUP' ? {'color': '#1BB121'} : {'color': '#E93B3B'}}>{itemData?.txnType === 'WITHDRAWAL' ? '- ' : ''} NGN {itemData?.amount?.toLocaleString()}</p>
    </td>
  </tr>
  )
}

export default TenantsWalletTransactionsItem
