import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import Select from 'react-select';
import "react-datepicker/dist/react-datepicker.css";


const AddTransactionPopup = ({ visible, onClose}) => {

  const transactionOptions = [
    { label: 'Debit', value: 'Debit'},
    { label: 'Credit', value: 'Credit'}
  ];
  const [transactionType, setTransactionType] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionDate, setTransactionDate] = useState(new Date());
  const [transactionTime, setTransactionTime] = useState('');
  const [transactionDescription, setTransactionDescription] = useState('Description');



  const [transactionDetails, setTransactionDetails] = useState({
    transactionType: '',
    transactionTime: '',
    transactionDate: '',
    transacionDescription: '',
    transactionAmount: ''
  })

  const handleClose = (e) => {
    if(e.target.id === 'container') onClose()
  }

 const handleTransactionType = (value) => {
  setTransactionType(value);
  setTransactionDetails({...transactionDetails, transactionType: value})
 }

 const handleAmount = (e) => {
  setTransactionAmount(e.target.value);
  setTransactionDetails({...transactionDetails, transactionAmount: e.target.value})
 }

 const handleDescription = (e) => {
  setTransactionDescription(e.target.value);
  setTransactionDetails({...transactionDetails, transacionDescription: e.target.value})
 }

  if(!visible) {
    return null
  }

  return (
    <div id='container' onClick={handleClose} className='fixed inset-0 bg-black bg-opacity-30  z-50
    flex justify-center items-center'>
      <div className='bg-white p-5 rounded-md w-96'>
        <div className='flex justify-between items-center mb-10 border-b pb-3'>
          <h2 className='font-bold'>Add Transaction</h2>
          <span className="material-symbols-outlined close text-base text-[#71759D] cursor-pointer font-bold" onClick={onClose}>close</span>
        </div>
        
        <form>
          <div className="mb-5">
            <Select className='w-72 placeholder:text-[#71759D] placeholder:text-xs text-[#71759D]' placeholder={'Transaction Type'} options={transactionOptions} onChange={opt => handleTransactionType(opt.value)} />
          </div>

          <div className="flex mb-5">
            <div className="border border-[#D9DDEE] rounded p-2 w-72">
              <DatePicker className='text-[#71759D] w-full outline-none placeholder:text-xs' selected={transactionDate} onChange={(date) => setTransactionDate(date)} />
            </div>
          </div>

          <div className='mb-5'>
            <textarea className='border p-3 rounded text-[#71759D] h-32 outline-none placeholder:text-xs' name="" id="" cols="30" rows="10" value={transactionDescription} onChange={handleDescription}>Details</textarea>
          </div>

          <input type="text" className='border rounded pt-1 pb-2 pl-2 mb-5 w-72 placeholder:text-[#71759D] outline-none' value={transactionAmount} onChange={handleAmount} placeholder='Amount' /><br />

          <button className='text-center bg-[#1B49FF] text-[#FFFFFF] w-full rounded py-3'>Add</button>
        </form>
      </div>
    </div>
  )
}

export default AddTransactionPopup
