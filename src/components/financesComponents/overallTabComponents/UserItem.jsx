import React from 'react'

const UserItem = ({ itemData }) => {
  return (
    <tr className='finance-user-td' style={{fontSize: '10px'}}>
      <td className="whitespace-nowrap  py-4 border-b">{itemData?.accountInfo?.surname} {itemData.accountInfo?.fname}</td>
      <td className="whitespace-nowrap  py-4 border-b">{itemData?.accountInfo?.nationality}</td>
      <td className="whitespace-nowrap  py-4 border-b">{itemData?.accountInfo?.email}</td>
      <td className="whitespace-nowrap  py-4 border-b">
        {
          itemData?.tenancyInfo !== null ? <button className='tenant-btn'>Tenant</button> :
          itemData?.agentAccount !== null ? <button className='agent-btn'>Agent</button> :
          <button className='seeker-btn'>User</button>
        }
      </td>
      <td className='agents-action'>...</td><td className="whitespace-nowrap px-px py-4 border-b">{itemData?.size}</td> 
    </tr>
  )
}

export default UserItem
