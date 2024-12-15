import React, { useState, useEffect } from 'react'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import plusIcon from '../../../asserts/Icons/plus.png'
import filterIcon from '../../../asserts/Icons/filter.png'
import LoansActivityList from './LoansActivityList'

const LoansActivityTable = ({data, loadingActivities}) => {
  const [searchItem, setSearchItem] = useState('');

  const LoanActivityData = [
    {
        activity: 'Payment Received',
        amount: 'N600,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Loan Approved',
        amount: 'N700,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Loan Declined',
        amount: 'N800,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Payment Received',
        amount: 'N600,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Loan Approved',
        amount: 'N700,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Loan Declined',
        amount: 'N800,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Payment Received',
        amount: 'N600,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Payment Received',
        amount: 'N600,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Loan Approved',
        amount: 'N700,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Loan Declined',
        amount: 'N800,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Payment Received',
        amount: 'N600,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
    {
        activity: 'Loan Approved',
        amount: 'N700,000',
        description: 'Payment from Samuel Balogun via ****6547',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1'
    },
  ]

//   const newDataList = data.filter(loan => (
//     // loan.activity.toLowerCase().includes(searchItem.toLowerCase())
//     // || loan.amount.toLowerCase().includes(searchItem.toLowerCase())
//     // || loan.description.toLowerCase().includes(searchItem.toLowerCase())
//     loan.date.toLowerCase().includes(searchItem.toLowerCase())
//   ))

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  }

  return (
    <div>
      <div className="chart-area_item">
        <div className='flex justify-between items-center mb-5'>
            <div>
                <h3 className='text-xl font-semibold'>Loans Activity</h3>
                <p className='text-xs text-gray-500'>View details of all Loans Activity</p>
            </div>
            <div className='inline-flex items-baseline'>
                <div className="search-filter">
                    <div className="search-bar mr-3 flex justify-between item-center h-10" style={{width: '200px'}}>
                        <input type="text" value={searchItem} onChange={handleSearch} placeholder='Search' />
                        <div>
                            <img src={searchIcon} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={plusIcon} className='h-8 cursor-pointer mr-3' alt="" />
                    </div>
                    <div className='filter-area'>
                        <img src={filterIcon} alt="" />
                    </div>
              </div>
            </div>
        </div>
        <div>
            {
                loadingActivities ? (
                    <div className='flex justify-center items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="40" height="40" style={{'shapeRendering': 'auto', 'display': 'block', 'background': 'rgb(255, 255, 255)'}} xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="164.93361431346415 56.97787143782138" r="35" stroke-width="10" stroke="#dddddd" fill="none" cy="50" cx="50">
                        <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.5208333333333333s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
                        </circle><g></g></g></svg>
                  </div>
                ) : (
                    <LoansActivityList loansAtivity={data} />
                )
            }
          {/* {
            searchItem.length ? (
                <LoansActivityList loansAtivity={newDataList} /> 
            ) : ( */}
        {/* //     )
        //   } */}
        </div>
      </div>
    </div>
  )
}

export default LoansActivityTable
