import React from "react";

function MyCartSkeleton() {
  return (
    <>
      <div className="md:p-10 p-4">
        <div className="mb-4">
          <div class="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
          <div class="w-32 h-3.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        {/*  */}
        <div className="flex gap-6 md:flex-row flex-col">
          <div className="overflow-auto border border-grey3 border-b-0 rounded w-full  md:w-[80%]">
            <div className="py-4 px-6 hidden lg:grid grid-cols-1 border-b border-grey3 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((data, index) => (
                <>
                  <div class="w-32 h-3.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                </>
              ))}
            </div>
            {/*  */}
            {[1, 2, 3, 4]?.map((data, index) => (
              <div className="p-6 pb-9 border-b border-grey3 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="align-top">
                  <div className="flex gap-6 items-center sm:items-start md:flex-row flex-col">
                  <svg class="w-20 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>


                    <div class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                    <div class="w-48 h-3.5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                  </div>
                </div>
                <div className=" align-top">
                  <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                </div>
                <div className="align-top">
                  <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                </div>
                <div className="align-top flex lg:flex-col flex-row lg:justify-normal justify-between flex-wrap">
                  <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                  <div class="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                </div>
              </div>
            ))}
          </div>
          {/*  */}

          <div className="w-full md:w-[20%]">
            <div className="border border-grey3 rounded ">
              <div className="p-4 border-b border-grey3 flex justify-between items-center">
                <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
              </div>
              <div className="px-4 py-5">
                               {[1,2,3]?.map((data,index)=>(
                                    <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-[15px]">
                                        <div className="flex items-center text-sm font-normal text-black-500 gap-[3px]">
                                        <div class=" w-10 h-4 bg-gray-300 rounded-full dark:bg-gray-700 ">
                                            
                                        </div>
                                        </div>
                                        <div class="w-20 h-3.5 bg-gray-300 rounded-full dark:bg-gray-600  mb-2.5"></div>
                                    </div>
                                    <div class="h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                </div>
                                ))}

                            <div className="w-full h-px bg-grey mt-10 mb-6"></div>
                            <div className="flex items-center justify-between mb-6">
                               <div class="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                               <div class="h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                            </div>
                            <div className="flex items-center justify-between">
                                    <div class="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div class="h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                             </div>
                             <div className="w-full h-px bg-grey my-4"></div>
                             <div className="flex items-center justify-between mb-6">
                                    <div class="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                    <div class="h-3.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                             </div>
                             <div class="h-3.5 w-full bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyCartSkeleton;
