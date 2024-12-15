import React from 'react'
import Loader from '../../generalComponents/Loader'
import LoanModalItem from './LoanModalItem'
import dateFormat from 'dateformat'


const LoanHistoryModal = ({ visible, onClose, data }) => {

  const appliedYear = data?.dateApplied.slice(0,4);
  const appliedMonth = data?.dateApplied.slice(5,7);
  const appliedDay = data?.dateApplied.slice(8,10);

  const appliedDate = appliedYear + ' ' + appliedMonth + ' ' + appliedDay;
  const appliedFullDate = dateFormat(appliedDate, 'fullDate');


  const startingYear = data?.loanDuration?.from.slice(0,4);
  const startingMonth = data?.loanDuration?.from.slice(5,7);
  const startingDay = data?.loanDuration?.from.slice(8,10);

  const startingDate = startingYear + ' ' + startingMonth + ' ' + startingDay;
  const startingFullDate = dateFormat(startingDate, 'fullDate');

  const expirationYear = data?.loanDuration?.to.slice(0,4);
  const expirationMonth = data?.loanDuration?.to.slice(5,7);
  const expirationDay = data?.loanDuration?.to.slice(8,10);

  const expirationDate = expirationYear + ' ' + expirationMonth + ' ' + expirationDay;
  const expirationFullDate = dateFormat(expirationDate, 'fullDate');


  const handleClose = (e) => {
    if(e.target.id === 'container') onClose()
  }

  if(!visible) {
    return null
  }

  return (
    <>
      <div id='container' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50
      flex justify-center items-center'>
        <div className='bg-white p-8 rounded lg:w-[600px] md:w-[500px] w-full'>
          <div className='flex justify-between items-center mb-5'>
            <h2 className='font-bold'>LOAN HISTORY</h2>
            <span className="material-symbols-outlined close text-base text-[#71759D] cursor-pointer font-bold" onClick={onClose}>close</span>
          </div>
          <div className='grid grid-cols-4 gap-4'>
            <LoanModalItem name={'Date Applied'} value={appliedFullDate} />
            <LoanModalItem name={'Starting'} value={startingFullDate} />
            <LoanModalItem name={'Expiration'} value={expirationFullDate} />
            <LoanModalItem name={'Rent Loan'} value={`N${data?.rentAmount?.toLocaleString()}`} />
            <LoanModalItem name={'Interest'} value={`${data?.loanInterestPercentage}%`} />
            {/* <LoanModalItem name={'Payment Freqency'} value={data?.savings?.savingPreferences?.frequency} />  */}
            {/* <LoanModalItem name={'Freqency Amount'} value={data?.savings?.savingPreferences?.amount} />  */}
            {/* <LoanModalItem name={'Saved'} value={data?.savings?.savingPreferences?.amountSaved} /> */}
            <LoanModalItem name={'Paid Loan'} value={`N${data?.totalAmountSettled.toLocaleString()}`} />
            <LoanModalItem name={'Outstanding Loan'} value={`N${(data?.payAmount - data?.totalAmountSettled).toLocaleString()}`} />
        </div>
        </div>
      </div>
    </>
  )
}

export default LoanHistoryModal
