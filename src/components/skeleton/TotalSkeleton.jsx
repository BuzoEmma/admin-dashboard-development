import React from 'react'
import SkeletonElement from './SkeletonElement'
import { Shimmer } from './Shimmer'

const TotalSkeleton = () => {
  return (
    <div className='skeleton-wrapper'>
        <div className='total-shimmer'>
            <SkeletonElement type="text"/>
            <SkeletonElement type="title"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
        </div>
        <Shimmer />
    </div>
  )
}

export default TotalSkeleton