import React from 'react'
import searchIcon from '../../../asserts/Icons/search-icon.png'


const LandlordsWalletTransactions = ({ transactions  }) => {
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
  return (
    <div className=''>
          <div className='flex justify-between items-center mb-5'>
            <div>
                <h3 className='text-xs font-meduim mb-1'>WALLET TRANSACTIONS</h3>
                <p className='text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="search-filter">
              <div className="search-bar mr-3 flex justify-between item-center h-8" style={{width: '200px'}}>
                  <input type="text" placeholder='Search' />
                  <div>
                      <img src={searchIcon} alt="" />
                  </div>
              </div>
              <button className='edit bg-[#1B49FF] text-white text-xs p-2 rounded-t-md'>Add Transaction</button>
            </div>
          </div>

      <div className="use-scroll-bar-style">
        <table>
          {
            tenantTansaction.map(transaction => (
              <tr className='tr text-xs'>
                <td className=''>
                  <small className={transaction.type === 'credit' ? `credit transaction-type` : 'debit transaction-type'}></small>
                </td>
                <td className='pb-5 text-[#4E527B]'>
                  <p>{transaction?.date}</p>
                  <p>{transaction?.time}</p>
                </td>
                <td className='transaction-main pl-28 pr-36 pb-5 text-[#4E527B]'>
                  <p>{transaction?.description}</p>
                  <p>{transaction?.reference}</p>
                </td>
                <td className='pb-5'>
                  <p className='font-bold text-base' style={transaction.type === 'credit' ? {'color': '#1BB121'} : {'color': '#E93B3B'}}>{transaction?.type === 'debit' ? '- ' : ''}{transaction?.amount}</p>
                  <p>Bal: {transaction?.walletBalance}</p>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  )
}

export default LandlordsWalletTransactions
