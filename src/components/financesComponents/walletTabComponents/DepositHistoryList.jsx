import React from 'react'
import DepositHistoryItem from './DepositHistoryItem'

const DepositHistoryList = ({ depositTransactions }) => {
  return (
    <div className='h-60 overflow-y-scroll use-scroll-bar-style'>
        <table className='min-w-full text-left user-balance-table transaction-table'>
            {/* <thead className='border-b font-medium'>
              <tr style={{fontSize: '10px'}}>
                  <th scope="col" className="px-px py-4">AMOUNT</th>
                  <th scope="col" className="px-px py-4">Description</th>
                  <th scope="col" className="px-px py-4">DATE</th>
                  <th scope="col" className="px-px py-4 text-center">TYPE</th>
                  <th scope="col" className="px-px py-4 text-center">ACTIONS</th>
              </tr>
            </thead> */}
            <tbody className=''>
            {
                depositTransactions?.map(transaction => (
                <DepositHistoryItem transaction={transaction} />
                ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default DepositHistoryList
