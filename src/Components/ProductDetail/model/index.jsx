import ImageComponets from '@/Components/ImageComponent';
import React, { useEffect } from 'react'

export default function CoverImageModel({viewModel,setViewModel}) {
    useEffect(() => {
        if (viewModel!=="") {
          
          document.body.classList.add("overflow-hidden");
        } else {
          document.body.classList.remove("overflow-hidden");
        }
      }, [viewModel]);
  return (
    <div id="default-modal" tabindex="-1" aria-hidden="true" class={`${viewModel==""?"hidden":"flex"} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center  w-full md:inset-0 h-full max-h-full  bg-modal`}>
    <div class="relative p-4 w-full max-w-full max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 h-full">
            <div class="flex items-center justify-between p-4 md:p-5  dark:border-gray-600">
               
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={()=>setViewModel("")}>
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <div class="p-4 md:p-5 space-y-4" style={{height: "calc(100% - 5rem)"}}>
            <ImageComponets path={viewModel} w={1000} h={1000} alt={"cover-image"} styAdd={"m-auto h-full w-auto"}/>
            </div>
       
        </div>
    </div>
</div>
  )
}
