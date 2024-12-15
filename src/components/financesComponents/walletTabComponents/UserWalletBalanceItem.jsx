import React from 'react'
import { abbreviateNumber } from "js-abbreviation-number";

const UserWalletBalanceItem = ({ itemData }) => {
  return (
    <tr>
        <td  className="whitespace-nowrap px-px py-4 border-b">{itemData?.accountInfo?.username}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.accountInfo?.nationality}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.accountInfo?.email}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.wallets?.currency?.data?.info?.accountValue ? abbreviateNumber(itemData?.wallets?.currency?.data?.info?.accountValue, 1) : 0 }</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.wallets?.coin?.data?.info?.accountValue ? itemData?.wallets?.coin?.data?.info?.accountValue.toFixed(2) : '0'}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">
            <button className={itemData?.accountInfo?.role === 'TENANT' ? `tenant-btn` : itemData?.accountInfo?.role === 'LANDLORD' ? `landlord-btn` : itemData?.accountInfo?.role === 'AGENT' ? `agent-btn` : itemData?.accountInfo?.role === 'USER' ? `seeker-btn` : '' }>{itemData?.accountInfo?.role}</button>
        </td>
        <td className="whitespace-nowrap px-3 py-4 border-b text-center">...</td>
    </tr>
  )
}

export default UserWalletBalanceItem
