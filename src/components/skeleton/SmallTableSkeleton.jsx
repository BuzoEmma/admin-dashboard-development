import React from 'react'
import SkeletonElement from './SkeletonElement'
import { Shimmer } from './Shimmer'

const SmallTableSkeleton = () => {
  return (
    <div className='skeleton-wrapper'>
        <div className='total-shimmer'>
            <div className="row-shimmer">
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
            </div>
            <div className="row-shimmer">
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
            </div>
            <div className="row-shimmer">
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
            </div>
            <div className="row-shimmer">
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
            </div>
            <div className="row-shimmer">
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
            </div>
            <div className="row-shimmer">
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
            </div>
            <div className="row-shimmer">
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
                <SkeletonElement type="table-title"/>
            </div>
        </div>
        <Shimmer />
    </div>
  )
}

export default SmallTableSkeleton