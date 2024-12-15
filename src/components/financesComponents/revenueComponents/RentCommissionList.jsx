import React from 'react'
import RentCommissionItem from './RentCommissionItem';
import TableListComponent from '../../generalComponents/TableListComponent';

const RentCommissionList = ({ rentCommissions }) => {
  const headerList = ['DATE', 'TENANT', 'RENT AMOUNT', 'COMMISSION', 'LOCATION', 'ACTION'];

  return (
    <div>
      <div className='text-xs'>
        <TableListComponent headerList={headerList} itemComponent={RentCommissionItem} dataList={rentCommissions} fontSize={10} />
      </div>
    </div>
  )
}

export default RentCommissionList
