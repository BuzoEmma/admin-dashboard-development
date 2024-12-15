import React from 'react'
import TableListComponent from '../../generalComponents/TableListComponent'
import LoanHistoryItem from './LoanHistoryItem'

const TenantsLoanHistory = ({ history }) => {
    console.log(history)
    const loanHistory = [
        {
          date: '14/09/23',
          starting: '13-09-2023',
          expiration: '23-09-2024',
          rentLoan : '3,500,000',
          interest : 'N500,000',
          paymentFreqency: 'Weekly',
          frequencyAmount: 'N7,019.30',
          savedAmount: 'N140,000.010',
          outStandingLoan: 'N400,000.00',
          amountPaid: 'N250,000.00'
        },
        {
          date: '14/09/23',
          starting: '13-09-2023',
          expiration: '23-09-2024',
          rentLoan : '3,500,000',
          interest : 'N500,000',
          paymentFreqency: 'Weekly',
          frequencyAmount: 'N7,019.30',
          savedAmount: 'N140,000.010',
          outStandingLoan: 'N400,000.00',
          amountPaid: 'N250,000.00'
        },
        {
            date: '14/09/23',
            starting: '13-09-2023',
            expiration: '23-09-2024',
            rentLoan : '3,500,000',
            interest : 'N500,000',
            paymentFreqency: 'Weekly',
            frequencyAmount: 'N7,019.30',
            savedAmount: 'N140,000.010',
            outStandingLoan: 'N400,000.00',
            amountPaid: 'N250,000.00'
        },
        {
          date: '14/09/23',
          starting: '13-09-2023',
          expiration: '23-09-2024',
          rentLoan : '3,500,000',
          interest : 'N500,000',
          paymentFreqency: 'Weekly',
          frequencyAmount: 'N7,019.30',
          savedAmount: 'N140,000.010',
          outStandingLoan: 'N400,000.00',
          amountPaid: 'N250,000.00'
        },
        {
          date: '14/09/23',
          starting: '13-09-2023',
          expiration: '23-09-2024',
          rentLoan : '3,500,000',
          interest : 'N500,000',
          paymentFreqency: 'Weekly',
          frequencyAmount: 'N7,019.30',
          savedAmount: 'N140,000.010',
          outStandingLoan: 'N400,000.00',
          amountPaid: 'N250,000.00'
        },
        {
          date: '14/09/23',
          starting: '13-09-2023',
          expiration: '23-09-2024',
          rentLoan : '3,500,000',
          interest : 'N500,000',
          paymentFreqency: 'Weekly',
          frequencyAmount: 'N7,019.30',
          savedAmount: 'N140,000.010',
          outStandingLoan: 'N400,000.00',
          amountPaid: 'N250,000.00'
        },
        {
          date: '14/09/23',
          starting: '13-09-2023',
          expiration: '23-09-2024',
          rentLoan : '3,500,000',
          interest : 'N500,000',
          paymentFreqency: 'Weekly',
          frequencyAmount: 'N7,019.30',
          savedAmount: 'N140,000.010',
          outStandingLoan: 'N400,000.00',
          amountPaid: 'N250,000.00'
        },
      ]

  return (
    <div>
      <TableListComponent itemComponent={LoanHistoryItem} dataList={history} fontSize={8}  />
    </div> 
  )
}

export default TenantsLoanHistory
