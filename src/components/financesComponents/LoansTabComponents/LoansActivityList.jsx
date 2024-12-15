import React, { useState } from 'react'
import LoansActivityItem from './LoansActivityItem'
import TableListComponent from '../../generalComponents/TableListComponent'

const LoansActivityList = ({ loansAtivity }) => {
    const loansActivitysHeader = ['ACTIVITY', 'AMOUNT', 'DATE', 'ACTIONS']
    return (
    <div>
      <div className='text-xs user-balance-table'>
        <TableListComponent headerList={loansActivitysHeader} itemComponent={LoansActivityItem} dataList={loansAtivity} fontSize={10} />
      </div>
    </div>
  )
}

export default LoansActivityList
