import React from 'react'
import ProgressBar from '../../progressbar/ProgressBar'
import dateFormat from "dateformat";

const OutstandingLoansItem = ({ itemData }) => {

  const percent = ( parseInt(itemData?.amountSettled) / parseInt(itemData?.amountReceived) ) * 100

  const loanAppliedYear = itemData?.dateDisbursed.slice(0,4);
  const loanAppliedMonth = itemData?.dateDisbursed.slice(5,7);
  const loanAppliedDay = itemData?.dateDisbursed.slice(8,10);

  const loanAppliedDate = loanAppliedYear + ' ' + loanAppliedMonth + ' ' + loanAppliedDay;
  const loanAppliedFullDate = dateFormat(loanAppliedDate, 'fullDate');

  const dueYear = itemData?.loanDuration?.to.slice(0,4);
  const dueMonth = itemData?.loanDuration?.to.slice(5,7);
  const dueDay = itemData?.loanDuration?.to.slice(8,10);

  const dueDate = dueYear + ' ' + dueMonth + ' ' + dueDay
  const dueFullDate = dateFormat(dueDate, "fullDate");


  const loanDueDate = new Date(itemData?.loanDuration?.to?.slice(0,10))
    // Get today's date
  const today = new Date();

    // Calculate the difference in milliseconds
  const differenceInMilliseconds =  loanDueDate - today;

  // Convert milliseconds to days
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  return (
    <tr className=''>
        <td className="whitespace-nowrap px-px py-4 border-b">{loanAppliedFullDate}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.userDetails?.username}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-left">
          <p className=''>N {itemData?.monthlyPayment || 0}</p>
          <p className='text-[#E93B3B]'>Due in <span className='font-semibold'>{differenceInDays} days</span></p>
        </td>
        <td className="whitespace-nowrap px-px mr-5 py-4 border-b">
          <ProgressBar percent={percent} height={5} containerColor={'#e2e9ff'} fillColor={'#1B49FF'} />
          <p className='mt-1'>{itemData?.amountSettled?.toLocaleString()} of {itemData?.amountReceived?.toLocaleString()}</p>
        </td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">{(itemData?.amountReceived - itemData?.amountSettled).toLocaleString()}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">
          <button className='bg-[#1B49FF] text-white'>{itemData?.status}</button>
        </td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default OutstandingLoansItem
