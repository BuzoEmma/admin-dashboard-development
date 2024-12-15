import React, { useState } from 'react'
import ProgressBar from '../progressbar/ProgressBar'
import TenantsProgressSkeleton from '../skeleton/TenantsProgressSkeleton'

const TenantsProgress = ({ progress}) => {

  return (
      <div className='flex flex-col justify-between h-full'>
        <div className='tenant-progress'>
          <p>Paid rent</p>
          <ProgressBar percent={progress?.paidRent} height={8} containerColor={'#B7B8BA'} fillColor={'#4767E7'}/>
        </div>
  
        <div className='tenant-progress'>
          <p>owe rent</p>
          <ProgressBar percent={progress?.oweRent} height={8} containerColor={'#B7B8BA'} fillColor={'#4767E7'}/>
        </div>
  
        <div className='tenant-progress'>
          <p>Saving</p>
          <ProgressBar percent={progress?.tenantSaving} height={8} containerColor={'#B7B8BA'} fillColor={'#4767E7'}/>
        </div>
  
        <div className='tenant-progress'>
          <p>Up-to-date</p>
          <ProgressBar percent={progress?.upToDate} height={8} containerColor={'#B7B8BA'} fillColor={'#4767E7'}/>
        </div>
      </div>
  )
}

export default TenantsProgress
