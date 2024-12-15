import React from 'react'
import SkeletonElement from './SkeletonElement'
import { Shimmer } from './Shimmer'

const BarchartSkeleton = () => {
  return (
    <div className='skeleton-wrapper'>
        <div className='total-shimmer'>
            <SkeletonElement type="title"/>
            <div className='skeleton-group'>
                <SkeletonElement type="shortcandle"/>
                <SkeletonElement type="mediumcandle"/>
                <SkeletonElement type="tallcandle"/>
                <SkeletonElement type="mediumcandle"/>
                <SkeletonElement type="shortcandle"/>
                <SkeletonElement type="shortcandle"/>
                <SkeletonElement type="tallcandle"/>
                <SkeletonElement type="mediumcandle"/>
                <SkeletonElement type="shortcandle"/>
            </div>
            <SkeletonElement type="text"/>
            <SkeletonElement type="text"/>
        </div>
        <Shimmer />
    </div>
  )
}

export default BarchartSkeleton