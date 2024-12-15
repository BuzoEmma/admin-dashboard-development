import React, { useState } from 'react'
import CompletedLoansItem from './CompletedLoansItem'
import TableListComponent from '../../generalComponents/TableListComponent'

const CompletedLoansList = ({ completedLoans, loadingStatus }) => {
    const completedLoansHeader = ['DATE CREATED', 'USERNAME', 'AMOUNT RECIEVED', 'AMOUNT PAID', 'DATE COMPLETED', 'NO OF DAYS TO COMPLETE', 'ACTIONS']
    return (
      <>
      {
        loadingStatus === 'idle' ? 
        (
          <div className='flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="40" height="40" style={{'shapeRendering': 'auto', 'display': 'block', 'background': 'rgb(255, 255, 255)'}} xmlns:xlink="http://www.w3.org/1999/xlink"><g><circle stroke-dasharray="164.93361431346415 56.97787143782138" r="35" stroke-width="10" stroke="#dddddd" fill="none" cy="50" cx="50">
              <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="0.5208333333333333s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
            </circle><g></g></g></svg>
          </div>
        ) : (
          <div>
          <div className='text-xs user-balance-table'>
            <TableListComponent headerList={completedLoansHeader} itemComponent={CompletedLoansItem} dataList={completedLoans} fontSize={10} />
          </div>
        </div>
        )
      }
    </>
  )
}

export default CompletedLoansList
