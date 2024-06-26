import React from 'react'

export default function MyOrderList() {
  return (
    <>                         {[1,2,3,4,5,6,7,8,9,10].map((data,index)=>(
                           <>
     
                                <tr role="status" class="max-w-sm animate-pulse">
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex gap-6 items-center md:flex-row flex-col">
                                            
                                            <div class="flex items-center justify-center w-6 h-38 bg-gray-300 rounded sm:w-16 dark:bg-gray-700">
                                                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                                </svg>
                                            </div>
                                            <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2.5"></div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                    <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-5"></div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                            
                                            <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-5"></div>
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">
                                            <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-5"></div>
                                            </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">
                                        <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-5"></div>
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex">
                                            <div className="px-2 py-[3px] text-sucess text-xs font-normal rounded">
                                                <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-5"></div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                    <div class="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-5"></div>
                                    </td>
                                </tr>
                                </>
                                ))}
    </>
  )
}


