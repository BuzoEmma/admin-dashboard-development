import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import filterIcon from '../../../asserts/Icons/filter.png'
import plusIcon from '../../../asserts/Icons/plus.png'
import handleTabs from '../../generalComponents/HandleTabs'
import RequestedLoansList from './RequestedLoansList'
import OutstandingLoansList from './OutstandingLoansList'
import OverdueLoansList from './OverdueLoansList'
import CompletedLoansList from './CompletedLoansList'
// import myConstants from '../../../Constants'
import { getRequestedLoans, getOutstandingLoans, getOverdueLoans, getCompletedLoans } from '../../../redux/Api'
// import spinner from '../../../asserts/'

const LoansAnalysisTable = ({loadingStatus}) => {
  const dispatch = useDispatch()
  const [searchItem, setSearchItem] = useState('');
  const [requestedLoans, setRequestedLoans] = useState(true);
  const [outstandingLoans, setOutstandingLoans] = useState(false);
  const [overdueLoans, setOverdueLoans] = useState(false);
  const [completedLoans, setCompletedLoans] = useState(false);

  const requestedLoansData = useSelector((state) => state?.requestedLoansData?.requestedLoansData);
  const outstandingLoansData = useSelector((state) => state?.outstandingLoansData?.outstandingLoansData);
  const overdueLoansData = useSelector((state) => state?.overdueLoansData?.overdueLoansData);
  const completedLoansData = useSelector((state) => state?.completedLoansData?.completedLoansData);

  // console.log(requestedLoansData);
  // console.log(outstandingLoansData);
  // console.log(overdueLoansData);
  // console.log(completedLoansData);


  var newDataList;

  const handleFilter =()=> {
    if(requestedLoans) {
      newDataList = requestedLoansData?.filter(loan => (
        loan?.dateApplied.toLowerCase().includes(searchItem.toLowerCase())
        || loan?.userDetails?.username?.toLowerCase().includes(searchItem.toLowerCase())
        || loan?.status?.toLowerCase().includes(searchItem.toLowerCase())
        || loan?.creditScore?.toLocaleString().includes(searchItem.toLowerCase())
        || loan?.amountReceived?.toLocaleString().includes(searchItem.toLowerCase())
      ))
    } else if(outstandingLoans) {
      newDataList = outstandingLoansData.filter(loan => (
        loan?.dateApplied.toLowerCase().includes(searchItem.toLowerCase())
        || loan?.userDetails?.username?.toLowerCase().includes(searchItem.toLowerCase())
        || loan?.monthlyPayment?.toLocaleString().includes(searchItem.toLowerCase())
        || loan?.amountSettled?.toLocaleString().includes(searchItem.toLowerCase())
        || loan?.amountToPay?.toLocaleString().includes(searchItem.toLowerCase())
      ))
    } else if(overdueLoans) {
      newDataList = overdueLoansData.filter(loan => (
        loan?.dateApplied.toLowerCase().includes(searchItem.toLowerCase())
        || loan?.userDetails?.username?.toLowerCase().includes(searchItem.toLowerCase())
        || loan?.monthlyPayment?.toLocaleString().includes(searchItem.toLowerCase())
        || loan?.amountSettled?.toLocaleString().includes(searchItem.toLowerCase())
        || loan?.amountToPay?.toLocaleString().includes(searchItem.toLowerCase())
      ))
    } else if(completedLoans) {
      newDataList = completedLoansData.filter(loan => (
        loan?.dateApplied.toLowerCase().includes(searchItem.toLowerCase())
        || loan?.userDetails?.username?.toLowerCase().includes(searchItem.toLowerCase())
        || loan?.amountReceived?.toLocaleString().includes(searchItem.toLowerCase())
        || loan?.amountToPay?.toLocaleString().includes(searchItem.toLowerCase())
        || loan?.dateSettled?.toLowerCase().includes(searchItem.toLowerCase())
      ))
    }
  }

  searchItem && handleFilter();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value);
  }

  useEffect(() => {
    dispatch(getRequestedLoans())
    dispatch(getOutstandingLoans())
    dispatch(getOverdueLoans())
    dispatch(getCompletedLoans())

    window.scrollTo(0, 0)
  }, [dispatch])

  return (
    <div>
      <div className="chart-area_item">
        <div className='flex justify-between items-center mb-5'>
            <div>
                <h3 className='text-xl font-semibold'>Loans Analysis</h3>
                <p className='text-xs text-gray-500'>View details of all Loans</p>
            </div>
            <div className='inline-flex items-baseline'>
                <div className='text-xs mr-3'>
                    <span className={requestedLoans ? `bg-[#1B49FF] text-white p-2 cursor-pointer rounded-md mr-3 ` : 'p-2 cursor-pointer rounded-md mr-3 border text-[#777980]'} onClick={() => handleTabs(setRequestedLoans, [setRequestedLoans, setOutstandingLoans, setOverdueLoans, setCompletedLoans])}>Requested Loans</span>
                    <span className={outstandingLoans ? `bg-[#1B49FF] text-white p-2 cursor-pointer rounded-md mr-3 ` : 'p-2 cursor-pointer rounded-md mr-3 border text-[#777980]'} onClick={() => handleTabs(setOutstandingLoans, [setRequestedLoans, setOutstandingLoans, setOverdueLoans, setCompletedLoans])}>Outstanding Loans</span>
                    <span className={overdueLoans ? `bg-[#1B49FF] text-white p-2 cursor-pointer rounded-md mr-3 ` : 'p-2 cursor-pointer rounded-md mr-3 border text-[#777980]'} onClick={() => handleTabs(setOverdueLoans, [setRequestedLoans, setOutstandingLoans, setOverdueLoans, setCompletedLoans])}>Overdue Loans</span>
                    <span className={completedLoans ? `bg-[#1B49FF] text-white p-2 cursor-pointer rounded-md mr-3 ` : 'p-2 cursor-pointer rounded-md mr-3 border text-[#777980]'} onClick={() => handleTabs(setCompletedLoans, [setRequestedLoans, setOutstandingLoans, setOverdueLoans, setCompletedLoans])}>Completed Loans</span>
                </div>
                <div className="search-filter">
                    <div className="search-bar mr-3 flex justify-between item-center h-10" style={{width: '200px'}}>
                        <input type="text" value={searchItem} onChange={handleSearch} placeholder='Search' />
                        <div>
                            <img src={searchIcon} alt="" />
                        </div>
                    </div>
              </div>
            </div>
        </div>
        <div>
          {
            searchItem.length ? (
                requestedLoans ? <RequestedLoansList requestedLoans={newDataList} loadingStatus={loadingStatus} />  : outstandingLoans ? <OutstandingLoansList outstandingLoans={newDataList} loadingStatus={loadingStatus} /> : overdueLoans ? <OverdueLoansList overdueLoans={newDataList} loadingStatus={loadingStatus} /> : completedLoans ? <CompletedLoansList completedLoans={newDataList} loadingStatus={loadingStatus} /> : ''
            ) : (
                requestedLoans ? <RequestedLoansList requestedLoans={requestedLoansData} loadingStatus={loadingStatus} />  : outstandingLoans ? <OutstandingLoansList outstandingLoans={outstandingLoansData} loadingStatus={loadingStatus} /> : overdueLoans ? <OverdueLoansList overdueLoans={overdueLoansData}loadingStatus={loadingStatus} /> : completedLoans ? <CompletedLoansList completedLoans={completedLoansData} loadingStatus={loadingStatus} /> : ''
            )
          }
        </div>
      </div>
    </div>
  )
}

export default LoansAnalysisTable
