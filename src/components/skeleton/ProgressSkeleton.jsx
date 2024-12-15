import React from 'react'
import SkeletonElement from './SkeletonElement'
import { Shimmer } from './Shimmer'

const ProgressSkeleton = () => {
  return (
    <div>
        <SkeletonElement type="title"/>
        <div className='flex flex-col justify-between'>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
        </div>
    </div>
  )
}

export default ProgressSkeleton
