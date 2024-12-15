import React from 'react'
import SkeletonElement from './SkeletonElement'
import { Shimmer } from './Shimmer'

const TenantsFinanceSkeleton = () => {
  return (
    <div className='skeleton-wrapper'>
        <div className='total-shimmer finance'>
            <SkeletonElement type="circle"/>
            <div className='total-shimmer'>
              <div className='flex'>
                <SkeletonElement type="title"/>
                <SkeletonElement type="title"/>
              </div>

              <div className='flex mb-5'>
                <SkeletonElement type="title"/>
                <SkeletonElement type="title"/>
              </div>

              <div className='flex mr-5'>
                <SkeletonElement type="title"/>
                <SkeletonElement type="title"/>
              </div>

              <div className='flex'>
                <SkeletonElement type="title"/>
                <SkeletonElement type="title"/>
              </div>
            </div>
        </div>
        <Shimmer />
    </div>
  )
}

export default TenantsFinanceSkeleton
