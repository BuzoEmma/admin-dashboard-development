import React from 'react'
import UserItem from './UserItem'
import TableListComponent from "../../generalComponents/TableListComponent";

const UsersList = ({ users }) => {
  const headerList = ['USERNAME', 'LOCATION', 'EMAIL', 'USERTYPE', 'ACTIONS']
  return (
    <div>
      <div className=''>
        <TableListComponent headerList={headerList} itemComponent={UserItem} dataList={users} fontSize={10} />
      </div>
    </div>
  )
}

export default UsersList
