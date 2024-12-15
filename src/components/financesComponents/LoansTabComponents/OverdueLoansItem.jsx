import React from 'react'
import ProgressBar from '../../progressbar/ProgressBar'
import dateFormat, { masks } from "dateformat";


const OverdueLoansItem = ({ itemData }) => {
  // const percent = ( parseInt(itemData?.amountSettled) / parseInt(itemData?.amountToPay) ) * 100
  const percent = itemData?.amountSettled > itemData?.amountToPay ? 0 : ( parseInt(itemData?.amountSettled) / parseInt(itemData?.amountToPay) ) * 100

  const overdueYear = itemData?.loanDuration?.to.slice(0,4);
  const overdueMonth = itemData?.loanDuration?.to.slice(5,7);
  const overdueday = itemData?.loanDuration?.to.slice(8,10);

  const overdueDate = overdueYear + ' ' + overdueMonth + ' ' + overdueday
  const overdueFullDate = dateFormat(overdueDate, "fullDate");


  const loanDueDate = new Date(itemData?.loanDuration?.to?.slice(0,10))
    // Get today's date
  const today = new Date();

    // Calculate the difference in milliseconds
  const differenceInMilliseconds = today - loanDueDate;

  // Convert milliseconds to days
  const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

  const loanAppliedYear = itemData?.dateApplied.slice(0,4);
  const loanAppliedMonth = itemData?.dateApplied.slice(5,7);
  const loanAppliedDay = itemData?.dateApplied.slice(8,10);

  const loanAppliedDate = loanAppliedYear + ' ' + loanAppliedMonth + ' ' + loanAppliedDay;
  const loanAppliedFullDate = dateFormat(loanAppliedDate, 'fullDate')

  // console.log(overdueFullDate, differenceInDays);

  return (
    <tr className='loans-analysis-btn'>
        <td className="whitespace-nowrap px-px py-4 border-b">{loanAppliedFullDate}</td>
        {/* <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.dateApplied}</td> */}
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.userDetails?.username}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">
          <p className='text-[#4E527B] font-semibold pb-1'>{overdueFullDate}</p>
          <p className='text-[#E93B3B]'>Overdue <span className='font-semibold'>{differenceInDays} days ago</span></p>
        </td>
        <td className="whitespace-nowrap px-px py-4 border-b">
          <ProgressBar percent={percent} height={5} containerColor={'#F3EDED'} fillColor={'#0F1EA4'} />
          <p className='mt-1'>{itemData?.amountSettled?.toLocaleString()} of {(((itemData?.interestRate / itemData?.amountReceived) * 100) + itemData?.amountReceived).toLocaleString()}</p>
        </td>        
        <td className="whitespace-nowrap px-px py-4 border-b text-center">{(((itemData?.interestRate / itemData?.amountReceived) * 100) + itemData?.amountReceived - (itemData?.amountSettled)).toLocaleString()}</td>
        {/* <td className="whitespace-nowrap py-4 border-b">{itemData?.amountReceived?.toLocaleString()}</td> */}
        {/* <td className="whitespace-nowrap py-4 border-b">{itemData?.amountToPay.toLocaleString()}</td> */}
        <td className="whitespace-nowrap px-px py-4 border-b">
          <button className='bg-[#E9EDFF] text-[#1B49FF]'>{itemData?.status}</button>
        </td>        
        <td className="whitespace-nowrap px-px py-4 border-b text-center">...</td>
    </tr>
  )
}

export default OverdueLoansItem
