import React from 'react'

const SkeletonProductInfo = () => {
  return (
    <div>
      <div className='w-full h-6 bg-primary-100 rounded-lg animate-pulse'></div>
      <div className='w-1/4 h-4 bg-primary-100 rounded-lg animate-pulse mt-2'></div>
      <div className='w-full h-4 bg-primary-100 rounded-lg animate-pulse mt-5'></div>
      <div className='w-1/2 h-4 bg-primary-100 rounded-lg animate-pulse mt-2'></div>
      <div className='w-1/2 h-4 bg-primary-100 rounded-lg animate-pulse mt-5'></div>
      <div className='w-1/3 h-8 bg-primary-100 rounded-lg animate-pulse mt-5'></div>
    </div>
  )
}

export default SkeletonProductInfo