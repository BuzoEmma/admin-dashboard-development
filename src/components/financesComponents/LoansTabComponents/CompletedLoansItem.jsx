import React from 'react'
import dateFormat, { masks } from "dateformat";

const CompletedLoansItem = ({ itemData }) => {
  
  const loanAppliedYear = itemData?.dateApplied.slice(0,4);
  const loanAppliedMonth = itemData?.dateApplied.slice(5,7);
  const loanAppliedDay = itemData?.dateApplied.slice(8,10);

  const loanAppliedDate = loanAppliedYear + ' ' + loanAppliedMonth + ' ' + loanAppliedDay;
  const loanAppliedFullDate = dateFormat(loanAppliedDate, 'fullDate')

  const loanCompletedYear = itemData?.dateSettled.slice(0,4);
  const loanCompletedMonth = itemData?.dateSettled.slice(5,7);
  const loanCompletedDay = itemData?.dateSettled.slice(8,10);

  const loanCompletedDate = loanCompletedYear + ' ' + loanCompletedMonth + ' ' + loanCompletedDay;
  const loanCompletedFullDate = dateFormat(loanCompletedDate, 'fullDate')

  const loanDisbursedDate = new Date(itemData?.loanDuration?.from?.slice(0,10))
  // Get today's date
  const loanSettledDate = new Date(itemData?.dateSettled?.slice(0,10));

    // Calculate the difference in milliseconds
  const differenceInMilliseconds =  loanSettledDate - loanDisbursedDate;

// Convert milliseconds to days
const noOfDaysToSettle = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
return (
    <tr className='loans-analysis-btn'>
        <td className="whitespace-nowrap px-px py-4 border-b">{loanAppliedFullDate}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.userDetails?.username}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.amountReceived?.toLocaleString()}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.amountSettled?.toLocaleString()}</td>
        <td className="whitespace-nowrap px-px py-4 border-b font-semibold">{loanCompletedFullDate}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{noOfDaysToSettle}</td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default CompletedLoansItem
