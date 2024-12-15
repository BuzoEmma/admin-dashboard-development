import React from 'react'
import InterestItem from './InterestItem'
import TableListComponent from '../../generalComponents/TableListComponent'

const InterestList = ({ interests }) => {
  const headerList = ['DATE', 'TENANT', 'RENT AMOUNT', 'LOAN + INTEREST', 'LOCATION', 'DURATION', 'ACTIONS']
  return (
    <div>
        <div className='text-xs'>
          <TableListComponent headerList={headerList} itemComponent={InterestItem} dataList={interests} fontSize={10} />
        </div>
    </div>
  )
}

export default InterestList
