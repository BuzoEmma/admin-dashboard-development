import React from 'react'
import { useState } from 'react';
import LoanHistoryModal from './LoanHistoryModal';
import dateFormat from 'dateformat';

const LoanHistoryItem = ({itemData}) => {
  const [showLoanModal, setShowLoanModal] = useState(false);
  const closeReciept = () => {
    setShowLoanModal(false)
  }

  const appliedYear = itemData?.dateApplied.slice(0,4);
  const appliedMonth = itemData?.dateApplied.slice(5,7);
  const appliedDay = itemData?.dateApplied.slice(8,10);

  const appliedDate = appliedYear + ' ' + appliedMonth + ' ' + appliedDay;
  const appliedFullDate = dateFormat(appliedDate, 'fullDate');

  return (
    <tr>
      <LoanHistoryModal visible={showLoanModal} onClose={closeReciept} data={itemData} />
       <td className='whitespace-nowrap px-px py-4 border-b'>{appliedFullDate}</td>
       <td className='whitespace-nowrap px-px py-4 border-b'>{itemData?.amount.toLocaleString()}</td>
       <td className='whitespace-nowrap px-px py-4 border-b '><p className='text-[#1B49FF] cursor-pointer' onClick={() => {setShowLoanModal(!showLoanModal)}}>View</p></td>
    </tr>
  )
}

export default LoanHistoryItem
