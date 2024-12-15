import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoansTotalCard from '../LoansTabComponents/LoansTotalCard'
import PiechartSkeleton from '../../skeleton/PiechartSkeleton'
import LoansRequestPerformance from '../LoansTabComponents/LoansRequestPerformance'
import NoAvailableData from '../../generalComponents/NoAvailableData'
import OfflinePerformanceLabel from '../offlineComponents/OfflinePerformanceLabel'
import LoansAnalysisTable from '../LoansTabComponents/LoansAnalysisTable'
import LoansActivityTable from '../LoansTabComponents/LoansActivityTable'
import { getLoansActivity } from '../../../redux/Api'
import SkeletonElement from '../../skeleton/SkeletonElement'

const FinanceLoansTab = () => {
  const [loansAtivityData, setLoansActivityData] = useState([]);
  const [loadingActivities, setLoadingActivities] = useState(true)

  const loadingStatus = useSelector((state) => state?.requestedLoansData?.status);

  const requestedLoansData = useSelector((state) => state?.requestedLoansData?.requestedLoansData);
  const outstandingLoansData = useSelector((state) => state?.outstandingLoansData?.outstandingLoansData);
  const overdueLoansData = useSelector((state) => state?.overdueLoansData?.overdueLoansData);
  const completedLoansData = useSelector((state) => state?.completedLoansData?.completedLoansData);

//   console.log(requestedLoansData)
//   console.log(outstandingLoansData)
//   console.log(overdueLoansData)
//   console.log(completedLoansData)

const pendingLoans = requestedLoansData?.filter(loans => loans.status === 'PENDING')
const approvedLoans = requestedLoansData?.filter(loans => loans.status === 'APPROVED')
const declinedLoans = requestedLoansData?.filter(loans => loans.status === 'DECLINED')
const setupLoans = requestedLoansData?.filter(loans => loans.status === 'SETUP')

const loansPerformance = [pendingLoans?.length, approvedLoans?.length, declinedLoans?.length, setupLoans?.length]

let requestedLoansAmount = requestedLoansData?.reduce((accumulator, current) => accumulator + current?.amountToPay, 0);
let approvedLoansAmount = approvedLoans?.reduce((accumulator, current) => accumulator + current?.amountToPay, 0);
let outstandingLoansAmount = outstandingLoansData?.reduce((accumulator, current) => accumulator + current?.amountToPay, 0);
let refundedLoansAmount = completedLoansData?.reduce((accumulator, current) => accumulator + current?.amountSettled, 0);
let owedLoansAmount = overdueLoansData?.reduce((accumulator, current) => accumulator + current?.amountToPay, 0);


useEffect(()=> {
    getLoansActivity()
    .then(res => {
        // console.log(res.data?.loanActivities )
        setLoansActivityData(res.data?.loanActivities);
        setLoadingActivities(false)
    })
    .catch(err => console.log(err))

}, [])


  return (
    <div className=''>
        <div className='chart-area'>
            <div className="chart-area_item">
                <div className=' '>
                    {
                        loadingStatus === 'idle' ? (
                            <PiechartSkeleton />
                        ) : (
                            <div className=' flex justify-center items-center'>
                                <div>
                                    {
                                        loansPerformance.pending === 0 && loansPerformance.approved === 0 && loansPerformance.declined === 0 ? (
                                            <NoAvailableData notice='No Chart Data'/>
                                        ) : (
                                            <>
                                                <div className='mb-5'>
                                                    <p className="font-bold mb-5 text-center">Loans Request Performance</p>
                                                    <div className='piechart p-10'>
                                                        <div className='z-0'>
                                                            <LoansRequestPerformance loansPerformance={loansPerformance} />
                                                        </div>
                                                        <div className="home-piechart-center">
                                                            <div className='absolute' style={{width: '200px'}}>
                                                                <p className='text-sm mb-3'>Loan Request Performance</p>
                                                                <p>{pendingLoans?.length + approvedLoans?.length + declinedLoans?.length + setupLoans.length}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex justify-center'>
                                                    <OfflinePerformanceLabel color={'#DA9D62'} title={'Pending'} value={pendingLoans?.length || 0} />
                                                    <OfflinePerformanceLabel color={'#1CAA43'} title={'Approved'} value={approvedLoans?.length || 0} />
                                                    <OfflinePerformanceLabel color={'#E93B3B'} title={'Declined'} value={declinedLoans?.length || 0} />
                                                    <OfflinePerformanceLabel color={'#1B49FF'} title={'Setup'} value={setupLoans?.length || 0} />
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2 w-full  chart-area_item">
                <LoansTotalCard bgColor={'#0A1045'} title={'TOTAL REQUESTED LOAN'} amount={requestedLoansAmount} loadingStatus={loadingStatus} />
                <LoansTotalCard bgColor={'#1EA06A'} title={'TOTAL APPROVED LOANS'} amount={approvedLoansAmount} loadingStatus={loadingStatus} />
                <LoansTotalCard bgColor={'#1B49FF'} title={'TOTAL DISBURSED lOANS'} amount={outstandingLoansAmount} loadingStatus={loadingStatus} />
                <LoansTotalCard bgColor={'#0A1045'} title={'TOTAL REFUNDED LOANS'} amount={refundedLoansAmount} loadingStatus={loadingStatus} />
                <LoansTotalCard bgColor={'#1EA06A'} title={'TOTAL LOAN OWED'} amount={owedLoansAmount} loadingStatus={loadingStatus} />
            </div>
        </div>

        <div className='mb-5'>
            <LoansAnalysisTable loadingStatus={loadingStatus} />
        </div>

        <div>
            <LoansActivityTable data={loansAtivityData} loadingActivities={loadingActivities} />
        </div>
    </div>
  )
}

export default FinanceLoansTab
