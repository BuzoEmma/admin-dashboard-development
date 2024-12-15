import React, { useState } from 'react'
import RegistrationsItem from './RegistrationsItem'
import TableListComponent from '../../generalComponents/TableListComponent';

const RegistrationsList = ({ registrations }) => {
  const headerList = ['DATE', 'AMOUNT', 'USERNAME', 'TYPE', 'LOCATION', 'ACTIONS']
  return (
    <div>
      <div className='text-xs'>
        <TableListComponent headerList={headerList} itemComponent={RegistrationsItem} dataList={registrations} fontSize={10} />
      </div>
    </div>
  )
}

export default RegistrationsList
