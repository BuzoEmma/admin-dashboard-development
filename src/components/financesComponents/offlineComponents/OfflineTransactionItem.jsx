import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { takeActionOnOfflineTransaction } from '../../../redux/Api';
import Loader from '../../generalComponents/Loader';
import Notification from './Notification';
import success from '../../../asserts/success.svg'
import failed from '../../../asserts/failed.svg'
import { getOfflineTransactions } from '../../../redux/Api';

const OfflineTransactionItem = ({itemData, func }) => {
  const dispatch = useDispatch()
  let status  = '';
  if(itemData?.isVerified === true && itemData?.isDenied === false) {
    status += 'Approved'
  } else if (itemData?.isVerified === false && itemData?.isDenied === false) {
    status += 'Pending'
  } else if ((itemData?.isVerified === false && itemData?.isDenied === true)) {
    status += 'Declined'
  }

  const [showAction, setShowAction] = useState(false);

  const [actionLoading, setActionLoading] = useState(false);

  const [showNotification, setShowNotification] = useState(false);

  const [notificationText, setNotificationText] = useState('');

  const [transactionStatus, setTransationStatus] = useState(false)

  const denyTransaction = {
    "action": "DENY",
    "depositId": itemData.depositId,
    "type": itemData.type
  }

  const acceptTransaction = {
    "action": "ACCEPT",
    "depositId": itemData.depositId,
    "type": itemData.type
  }

  const handleAction = (action) => {
    setShowAction(false);
    setActionLoading(true);

      takeActionOnOfflineTransaction(action)
      .then(response => {
        // console.log(response);
        setActionLoading(false);
        dispatch(getOfflineTransactions())
        setTransationStatus(response?.data?.success);
        setNotificationText(response?.data?.message);
        setShowNotification(true);
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <tr className='offline-transaction'>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.createdAt}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.userInformation?.surname} {itemData?.userInformation?.fname}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.amount}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">
            <div className='flex items-center pl-2 rounded-md text-[#71759D]'>
                <button onClick={() => {func(itemData?.documentOfProof?.data, true)}} className='bg-[#1B49FF1A] p-1'>View</button>
            </div>
        </td>
        <td className="whitespace-nowrap px-px py-4 border-b">
            <button className={`${status} rounded-lg`}>{status}</button>
        </td>
        <td className={status === 'Pending' ? 'whitespace-nowrap px-px py-4 border-b pl-6 cursor-pointer' : 'whitespace-nowrap px-px py-4 border-b pl-6 cursor-not-allowed' }>
          
          
          <div className='relative'>
            {/* action loader */}
            { actionLoading && <Loader /> }

            {<Notification title={transactionStatus ? 'Success!' : 'Failed'} text={notificationText} img={transactionStatus ? success : failed} show={showNotification} setShowNotification={setShowNotification} /> }

            <p onClick={() => {setShowAction(!showAction)}}>...</p>
            {
              showAction && status === 'Pending' && (
                <div className='absolute border rounded pt-3 w-32 -left-12 bg-white z-10'>
                  <div className='flex justify-between items-center py-2 px-4 mb-3'>
                    <h3 className=' text-base text-[#0A1045]'>Actions</h3>
                    <span className="material-symbols-outlined close text-base text-[#71759D] cursor-pointer" onClick={() => {setShowAction(!showAction)}}>close</span>
                  </div>
                  <p onClick={() => handleAction(acceptTransaction)} className=' hover:bg-slate-200 py-2 px-4 cursor-pointer border'>Approve</p>
                  <p onClick={() => handleAction(denyTransaction)} className='hover:bg-slate-200 py-2 px-4 cursor-pointer border'>Decline</p>
                </div>
              )
            }
          </div>
        </td>
    </tr>
  )
}

export default OfflineTransactionItem
