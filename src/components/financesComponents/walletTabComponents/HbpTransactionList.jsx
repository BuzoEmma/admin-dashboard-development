import React, {useState} from 'react'
import Pagination from '../.././generalComponents/Pagination'
import HbpTransactionItem from './HbpTransactionItem';
import TableListComponent from '../../generalComponents/TableListComponent';

const HbpTransactionList = ({ transactions }) => {

  const headerList  = ['AMOUNT', 'TRANSACTION ID', 'DATE', 'STATUS', 'ACTIONS']
    
  return (
    <div>
        <div className='user-balance-table transaction-table text-xs'>
          <TableListComponent headerList={headerList} itemComponent={HbpTransactionItem} dataList={transactions} fontSize={10} />
        </div>
    </div>
  )
}

export default HbpTransactionList
