import React from 'react'

const WithdrawalHistoryItem = ({ transaction }) => {
  return (
    <tr style={{fontSize: '8px'}}>
        <td  className="whitespace-nowrap px-px py-4 border-b failed">{transaction.amount}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{transaction?.description}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{transaction?.date}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">
            <p className='bg-zinc-300 py-1 rounded'>{transaction.transactionType}</p>
        </td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default WithdrawalHistoryItem
