import React from 'react'
import ActiveTenant from './ActiveTenant'
import NoAvailableData from '../../generalComponents/NoAvailableData'
import TableListComponent from '../../generalComponents/TableListComponent'

const ActiveTenantsList = ({ tenantsData }) => {
    const tenantsHeadList = ['USERNAME', 'EMAIL', 'LOCATION', 'PHONE NUMBER', 'RENT STATUS'];
  return (
    <div>
        <TableListComponent dataList={tenantsData} headerList={tenantsHeadList} itemComponent={ActiveTenant}  />
    </div>
  )
}

export default ActiveTenantsList
