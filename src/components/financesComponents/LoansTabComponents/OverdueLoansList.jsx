import React, { useState } from 'react'
import TableListComponent from '../../generalComponents/TableListComponent'
import OverdueLoansItem from './OverdueLoansItem'

const OverdueLoansList = ({ overdueLoans, loadingStatus }) => {
    const overdueLoansHeader = ['DATE CREATED', 'USERNAME', 'OVERDUE DATE', 'TOTAL LOAN', 'BALANCE', 'STATUS', 'ACTIONS']; 

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
                <TableListComponent headerList={overdueLoansHeader} itemComponent={OverdueLoansItem} dataList={overdueLoans} fontSize={10} />
              </div>
          </div>
          )
        }
      </>
  )
}

export default OverdueLoansList
