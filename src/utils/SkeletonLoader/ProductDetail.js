import React from 'react'

function ProductDetailSkeleton() {
  return (
    <>
    <section className="px-5 lg:px-10 pb-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-8 border-b border-grey mb-6">
        {/* ds */}
        <div className="grid sm:grid-cols-2 grid-cols-1   p-2 gap-4  h-fit md:sticky relative top-6 ">
            {[1,2].map((dd,index)=>(
                <>
                <div className="sm:col-span-2 grid place-items-center  rounded-5 overflow-hidden">
                 <div className="w-full ">
                    <div role="status" class="w-full flex items-center justify-center h-80 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                        <svg class="w-full h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                         </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                 </div>
                  </div>
                </>
            ))}
            

        </div>
          {/* a */}
          <div className="block">
           
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            
            <div className="flex gap-2 items-center  mt-4">
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

            <div className="flex gap-4 items-start mt-16">
              <div className="flex items-center gap-2 min-w-20  min-h-9 w-fit justify-center rounded-5 "
              >
               
               <div class="w-20 h-8 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
               </div>

               <div class="w-80 h-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
            <div className="flex flex-col gap-4 my-6 border-b border-grey">
              
            </div>

          </div>
    </div>
    </section>
    </>
  )
}

export default ProductDetailSkeleton

