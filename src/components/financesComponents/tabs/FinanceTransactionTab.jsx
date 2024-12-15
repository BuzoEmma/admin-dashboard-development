import React from 'react'
import TransactionTotalCard from '../transactionComponents/TransactionTotalCard'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import plusIcon from '../../../asserts/Icons/plus.png'
import TableListComponent from '../../generalComponents/TableListComponent'
import LoanItem from '../transactionComponents/LoanItem'
import AgentCommissionItem from '../transactionComponents/AgentCommissionItem'
import SystemChargesItem from '../transactionComponents/SystemChargesItem'
import OthersItem from '../transactionComponents/OthersItem'
import { useState, useEffect } from 'react'

const FinanceTransactionTab = () => {
  const loansHeaderList = ['AMOUNT', 'USERNAME', 'DATE', 'PAID', 'ACTIONS'];
  const agentsCommissionHeaderList = ['NO. OF ADS', 'USERNAME', 'DATE', 'AMOUNT', 'ACTIONS'];
  const systemChargesHeaderList = ['DATE', 'CHARGE/UPDATE', 'AMOUNT', 'ACTIONS'];
  const othersHeaderList = ['DATE', 'EXPENSE', 'UNITS', 'AMOUNT', 'ACTIONS'];

  const loansData = [
    {
        amount: 'N3,955,500',
        username: 'Samuel Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N4,955,500',
        username: 'Blessing Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N,6955,500',
        username: 'Samuel Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '5,550,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Stephanie Elon',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Gift Elon',
        date: 'Fri 14 Sept 2023 09:56 am GMT+1',
        paid: '5,450,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Stephanie Elon',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Samuel Elon',
        date: 'Thu 14 Sept 2022 09:56 am GMT+1',
        paid: '1,450,00',
    },
        {
        amount: 'N3,955,500',
        username: 'Samuel Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N4,955,500',
        username: 'Blessing Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N,6955,500',
        username: 'Samuel Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '5,550,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Stephanie Elon',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Gift Elon',
        date: 'Fri 14 Sept 2023 09:56 am GMT+1',
        paid: '5,450,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Samuel Elon',
        date: 'Thu 14 Sept 2022 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Samuel Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N4,955,500',
        username: 'Blessing Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N,6955,500',
        username: 'Samuel Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '5,550,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Stephanie Elon',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        paid: '1,450,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Gift Elon',
        date: 'Fri 14 Sept 2023 09:56 am GMT+1',
        paid: '5,450,00',
    },
    {
        amount: 'N3,955,500',
        username: 'Samuel Elon',
        date: 'Thu 14 Sept 2022 09:56 am GMT+1',
        paid: '1,450,00',
    },
  ];
  const agentsCommissionData = [
    {
        adsNumber: '3',
        username: 'Blessing Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5000',
    },
    {
        adsNumber: '6',
        username: 'Princess Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N6000',
    },
    {
        adsNumber: '15',
        username: 'Daniel Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N30000',
    },
    {
        adsNumber: '3',
        username: 'Goodness Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5,500',
    },
    {
        adsNumber: '32',
        username: 'Blessing Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5000',
    },
    {
        adsNumber: '6',
        username: 'Princess Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N6000',
    },
    {
        adsNumber: '10',
        username: 'Sharon Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N30000',
    },
    {
        adsNumber: '3',
        username: 'Richard Roney',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5,500',
    },
    {
        adsNumber: '3',
        username: 'Lawrence Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5000',
    },
    {
        adsNumber: '6',
        username: 'Princess Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N4000',
    },
    {
        adsNumber: '15',
        username: 'Daniel Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5000',
    },
    {
        adsNumber: '13',
        username: 'Elisha Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5,500',
    },
    {
        adsNumber: '3',
        username: 'Blessing Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5000',
    },
    {
        adsNumber: '6',
        username: 'Princess Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N6000',
    },
    {
        adsNumber: '15',
        username: 'Daniel Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N30000',
    },
    {
        adsNumber: '3',
        username: 'Goodness Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5,500',
    },
    {
        adsNumber: '3',
        username: 'Blessing Balogun',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5000',
    },
    {
        adsNumber: '6',
        username: 'Princess Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N6000',
    },
    {
        adsNumber: '15',
        username: 'Daniel Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N30000',
    },
    {
        adsNumber: '3',
        username: 'Goodness Robert',
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        amount: 'N5,500',
    },
  ];
  const systemChargesData = [
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Server',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Apple',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Google',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'OPT',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Google',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Server',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Apple',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Google',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'OPT',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Google',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Server',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Apple',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Google',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'OPT',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Google',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Server',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Apple',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Google',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'OPT',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        chargeOrUpdate: 'Google',
        amount: 'N110,000/$100',
    },
  ];
  const othersData = [
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Chairs Purchase',
        unit: '5',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Office Space Rent',
        unit: '3',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Landmark Stand',
        unit: '1',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Staff Meal',
        unit: '-',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Landmark Stand',
        unit: '1',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Chairs Purchase',
        unit: '5',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Office Space Rent',
        unit: '3',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Landmark Stand',
        unit: '1',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Staff Meal',
        unit: '-',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Landmark Stand',
        unit: '1',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Chairs Purchase',
        unit: '5',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Office Space Rent',
        unit: '3',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Landmark Stand',
        unit: '1',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Staff Meal',
        unit: '-',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Landmark Stand',
        unit: '1',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Chairs Purchase',
        unit: '5',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Office Space Rent',
        unit: '3',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Landmark Stand',
        unit: '1',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Staff Meal',
        unit: '-',
        amount: 'N110,000/$100',
    },
    {
        date: 'Thu 14 Sept 2023 09:56 am GMT+1',
        expense: 'Landmark Stand',
        unit: '1',
        amount: 'N110,000/$100',
    },
  ];

  const [loanSearch, setLoanSearch] = useState('');
  const [agentCommissionSearch, setAgentCommissionSearch] = useState('');
  const [systemChargeSearch, setsystemChargeSearch] = useState('');
  const [othersSearch, setOthersSearch] = useState('');

  const handleLoanSearch = (e) => {
    e.preventDefault();
    setLoanSearch(e.target.value);
  };

  const handleAgentCommissionSearch = (e) => {
    e.preventDefault();
    setAgentCommissionSearch(e.target.value);
  }

  const handleSystemChargeSearch = (e) => {
    e.preventDefault();
    setsystemChargeSearch(e.target.value);
  }

  const handleOthersSearch = (e) => {
    e.preventDefault();
    setOthersSearch(e.target.value);
  }


  const newLoansData = loansData.filter(data => (
    data.username.toLowerCase().includes(loanSearch.toLowerCase())
    || data.date.toLowerCase().includes(loanSearch.toLowerCase())
    || data.amount.toLowerCase().includes(loanSearch.toLowerCase())
    || data.paid.toLowerCase().includes(loanSearch.toLowerCase())
  ));

  const newAgentCommissionData = agentsCommissionData.filter(data => (
    data.amount.toLowerCase().includes(agentCommissionSearch.toLowerCase())
    || data.username.toLowerCase().includes(agentCommissionSearch.toLowerCase())
    || data.date.toLowerCase().includes(agentCommissionSearch.toLowerCase())
    || data.adsNumber.toLowerCase().includes(agentCommissionSearch.toLowerCase())
  ));

  const newSystemChargesData = systemChargesData.filter(data => (
    data.date.toLowerCase().includes(systemChargeSearch.toLowerCase())
    || data.chargeOrUpdate.toLowerCase().includes(systemChargeSearch.toLowerCase())
    || data.amount.toLowerCase().includes(systemChargeSearch.toLowerCase())
  ));

  const newOthersSearch = othersData.filter(data => (
    data.date.toLowerCase().includes(othersSearch.toLowerCase())
    || data.expense.toLowerCase().includes(othersSearch.toLowerCase())
    || data.unit.toLowerCase().includes(othersSearch.toLowerCase())
    || data.amount.toLowerCase().includes(othersSearch.toLowerCase())
  ));

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div className='flex justify-between items-center my-5'>
        <TransactionTotalCard title={'TOTAL EXPENSES'} amount={'N30.8M'} bgColor={'#0A1045'} />
        <TransactionTotalCard title={'TOTAL LOANS'} amount={'N30.8M'} bgColor={'#1B49FF'} />
        <TransactionTotalCard title={'TOTAL AGENTS COMMISSION'} amount={'N30.8M'} bgColor={'#2BB2FE'} />
        <TransactionTotalCard title={'TOTAL SYSTEM CHARGES'} amount={'N30.8M'} bgColor={'#F8D343'} />
        <TransactionTotalCard title={'TOTAL OTHER EXPENSES'} amount={'N30.8M'} bgColor={'#1EA06A'} />
      </div>

      <div className='grid grid-cols-2 gap-4'>
        <div className='border rounded-lg p-2.5'>
            <div className='flex justify-between items-center mb-5'>
                <div>
                    <h3 className='text-xl font-medium mb-1'>Loans</h3>
                    <p className='text-xs text-gray-500'>View details of all loans made</p>
                </div>
                <div className="search-filter">
                <div className="search-bar mr-3 flex justify-between item-center h-8" style={{width: '200px'}}>
                    <input type="text" value={loanSearch} onChange={handleLoanSearch} placeholder='Search' />
                    <div>
                        <img src={searchIcon} alt="" />
                    </div>
                </div>
                <div>
                  <img src={plusIcon} className='h-8 cursor-pointer' alt="" />
                </div>
              </div>
            </div>
            <div>
                {
                    loanSearch.length ? (
                        <TableListComponent headerList={loansHeaderList} dataList={newLoansData} itemComponent={LoanItem} fontSize={10} />
                    ) : (
                        <TableListComponent headerList={loansHeaderList} dataList={loansData} itemComponent={LoanItem} fontSize={10} />
                    )
                }
            </div>
        </div>

        <div className='border rounded-lg p-2.5'>
            <div className='flex justify-between items-center mb-5'>
                <div>
                    <h3 className='text-xl font-medium mb-1'>Agents commission</h3>
                    <p className='text-xs text-gray-500'>View details of all agents commission from house listings</p>
                </div>
                <div className="search-filter">
                    <div className="search-bar mr-3 flex justify-between item-center h-8" style={{width: '200px'}}>
                        <input type="text" value={agentCommissionSearch} onChange={handleAgentCommissionSearch} placeholder='Search' />
                        <div>
                            <img src={searchIcon} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={plusIcon} className='h-8 cursor-pointer' alt="" />
                    </div>
                </div>
            </div>
            <div>
                {
                    agentCommissionSearch.length ? (
                        <TableListComponent headerList={agentsCommissionHeaderList} dataList={newAgentCommissionData} itemComponent={AgentCommissionItem}fontSize={10}  />
                    ) : (
                        <TableListComponent headerList={agentsCommissionHeaderList} dataList={agentsCommissionData} itemComponent={AgentCommissionItem}fontSize={10}  />
                    )
                }
            </div>
        </div>

        <div className='border rounded-lg p-2.5'>
            <div className='flex justify-between items-center mb-5'>
                <div>
                    <h3 className='text-lg font-medium mb-1'>System Charges/Updates</h3>
                    <p className='text-xs text-gray-500'>View details of all expenses made on system charges/updates</p>
                </div>
                <div className="search-filter">
                    <div className="search-bar mr-3 flex justify-between item-center h-8" style={{width: '200px'}}>
                        <input type="text" value={systemChargeSearch} onChange={handleSystemChargeSearch} placeholder='Search' />
                        <div>
                            <img src={searchIcon} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={plusIcon} className='h-8 cursor-pointer' alt="" />
                    </div>
                </div>
            </div>
            <div>
                {
                    systemChargeSearch.length ? (
                        <TableListComponent headerList={systemChargesHeaderList} dataList={newSystemChargesData} itemComponent={SystemChargesItem}fontSize={10}  />
                    ) : (
                        <TableListComponent headerList={systemChargesHeaderList} dataList={systemChargesData} itemComponent={SystemChargesItem}fontSize={10}  />
                    )
                }
            </div>
        </div>

        <div className='border rounded-lg p-2.5'>
            <div className='flex justify-between items-center mb-5'>
                <div>
                    <h3 className='text-lg font-medium mb-1'>Others</h3>
                    <p className='text-xs text-gray-500'>View details of offline expenses</p>
                </div>
                <div className="search-filter">
                    <div className="search-bar mr-3 flex justify-between item-center h-8" style={{width: '200px'}}>
                        <input type="text" value={othersSearch} onChange={handleOthersSearch} placeholder='Search' />
                        <div>
                            <img src={searchIcon} alt="" />
                        </div>
                    </div>
                    <div>
                        <img src={plusIcon} className='h-8 cursor-pointer' alt="" />
                    </div>
                </div>
            </div>
            <div>
                {
                    othersSearch.length ? (
                        <TableListComponent headerList={othersHeaderList} dataList={newOthersSearch} itemComponent={OthersItem}fontSize={10}  />
                        ) : (
                        <TableListComponent headerList={othersHeaderList} dataList={othersData} itemComponent={OthersItem}fontSize={10}  />
                    )
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default FinanceTransactionTab
