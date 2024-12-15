import React from 'react'

const OfflinePerformanceLabel = ({ color, title, value}) => {
  return (
    <div className='flex items-center mb-4'>
        <div className='flex items-center pr-0'>
            <div className="color w-2.5 h-2.5 rounded-full" style={{backgroundColor: color}}></div>
            <p className='-ml-4 text-xs'>{title}</p>
        </div>
        <p className='text-xs'>{value}</p>
    </div>
  )
}

export default OfflinePerformanceLabel
