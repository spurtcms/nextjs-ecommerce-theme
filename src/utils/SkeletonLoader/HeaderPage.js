import React from 'react'

function HeaderPageSkeleton() {
  return (
    <>
     <div className="hidden sm:ml-6 lg:block">
      <div className="flex gap-6 ">
        {[1,2,3,4,5].map((data,index)=>(
            <div key={index} class="w-9 h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
        ))}
      </div>
      </div>
    </>
  )
}

export default HeaderPageSkeleton
