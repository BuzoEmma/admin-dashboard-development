import React, { useState } from 'react'
import UserWalletBalanceItem from './UserWalletBalanceItem'
import TableListComponent from '../../generalComponents/TableListComponent'
// import Pagination from '../.././generalComponents/Pagination'

const UserWalletBalanceList = ({ data }) => {

  const headerList = ['USERNAME', 'LOCATION', 'EMAIL', 'NGN BAL.', 'HBP BAL.', 'USERTYPE', 'ACTIONS']
    
  return (
    <div>
      <div className=''>
        <TableListComponent headerList={headerList} itemComponent={UserWalletBalanceItem} dataList={data} fontSize={10} />
      </div>
    </div>
  )
}

export default UserWalletBalanceList
