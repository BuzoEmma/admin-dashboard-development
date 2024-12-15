import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import OverallRevenue from '../revenueComponents/OverallRevenue'
import TotalCard from '../TotalCard'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import filterIcon from '../../../asserts/Icons/filter.png'
import calenderIcon from '../../../asserts/Icons/calender.png'
import expenseArrow from '../../../asserts/Icons/expense-arrow.png'
import uptrend from '../../../asserts/Icons/uptrend.svg'
import filledStar from '../../../asserts/Icons/filled-star.svg'
import emptyStar from '../../../asserts/Icons/empty-star.svg'
// import UsersList from '../overallTabComponents/UsersList'
import OverallExpenses from '../overallTabComponents/OverallExpenses'
import ExpensesLabel from '../overallTabComponents/ExpensesLabel'
import TransactionList from '../overallTabComponents/TransactionList'
import LineChart from '../LineChart'

const FinancesOverallTab = ({ summary, revenue}) => {
  const dispatch = useDispatch();
  const allTransactions = useSelector(state => state.transactions?.transactions)
  // console.log(allTransactions)


  const [searchTransaction, setSearchTransaction] = useState('');

  const newTransactionData = allTransactions?.filter((transaction) => (
    transaction?.date.toLowerCase().includes(searchTransaction.toLowerCase())
    || transaction?.txnType.toLowerCase().includes(searchTransaction.toLowerCase())
    || transaction?.status.toLowerCase().includes(searchTransaction.toLowerCase())
    || transaction?._id.toLowerCase().includes(searchTransaction.toLowerCase())
    || String(transaction?.amount).includes(searchTransaction.toLowerCase())
));


const handleTransactionSearch = (e) => {
  e.preventDefault();
  setSearchTransaction(e.target.value);
}
const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"];
const profitData = [100, 300, 440, 230, 300, 300, 400, 220];

const profitChart = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(234, 151, 61, 0.2)",
      borderColor: "#EA973D4F",
      data: profitData,
      fill: true
    }
  ],
}

const options = {
  animation: true,
  plugins: {
    legend: {
      display: false,
    },
    ticks: { display: false },
  },
  tension: 0.5,
  borderCapStyle: "round",
  borderWidth: 1.5,
  pointBackgroundColor: 'transparent',
  pointBorderColor: 'transparent',
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
      border: {
        dash: [2,4],
    },  
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        display: false,
      },
      border: {
        dash: [3,6],
    },  
    },
  },
}

useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (
    <div>
      <div className="chart-area">
        
        {/* <div className="chart-area_item">
          <OverallRevenue revenue={revenue} />
        </div> */}

        <div className='flex flex-col justify-between'>
          <TotalCard title={'Total Revenue'} total={'5.8M'} bgColor={'#0A1045'} textColor={"#FFFFFF"} year={'(2023)'} arrow={'white'} />
          <TotalCard title={'Total Expenses'} total={'5.8M'} bgColor={'#7692FF'} textColor={"#0A1045"} year={'(2023)'} arrow={'blue'} />
          <TotalCard title={'Total Wallet'} total={'5.6M'} bgColor={'#FFDB1B'} textColor={"#0A1045"} year={'(2023)'} arrow={'blue'} />
        </div>

        {/* <div className="chart-area_item finance-users-area">
          <div className='finance-overall-user-search'>
            <h2 className='text-lg font-bold'>Users</h2>
            <div className="search-filter">
              <div className="search-bar">
                  <input type="text" value={searchUser} onChange={handleUserSearch} placeholder='Search for user eg Ag 01' />
                  <div>
                      <img src={searchIcon} alt="" />
                  </div>
              </div>

              <div className='filter-area'>
                  <img src={filterIcon} alt="" />
              </div>
            </div>
          </div>
          {
            searchUser.length ? (
                <UsersList users={newUsersData}/>
            ) : (
                <UsersList users={usersData}/>
            )
          }
        </div> */}

        <div className="chart-area_item">
          <div className='flex justify-between items-center'>
            <h3 className='text-lg font-bold'>Expenses</h3>
            <div className='flex items-center justify-end'>
              <small style={{color: '#71759D', fontSize: '12px'}}>Today</small>
              <img src={expenseArrow} style={{height: '5px', marginLeft: '-15px'}} alt="" />
            </div>
          </div>
            <div className='piechart expense-piechart'>
                <OverallExpenses />
                <div className="expense-piechart-center">
                    <div>
                      <h2>N30.8M</h2>
                    </div>
                </div>
            </div>
            <div>
              <ExpensesLabel color='#1B49FF' title={'loans'} amount={'₦100K'} />
              <ExpensesLabel color='#2BB2FE' title={'Commission'} amount={'₦300K'} />
              <ExpensesLabel color='#F9C80E' title={'System charges/updates'} amount={'₦400K'} />
              <ExpensesLabel color='#1EA06A' title={'others'} amount={'₦200K'} />
            </div>
        </div>

        <div className="chart-area_item">
          <div className="finance-transaction-header">
            <h2 className='text-lg font-bold'>Transaction</h2>
            <div className="select">
              {/* <button className='select-date'>
                <img src={calenderIcon} alt="Calender" />
                <p className='text-xs py-1'>Select Date</p>
              </button> */}
              <div className="search-filter">
                <div className="search-bar">
                    <input type="text" value={searchTransaction} onChange={handleTransactionSearch} placeholder='Search' />
                    <div>
                        <img src={searchIcon} alt="" />
                    </div>
                </div>
              </div>
            </div>
          </div>
          {
            searchTransaction.length ? (
                <TransactionList transactions={newTransactionData}/>
            ) : (
                <TransactionList transactions={allTransactions}/>
            )
          }
        </div>

        {/* <div className='flex flex-col justify-between'> */}
          <div className='rounded-2xl px-5 pt-6 pb-0 finance-overall-profit-card my-shadow chart-area_item'>
            <div className='flex justify-between items-center  mb-3.5'>
              <h3 className='text-lg font-normal text-gray-300'>Profits</h3>
              <div className='flex items-center justify-end'>
                <small style={{color: '#71759D', fontSize: '8px'}}>Month</small>
                <img src={expenseArrow} style={{height: '5px', marginLeft: '-15px'}} alt="" />
              </div>
            </div>
            <h2 className='text-white font-bold text-2xl'>NGN 30.8M</h2>
            <div className='flex items-center mt-2'>
              <div><img src={uptrend} alt="" /></div>
              <span className='uptrend text-xs' style={{ marginLeft: '-15px'}}>35%</span>
            </div>
            <div style={{marginBottom: '-7px'}}>
              <LineChart data={profitChart} options={options} />
            </div>
          </div>

          <div className='rounded-2xl p-5 my-shadow chart-area_item'>
            <p className='mb-3 font-normal'>New Users</p>
            <div className='flex justify-between items-center  mb-3.5'>
              <h3 className='text-xl font-bold'>{summary?.totalUsers}</h3>
              <div className='flex items-center justify-start'>
                <small style={{color: '#71759D', fontSize: '8px'}}>Today</small>
                <img src={expenseArrow} style={{height: '5px', marginLeft: '-15px'}} alt="" />
              </div>
            </div>
            <hr />
            <div className="flex justify-center items-center my-6">
              <img src={filledStar} alt="" />
              <img src={filledStar} alt="" />
              <img src={filledStar} alt="" />
              <img src={filledStar} alt="" />
              <img src={emptyStar} alt="" />
            </div>
            <div className='text-center flex items-center justify-center'>
              <p className='text-gray-500 text-xs'>Customers Review</p>
              <img src={expenseArrow} style={{height: '5px', marginLeft: '-15px'}} alt="" />
            </div>
          </div>
        {/* </div> */}

      </div>

    </div>
  )
}

export default FinancesOverallTab
