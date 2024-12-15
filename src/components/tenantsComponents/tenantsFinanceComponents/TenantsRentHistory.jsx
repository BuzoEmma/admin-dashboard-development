import React from 'react'
import TableListComponent from '../../generalComponents/TableListComponent'
import RentHistoryItem from './RentHistoryItem'

const TenantsRentHistory = () => {
  const RentHistoryHeader = ['DATE', 'ACTION', 'AMOUNT']
  const rentHistory = [
    {
      date: '14/09/23',
      action: 'Habeeb paid rent to landlord',
      amount : '3,500,000'
    },
    {
      date: '14/09/23',
      action: 'Transfer from DAVID CARRICK',
      amount : '292,000'
    },
    {
      date: '14/09/23',
      action: 'Habeeb paid rent to landlord',
      amount : '3,500,000'
    },
    {
      date: '14/09/23',
      action: 'Transfer from DAVID CARRICK',
      amount : '292,000'
    },
    {
      date: '14/09/23',
      action: 'Transfer from DAVID CARRICK',
      amount : '292,000'
    },
    {
      date: '14/09/23',
      action: 'Transfer from DAVID CARRICK',
      amount : '292,000'
    },
    {
      date: '14/09/23',
      action: 'Transfer from DAVID CARRICK',
      amount : '292,000'
    },
  ]
  return (
    <div>
      <TableListComponent itemComponent={RentHistoryItem} dataList={rentHistory} fontSize={8} />
    </div>
  )
}

export default TenantsRentHistory
