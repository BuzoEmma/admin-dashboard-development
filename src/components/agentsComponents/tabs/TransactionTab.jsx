import React, { useState } from 'react'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import TenantsWalletBalance from '../../tenantsComponents/tenantsFinanceComponents/TenantsWalletBalance'
import TenantsWalletTransactions from '../../tenantsComponents/tenantsFinanceComponents/TenantsWalletTransactions'
import AgentsCommissionHistory from '../AgentsCommissionHistory'
import AddTransactionPopup from '../../popComponents/AddTransactionPopup'

const TransactionTab = ({ agent }) => {
  // console.log(agent)
  const tenantTansaction = [
    {
      date: '09:56 am GMT+1',
      time: 'Thu 14 Sept 2023',
      description: 'Transfer from DAVID CARRICK [Access Bank PLC - xxxxxx0219]',
      reference: 'Reference 029321839479210923840947562971 Note via ACCESS APP',
      type: 'credit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,507,000'
    },
    {
      date: 'Thu 07 Sept 2023',
      time: '09:56 am GMT+1',
      description: '100 HBP converted to naira @ 625.00',
      reference: ' Reference 029321839479203845840947562971',
      type: 'credit',
      amount: 'NGN 62,500',
      walletBalance: 'NGN 1,215,000'
    },
    {
      date: 'Mon 14 Aug 2023',
      time: '09:56 am GMT+1',
      description: 'Autosave Deposit [HB]. Payment ID',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'debit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
    {
      date: 'Mon 14 Aug 2023',
      time: '09:56 am GMT+1',
      description: 'Autosave Deposit [HB]. Payment ID',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'credit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
    {
      date: 'Mon 14 Aug 2023',
      time: '09:56 am GMT+1',
      description: 'Autosave Deposit [HB]. Payment ID',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'debit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
    {
      date: 'Wed 26 Sept 2023',
      time: '09:56 am GMT+1',
      description: 'Transfer from DAVID CARRICK [Access Bank PLC - xxxxxx0219]',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'credit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
    {
      date: 'Mon 14 Aug 2023',
      time: '09:56 am GMT+1',
      description: 'Autosave Deposit [HB]. Payment ID',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'debit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
    {
      date: 'Wed 26 Sept 2023',
      time: '09:56 am GMT+1',
      description: 'Transfer from DAVID CARRICK [Access Bank PLC - xxxxxx0219]',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'credit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
    {
      date: 'Wed 26 Sept 2023',
      time: '09:56 am GMT+1',
      description: 'Transfer from DAVID CARRICK [Access Bank PLC - xxxxxx0219]',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'credit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
    {
      date: 'Wed 26 Sept 2023',
      time: '09:56 am GMT+1',
      description: 'Transfer from DAVID CARRICK [Access Bank PLC - xxxxxx0219]',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'credit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
    {
      date: 'Wed 26 Sept 2023',
      time: '09:56 am GMT+1',
      description: 'Transfer from DAVID CARRICK [Access Bank PLC - xxxxxx0219]',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'credit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
    {
      date: 'Wed 26 Sept 2023',
      time: '09:56 am GMT+1',
      description: 'Transfer from DAVID CARRICK [Access Bank PLC - xxxxxx0219]',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'credit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
    {
      date: 'Wed 26 Sept 2023',
      time: '09:56 am GMT+1',
      description: 'Transfer from DAVID CARRICK [Access Bank PLC - xxxxxx0219]',
      reference: 'HBSVDP9210965Kak823GlkDeB',
      type: 'credit',
      amount: 'NGN 292,000',
      walletBalance: 'NGN 1,152,500'
    },
  ];

  const [showAddTransactionPopup, setShowAddTransactionPopup] = useState(false);

  const closeAddTransactionPopup = () => {
    setShowAddTransactionPopup(!showAddTransactionPopup)
  }

  const staticCardDetails = {
    walletBalance: '1,507,000',
    cardExpiringDate: '08/25',
    cardHolder: `${agent?.surname} ${agent?.fname}`,
    cardNumber: '**** **** **** ****'
  }
  return (
    <div className='grid grid-cols-3 gap-5'>
      <div className='col-span-2'>
        <div className="chart-area_item mt-3">
          <AddTransactionPopup visible={showAddTransactionPopup} onClose={closeAddTransactionPopup} />
          <TenantsWalletBalance cardDetails={staticCardDetails} walletBalance={'1,507,000'} />
        </div>

        <div className='card mt-5 chart-area_item'>
          <div className="transaction-header">
            <div>
              <p className="title">WALLET TRANSACTIONS</p>
              <small>Lorem ipsum dolor sit amet consectetur.</small>
            </div>
            <div className="search-bar">
              <input type="text" placeholder='Search for agent eg Ag 01' />
              <div>
                  <img src={searchIcon} alt="" />
              </div>
            </div>
            <button onClick={() => {setShowAddTransactionPopup(true)}}>Add Transaction</button>
          </div>
          
          <div className="transaction-body use-scroll-bar-style">
            <table>
              {
                tenantTansaction.map(transaction => (
                  <tr className='tr'>
                    <td>
                      <small className={transaction.type === 'credit' ? `credit transaction-type` : 'debit transaction-type'}></small>
                    </td>
                    <td>
                      <p>{transaction.date}</p>
                      <p>{transaction.time}</p>
                    </td>
                    <td className='transaction-main'>
                      <p>{transaction.description}</p>
                      <p>{transaction.reference}</p>
                    </td>
                    <td>
                      <p className='transaction-amount' style={transaction.type === 'credit' ? {'color': '#1BB121'} : {'color': '#E93B3B'}}>{transaction.type === 'debit' ? '- ' : ''}{transaction.amount}</p>
                      <p>{transaction.walletBalance}</p>
                    </td>
                  </tr>
                ))
              }
            </table>
          </div>
        </div>
      </div>

      <div className='col-span-1 py-3 flex flex-col justify-between'>
          <div className="hpb-bg-img bg-[#0A1045] text-white rounded-lg p-3 h-32 mb-5 shadow-lg">
            <div className='flex items-center justify-between text-xs'>
              <p className='mb-5'>HBP BALANCE</p>
              <div className='more_vert'>
                <span class="material-symbols-outlined">more_vert</span>
              </div>
            </div>
              <p>{0}</p>
          </div>

          <div className=" bg-[#1EA06A] text-white rounded-lg p-3 h-32 shadow-lg mb-5">
            <div className='flex items-center justify-between text-xs'>
              <p className='mb-5'>Agent's Commission</p>
              <div className='more_vert'>
                <span class="material-symbols-outlined">more_vert</span>
              </div>
            </div>
              <p>{'1,673,800'}</p>
          </div>

          <div className="rent-history card shadow-lg p-3 rounded-lg">
            <p>RENT HISTORY</p>
            <small>Lorem ipsum dolor sit amet consectetur.</small>
            <AgentsCommissionHistory />
          </div>
        </div>
    </div>
  )
}

export default TransactionTab
