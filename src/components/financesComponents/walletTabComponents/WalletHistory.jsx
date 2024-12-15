import React, {useState} from 'react'
import DepositHistoryList from './DepositHistoryList';
import WithdrawalHistoryList from './WithdrawalHistoryList'

const WalletHistory = () => {
  const [deposits, setDeposits] = useState(true);
  const [withdrawals, setWithdrawals] = useState(false);

  const depositHistoryData = [
    {
      amount: '3,500,00',
      description: 'Habeeb paid rent to Landlord',
      date: '14/09/23',
      historyType: 'Transfer'
    },
    {
      amount: '6,500,00',
      description: 'Habeeb paid rent to Landlord',
      date: '10/09/22',
      historyType: 'AutoSave'
    },
    {
      amount: '4,500,00',
      description: 'Habeeb paid rent to Landlord',
      date: '20/09/23',
      historyType: 'Transfer'
    },
    {
      amount: '4,500,00',
      description: 'Habeeb paid rent to Landlord',
      date: '20/09/23',
      historyType: 'Transfer'
    },
    {
    amount: '6,500,00',
    description: 'Habeeb paid rent to Landlord',
    date: '10/09/22',
    historyType: 'AutoSave'
    },
  {
    amount: '4,500,00',
    description: 'Habeeb paid rent to Landlord',
    date: '20/09/23',
    historyType: 'Transfer'
  },
  {
    amount: '6,500,00',
    description: 'Habeeb paid rent to Landlord',
    date: '10/09/22',
    historyType: 'AutoSave'
    },
  ]

  const withdrawalHistoryData = [
    {
      amount: '5,000',
      description: 'John Doe bought from Aitel',
      date: '14/09/23',
      transactionType: 'Airtime'
    },
    {
      amount: '20,000',
      description: 'Mike Obi to PHED',
      date: '14/09/23',
      transactionType: 'PHCN bill'
    },
    {
      amount: '500,000',
      description: 'Victor Edet to Ogenero John',
      date: '14/09/23',
      transactionType: 'Rent'
    },
    {
      amount: '5,000',
      description: 'John Doe bought from Aitel',
      date: '14/09/23',
      transactionType: 'Transfer'
    },
    {
      amount: '5,000',
      description: 'John Doe bought from Aitel',
      date: '14/09/23',
      transactionType: 'Airtime'
    },
    {
      amount: '20,000',
      description: 'Mike Obi to PHED',
      date: '14/09/23',
      transactionType: 'PHCN bill'
    },
    {
      amount: '500,000',
      description: 'Victor Edet to Ogenero John',
      date: '14/09/23',
      transactionType: 'Rent'
    },
    {
      amount: '5,000',
      description: 'John Doe bought from Aitel',
      date: '14/09/23',
      transactionType: 'Transfer'
    },
  ]

  const handleTabs = (value) => {
    let tabArr = [setDeposits, setWithdrawals];
    tabArr.map(tab => {
      if (tab === value) {
        tab(true)
      } else {
        tab(false);
      }
    })
  }

  return (
    <div>
        <div className='flex justify-between items-center mb-2'>
            <h3 className='font-semibold'>Wallet History</h3>
            <div className='border text-xs p-2 rounded' style={{fontSize: '9px'}}>
                <span className={deposits ? `mr-2 p-1.5 rounded bg-violet-100 text-blue-700 cursor-pointer` : 'mr-2 p-1.5 rounded cursor-pointer'} onClick={() => handleTabs(setDeposits)}>Deposits</span>
                <span className={withdrawals ? `p-1.5 rounded bg-violet-100 text-blue-700 cursor-pointer` : 'p-1.5 rounded cursor-pointer'} onClick={() => handleTabs(setWithdrawals)}>Withdrawals</span>
            </div>
        </div>
        <div>
            {
                deposits ? <DepositHistoryList depositTransactions={depositHistoryData} /> : withdrawals ? <WithdrawalHistoryList withdrawalTransaction={withdrawalHistoryData} /> : ''
            }
            </div>
    </div>
  )
}

export default WalletHistory
