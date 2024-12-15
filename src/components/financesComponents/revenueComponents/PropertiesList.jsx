import React, { useState } from 'react'
import PropertiesItem from './PropertiesItem'
import TableListComponent from '../../generalComponents/TableListComponent'

const PropertiesList = ({ properties }) => {
  const headerList = ['DATE', 'PROPERTY ID', 'PROPERTY VALUE', 'AGENT', 'LOCATION', 'ACTIONS']
  return (
    <div>
      <div className='text-xs user-balance-table'>
        <TableListComponent headerList={headerList} itemComponent={PropertiesItem} dataList={properties} fontSize={10} />
      </div>
    </div>
  )
}

export default PropertiesList
