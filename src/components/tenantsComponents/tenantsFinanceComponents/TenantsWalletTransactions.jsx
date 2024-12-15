import React, { useState } from 'react'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import TenantsWalletTransactionsItem from './TenantsWalletTransactionsItem'
import TableListComponent from '../../generalComponents/TableListComponent'
import AddTransactionPopup from '../../popComponents/AddTransactionPopup'



const TenantsWalletTransactions = ({ transactions  }) => {
  console.log(transactions)

  const [showAddTransactionPopup, setShowAddTransactionPopup] = useState(false);    
  const [searchItem, setSearchItem] = useState('');

  const sortedTransactions = transactions?.map(obj => { return { ...obj, date: new Date(obj.date) } })
  .sort((a, b) => b.date - a.date)

  const closeAddTransactionPopup = () => {
    setShowAddTransactionPopup(!showAddTransactionPopup)
  }
  
  const handleSearch = (e) => {
    setSearchItem(e.target.value)
  }

  const newDataList = transactions?.filter(transaction => (
    transaction?.txnType?.toLowerCase().includes(searchItem.toLowerCase())
     || transaction?.createdAt?.toLowerCase().includes(searchItem.toLowerCase())
     || transaction?.time?.toLowerCase().includes(searchItem.toLowerCase())
     || transaction?.description?.toLowerCase().includes(searchItem.toLowerCase())
     || transaction?._id?.toLowerCase().includes(searchItem.toLowerCase())
     || transaction?.amount.toLocaleString().toLowerCase().includes(searchItem.toLowerCase())
   ))

  return (
    <div className='card'>
      <div className="transaction-header">
        <div>
          <p className="title">WALLET TRANSACTIONS</p>
          <small>Lorem ipsum dolor sit amet consectetur.</small>
        </div>
        <div className="search-bar">
            <input type="text" value={searchItem} onChange={handleSearch} placeholder='Search transactions' />
            <div>
                <img src={searchIcon} alt="" />
            </div>
        </div>
        {/* <button onClick={() => {setShowAddTransactionPopup(true)}}>Add Transaction</button> */}
      </div>

      <AddTransactionPopup visible={showAddTransactionPopup} onClose={closeAddTransactionPopup} />

      <div>
        {
          searchItem ? (
            <TableListComponent dataList={newDataList} itemComponent={TenantsWalletTransactionsItem} fontSize={'10px'} />
          ) : (
            <TableListComponent dataList={sortedTransactions} itemComponent={TenantsWalletTransactionsItem} fontSize={'10px'} />
          )
        }
      </div>
    </div>
  )
}

export default TenantsWalletTransactions
