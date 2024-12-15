import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import dateFormat from "dateformat";
import { takeActionOnApprovedLoan, getRequestedLoans, getOutstandingLoans } from '../../../redux/Api';
import Loader from '../../generalComponents/Loader';
import Notification from '../offlineComponents/Notification';
import success from '../../../asserts/success.svg'
import failed from '../../../asserts/failed.svg'
import axios from 'axios';


const RequestedLoansItem = ({ itemData }) => {
  // console.log(itemData)
  const ApiUrl = import.meta.env.VITE_API_KEY;
  const dispatch = useDispatch()
  const [showAction, setShowAction] = useState(false);

  const [actionLoading, setActionLoading] = useState(false);

  const [showNotification, setShowNotification] = useState(false);

  const [notificationText, setNotificationText] = useState('Failed to disburse loan');

  const [transactionStatus, setTransationStatus] = useState(false)

  const loanAppliedYear = itemData?.dateApplied.slice(0,4);
  const loanAppliedMonth = itemData?.dateApplied.slice(5,7);
  const loanAppliedDay = itemData?.dateApplied.slice(8,10);

  const loanAppliedDate = loanAppliedYear + ' ' + loanAppliedMonth + ' ' + loanAppliedDay;
  const loanAppliedFullDate = dateFormat(loanAppliedDate, 'fullDate')

  const disburseAction = {
    "loanId": `${itemData?._id}`,
    "status": "DISBURSED"
  }

   const takeActionOnApprovedLoan = async (action) => {
    return await axios.put(ApiUrl + `/rem/mgt/finance/update-loan-status`, action)
    .then(response => {
      console.log(response)
      setTransationStatus(response?.data?.status);
      setNotificationText(response?.data?.message);
      setShowNotification(true);
    })
    .catch(err => {
        console.log(err);
        // console.log(err?.response?.data?.message);
        setTransationStatus(err?.response?.data?.success);
        setNotificationText(err?.response?.data?.message);
        setShowNotification(true);
    })
}

  const handleAction = () => {
    setShowAction(false);
    setActionLoading(true);

    takeActionOnApprovedLoan(disburseAction)
    .then(response => {
      console.log(response);
      setActionLoading(false);
      dispatch(getRequestedLoans())
      dispatch(getOutstandingLoans())
    })
    .catch(err => {
      console.log(err)
    })
  }

  // useEffect(()=>{}, [dispatch])

  return (
    <tr className='loans-analysis-btn'>
        <td className="whitespace-nowrap px-px py-4 border-b">{loanAppliedFullDate}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.userDetails?.username}</td>
        {/* <td className="whitespace-nowrap px-px py-4 border-b">{itemData?.rentAmount}</td> */}
        <td className="whitespace-nowrap px-px py-4 border-b ps-7">{itemData?.creditScore}</td>
        <td className="whitespace-nowrap px-px py-4 border-b ps-7">{itemData?.amountReceived.toLocaleString()}</td>
        <td className="whitespace-nowrap px-px py-4 border-b">
          <button className={itemData?.status === 'DENIED' ? 'Denied' : itemData?.status === 'APPROVED' ? 'Approved' : 'Pending'}>{itemData?.status}</button>
        {/* {
          itemData?.status === 'Pending' ? <button className='Pending'>Pending</button> :
          itemData?.status === 'Approved' ? <button className='Approved'>Approved</button> :
          <button className='DENIED'>Declined</button>
        } */}
        </td>
        <td className="whitespace-nowrap px-px py-4 border-b text-center">
          <div className='relative'>
            {/* action loader */}
            { actionLoading && <Loader /> }

            {<Notification title={transactionStatus ? 'Success!' : 'Failed'} text={notificationText} img={transactionStatus ? success : failed} show={showNotification} setShowNotification={setShowNotification} /> }

            <p className={itemData?.status === 'APPROVED' ? 'cursor-pointer' : 'cursor-not-allowed'}  onClick={() => {setShowAction(!showAction)}}>...</p>
            {
              showAction && itemData?.status === 'APPROVED' && (
                <div className='absolute border rounded pt-3 w-32 right-0 top-2 bg-white z-20'>
                  <div className='flex justify-between items-center py-2 px-4 mb-3'>
                    <h3 className=' text-base text-[#0A1045]'>Actions</h3>
                    <span className="material-symbols-outlined close text-base text-[#71759D] cursor-pointer" onClick={() => {setShowAction(!showAction)}}>close</span>
                  </div>
                  <p onClick={() => handleAction()} className=' hover:bg-slate-200 py-2 px-4 cursor-pointer border'>Disburse</p>
                </div>
              )
            }
          </div>
        </td>

    </tr>
  )
}

export default RequestedLoansItem
