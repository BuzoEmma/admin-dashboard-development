import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TotalCard from '../TotalCard'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import filterIcon from '../../../asserts/Icons/filter.png'
import plusIcon from '../../../asserts/Icons/plus.png'
import UserWalletBalanceList from '../walletTabComponents/UserWalletBalanceList'
import HbpTransactionList from '../walletTabComponents/HbpTransactionList'
import expenseArrow from '../../../asserts/Icons/expense-arrow.png'
import RatesCard from '../walletTabComponents/RatesCard'
import WalletHistory from '../walletTabComponents/WalletHistory'
import { getSummary } from '../../../redux/Api'
import { abbreviateNumber } from "js-abbreviation-number";

const FinancesWalletsTab = ({ users, hbpRates }) => {
  const dispatch = useDispatch();
  const [searchUserBalance, setSearchUserBalance] = useState('');
  const [searchHbpTransaction, setSearchHbpTransaction] = useState('');
  const [totalHbp, setTotalHbp] = useState(0)
  // const [arrSum, setArrSum] = useState([])
  const [hbpSum, setHbpSum] = useState(0);
  const [ngnSum, setNgnSum] = useState(0);

  const hbpTransactions = useSelector((state) => state?.hbpTransactions?.hbpTransactions);
  const summary = useSelector((state) => state?.summary?.summary.statistics);

  // console.log(summary)

  

const sumUpHbp = (arr) => {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) {
      result += arr[i];
    }
  }

  // console.log(result)/

  setHbpSum(result)
}

const sumUpNgn = (arr) => {
  let result = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) {
      result += arr[i];
    }
  }
  // console.log(result)

  setNgnSum(result)
}

  const calculateHbpBalance =(arr)=> {
    let arrNum = []
    for (let i = 0; i < arr.length; i++) {
      // Add the current element to the sum
      arrNum.push(arr[i]?.wallets?.coin?.data?.info?.accountValue);
    }

    sumUpHbp(arrNum)
    
  }

  const calculateNgnBalance =(arr)=> {
    let arrNum = []
    for (let i = 0; i < arr.length; i++) {
      // Add the current element to the sum
      arrNum.push(arr[i]?.wallets?.currency?.data?.info?.accountValue);
    }

    sumUpNgn(arrNum)
    
  }

  const handleUserBalanceSearch =(e)=> {
    e.preventDefault();
    setSearchUserBalance(e.target.value)
  }

  const handleHbpTransactionSearch =(e)=> {
    e.preventDefault();
    setSearchHbpTransaction(e.target.value)
  }

  const newUsersBalanceData = users?.filter(user => (
    user?.accountInfo?.username?.toLowerCase().includes(searchUserBalance.toLowerCase())
    || user?.accountInfo?.nationality?.toLowerCase().includes(searchUserBalance.toLowerCase())
    || user?.accountInfo?.email?.toLowerCase().includes(searchUserBalance.toLowerCase())
    || user?.accountInfo?.role?.toLowerCase().includes(searchUserBalance.toLowerCase())
  ));

  const newHbpTransactions = hbpTransactions?.filter(data => (
    (String(data?.amount)).includes(searchHbpTransaction.toLowerCase())
    || data?._Id?.toLowerCase().includes(searchHbpTransaction.toLowerCase())
    || data?.status?.toLowerCase().includes(searchHbpTransaction.toLowerCase())
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getSummary());
    calculateHbpBalance(users)
    calculateNgnBalance(users)
  }, [])

  return (
    <div>
        <div className='flex mb-3 py-3'>
          <TotalCard title={'Total NGN'} year={''} total={abbreviateNumber(ngnSum, 2)} bgColor={'rgba(27, 73, 255, 1)'} textColor='#FFFFFF' arrow={'white'} users={users} />
          <TotalCard title={'Total HBP'} year={''} total={abbreviateNumber(summary?.wallet?.unusedHBP, 2)} bgColor={'#1B49FFCC'} textColor='#FFFFFF' arrow={'white'} />
        </div>

        <div className="chart-area_item">
          <div className="flex justify-between items-center">
            <div>
              <h3 className='text-xl font-semibold'>User Wallet Balances</h3>
              <p className='text-xs text-gray-500'>View Users Balance</p>
            </div>
            <div className="search-filter">
              <div className="search-bar mr-2 flex justify-between item-center h-8">
                  <input type="text" value={searchUserBalance} onChange={handleUserBalanceSearch}  placeholder='Search' />
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
            searchUserBalance.length ? (
                <UserWalletBalanceList data={newUsersBalanceData}/>
            ) : (
                <UserWalletBalanceList data={users}/>
            )
          }
        </div>

        <div className="chart-area mt-5">
          <div className='chart-area_item' style={{width: 550}}>
            <div className="flex justify-between items-center">
              <div>
                <h3 className='text-xl font-semibold mb-2'>HBP Wallet</h3>
                <p className='text-xs text-gray-500'>View transactions on all HBP wallets</p>
              </div>
              <div className="search-filter">
                <div className="search-bar mr-3 flex justify-between item-center h-8" style={{width: '200px'}}>
                    <input type="text" value={searchHbpTransaction} onChange={handleHbpTransactionSearch}  placeholder='Search' />
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
            {
            searchHbpTransaction.length ? (
                <HbpTransactionList transactions={newHbpTransactions}/>
            ) : (
                <HbpTransactionList transactions={hbpTransactions}/>
            )
          }
          </div>

          <div className='' style={{width: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
            <div className="chart-area_item hbp-rates-card hpb-bg-img">
              <div className='flex justify-between items-center mb-5'>
                <p className='text-xs text-white'>HBP RATES</p>
                <div className='flex justify-end items-center' style={{width: '20px'}}>
                  <small style={{color: '#71759D', fontSize: '8px'}}>Today</small>
                  <img src={expenseArrow} style={{height: '5px', marginLeft: '-15px'}} alt="" />
                </div>
              </div>
              <div className='flex'>
                <RatesCard title={'BUYING'} price={hbpRates?.buyingPrice} percent={0} growth={'increase'} titleColor={'#ADAFC5'} bgColor={'#070B31'} />
                <RatesCard title={'SELLING'} price={hbpRates?.sellingPrice} percent={0} growth={'increase'} titleColor={'#FFFFFF'} bgColor={'#1B49FF'} />
              </div>
            </div>

            <div className="chart-area_item">
              <WalletHistory />
            </div>
          </div>

        </div>
      </div>
  )
}

export default FinancesWalletsTab
