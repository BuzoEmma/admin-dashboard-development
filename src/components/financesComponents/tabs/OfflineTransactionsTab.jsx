import React, { useState } from 'react'
import searchIcon from '../../../asserts/Icons/search-icon.png'
import filterIcon from '../../../asserts/Icons/filter.png'
import TableListComponent from '../../generalComponents/TableListComponent'
import OfflineTransactionItem from '../offlineComponents/OfflineTransactionItem'
import OfflineTransactionPerformance from '../offlineComponents/OfflineTransactionPerformance'
import ReceiptModal from '../offlineComponents/ReceiptModal'

const OfflineTransactionsTab = ({data}) => {
  const offLineTransactionsHeader = ['DATE', 'USERNAME', 'AMOUNT', 'RECEIPT', 'STATUS', 'ACTIONS'];
  const [showReceipt, setShowReciept] = useState(false);
  const [receipt, setReciept] = useState('');
  const [searchItem, setSearchItem] = useState('');

  const displayReceipt = (receiptImg, visibility) => {
    setShowReciept(visibility);
    setReciept(receiptImg)
  }

  const closeReciept = () => {
    setShowReciept(false)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchItem(e.target.value)
  }

  const newOfflineData = data?.filter(item => (
    item?.userInformation?.surname.toLowerCase().includes(searchItem?.toLowerCase())
    || item?.userInformation?.fname.toLowerCase().includes(searchItem?.toLowerCase())
    || item?.createdAt?.toLowerCase().includes(searchItem?.toLowerCase())
  ))

  return (
    <div>
      <OfflineTransactionPerformance data={data} />
      <ReceiptModal visible={showReceipt} onClose={closeReciept} img={receipt} />
      <div className='chart-area_item'>
        <div className='flex justify-between items-center mb-5'>
          <div>
              <h3 className='text-xl font-medium mb-1'>Offline Transactions</h3>
              <p className='text-xs text-gray-500'>View details of all Offline transactions</p>
          </div>
          <div className="search-filter">
            <div className="search-bar mr-3 flex justify-between item-center h-8" style={{width: '200px'}}>
                <input type="text" value={searchItem} onChange={handleSearch} placeholder='Search' />
                <div>
                    <img src={searchIcon} alt="" />
                </div>
            </div>
            <div className='filter-area'>
                <img src={filterIcon} alt="" />
            </div>
          </div>
        </div>

        <div>
          {
            searchItem?.length ? (
              <TableListComponent headerList={offLineTransactionsHeader} dataList={newOfflineData} itemComponent={OfflineTransactionItem} func={displayReceipt} />
            ) : (
              <TableListComponent headerList={offLineTransactionsHeader} dataList={data} itemComponent={OfflineTransactionItem} func={displayReceipt} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default OfflineTransactionsTab
