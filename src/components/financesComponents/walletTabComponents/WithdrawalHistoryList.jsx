import React from 'react'
import WithdrawalHistoryItem from './WithdrawalHistoryItem'

const WithdrawalHistoryList = ({ withdrawalTransaction }) => {
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
                withdrawalTransaction?.map(transaction => (
                <WithdrawalHistoryItem transaction={transaction} />
                ))
            }
            </tbody>
        </table>
    </div>
  )
}

export default WithdrawalHistoryList
