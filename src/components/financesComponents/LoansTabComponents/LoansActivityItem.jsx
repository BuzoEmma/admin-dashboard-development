import React from 'react'

const LoansActivityItem = ({ itemData }) => {
    // const completedLoansHeader = ['DATE CREATED', 'USERNAME', 'TOTAL AMOUNT', 'DATE COMPLETED', 'NO OF DAYS TO COMPLETE', 'ACTIONS']
    const loanStatus = itemData?.status
    return (
    <tr className='loans-analysis-btn'>
        <td className="whitespace-nowrap px-px py-4 border-b">{loanStatus === 'APPROVED' ? 'Loan Approved' : loanStatus === 'DECLINED' ? 'Loan Declined' : loanStatus === 'DISBURSED' ? 'Loan Disbursed' : loanStatus === 'SETTLED' ? 'Payment Recieved' : 'Loan Setup' }</td>
        {/* <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.status}</td> */}
        <td className="whitespace-nowrap px-px py-4 border-b">{loanStatus === 'SETTLED' ? itemData?.amountSettled.toLocaleString() : itemData?.amount.toLocaleString()}</td>
        {/* <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.description}</td> */}
        <td className="whitespace-nowrap px-px py-4 border-b">{loanStatus === 'SETTLED' ? itemData?.dateSettled : loanStatus === 'DISBURSED' ? itemData?.dateDisbursed : loanStatus === 'APPROVED' ? itemData?.updatedAt  : itemData?.createdAt}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default LoansActivityItem
