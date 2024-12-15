import React from "react";
import TransactionItem from "./TransactionItem";
import { useState } from "react";
import Pagination from "../../generalComponents/Pagination";
import TableListComponent from "../../generalComponents/TableListComponent";

const TransactionList = ({ transactions }) => {
  const [searchItem, setSearchItem] = useState('');
  
  const headerList = ['DATE', 'CATEGORY', 'TRANSACTION ID', 'AMOUNT', 'STATUS', 'ACTIONS']

  return (
    <div>
      <div className='transaction-table'>
        <TableListComponent headerList={headerList} itemComponent={TransactionItem} dataList={transactions} fontSize={10} />
      </div>
    </div>
  );
};

export default TransactionList;
