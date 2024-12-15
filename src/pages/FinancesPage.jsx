import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import FinancesOverallTab from '../components/financesComponents/tabs/FinancesOverallTab';
import FinancesWalletsTab from '../components/financesComponents/tabs/FinancesWalletsTab';
import FinanceRevenueTab from '../components/financesComponents/tabs/FinanceRevenueTab';
import FinanceTransactionTab from '../components/financesComponents/tabs/FinanceTransactionTab';
import OfflineTransactionsTab from '../components/financesComponents/tabs/OfflineTransactionsTab';
import FinanceLoansTab from '../components/financesComponents/tabs/FinanceLoansTab';
import { getOfflineTransactions, getUsers, getSummary, getHbpRates, getRevenueData, getRevenueAnalysis, getAllTransactions, getHbpTransactions } from '../redux/Api'
// import { json } from 'react-router-dom';

const FinancesPage = () => {
  const dispatch = useDispatch();
  const [financeMainTabs, setFinanceMainTabs] = useState([] || JSON.parse(localStorage.getItem("financePageMainTabs")));

  const offlinetransactionData = useSelector((state) => state?.OfflineTransactions?.offlineTransactions);
  const usersData = useSelector((state) => state?.users?.users);
  const summary = useSelector((state) => state?.summary?.summary?.result);
  const hbpRates = useSelector((state) => state?.hbpRates?.hbpRates);
  const revenue = useSelector((state) => state?.revenueData?.revenue);
  // const revenueAnalysis = useSelector((state) => state?.revenueAnalysis?.revenueAnalysis);


  const offlinetransactionDataSorted = [...offlinetransactionData]

  offlinetransactionDataSorted?.sort(function(a, b) {
    // Convert the date strings to Date objects
    let dateA = new Date(a.createdAt);
    let dateB = new Date(b.createdAt);
  
    // Subtract the dates to get a value that is either negative, positive, or zero
    return dateB - dateA;
  });

  const loansPerformance = {
    pending: 32,
    approved: 29,
    declined: 14
}

const toggleFinanceMainTabs = (tabId) => {
  let newArr = [];

  financeMainTabs.map((t) => {
    if (t.id == tabId) {
      t.current = true;
      newArr.push(t);
    } else {
      t.current = false;
      newArr.push(t);
    }
    setFinanceMainTabs(newArr);
    localStorage.setItem("financePageMainTabs", JSON.stringify(newArr));
  });
};

  useEffect(() => {

    let financePageMainTabs = localStorage.getItem("financePageMainTabs");
    if (financePageMainTabs) {
      let finMainTabs = JSON.parse(financePageMainTabs);
      setFinanceMainTabs(finMainTabs);
    } else {
      let financePageMainTabs = [
        {
          id: 1,
          name: "Overall",
          current: true,
        },
        {
          id: 2,
          name: "Wallet",
          current: false,
        },
        {
          id: 3,
          name: "Revenue",
          current: false,
        },
        {
          id: 4,
          name: "Transaction",
          current: false,
        },
        {
          id: 5,
          name: "Offline Transaction",
          current: false,
        },
        {
          id: 6,
          name: "Loans",
          current: false,
        },
      ];
      setFinanceMainTabs(financePageMainTabs);
    }

    dispatch(getSummary())
    dispatch(getOfflineTransactions())
    dispatch(getUsers())
    dispatch(getHbpRates())
    dispatch(getRevenueData())
    dispatch(getRevenueAnalysis())
    dispatch(getAllTransactions())
    dispatch(getHbpTransactions())
  }, [dispatch])

  return (
    <>
        <div className="tenants-nav z-10 -mb-12">
          {
            financeMainTabs?.map(tab => (
              <p className={tab?.current ? `highlighted` : ''} onClick={() => toggleFinanceMainTabs(tab?.id)}>{tab?.name}</p>
            ))
          }
        </div>

        <div className="finances-page page">
            <div>
                {
                    financeMainTabs[0]?.current ? <FinancesOverallTab summary={summary} revenue={revenue} /> : financeMainTabs[1]?.current ? <FinancesWalletsTab users={usersData} hbpRates={hbpRates} /> : financeMainTabs[2]?.current ? <FinanceRevenueTab /> : financeMainTabs[3]?.current ? <FinanceTransactionTab  />  : financeMainTabs[4]?.current ? <OfflineTransactionsTab data={offlinetransactionDataSorted} /> : financeMainTabs[5]?.current ? <FinanceLoansTab loansPerformance={loansPerformance} /> : ''
                  
                }
            </div>
        </div>
    </>
  )
}

export default FinancesPage
