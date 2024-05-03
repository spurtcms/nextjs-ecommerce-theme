import MyOrderDetail from '@/Components/Account/Orders/MyOrderDetail'
import Link from 'next/link'
import React from 'react'

export default function viewDetails({params}) {
console.log(params,"908998")

    return(<>
    
    <MyOrderDetail params={params}/>
    
    </>)
    // return (
    //     <>
    //         <div className="sm:px-10 px-4 py-4 ">
    //             <Link href="/myUpcomingOrder" className="flex gap-1.5 items-center text-grey-300 text-xs font-light mb-6">
    //                 <img src="/img/back.svg" />
    //                 Back
    //             </Link>
    //             <div className="flex gap-2 mb-2 flex-wrap">
    //                 <h3 className="text-black-500 text-base font-normal">Order ID - SP11478522165456</h3>
    //                 <div className="px-2 py-[3px] bg-sucess text-sucess text-xs font-normal rounded">
    //                     Out of Delivery
    //                 </div>
    //             </div>
    //             <div className="flex gap-3 items-center mb-6">
    //                 <div className="flex">
    //                     <p className="text-xs font-normal text-grey-300 flex gap-1">
    //                         Order Date :
    //                         <span className="text-grey-500">27th Feb 2024</span>
    //                     </p>
    //                 </div>
    //                 <div className="w-px h-4 bg-grey3"></div>
    //                 <p className="text-xs font-normal text-primary">Estimated Delivery : 3rd Mar 2024</p>
    //             </div>
    //             <div className="border border-grey3 rounded p-6">
    //                 <div className=" flex whitespace-nowrap overflow-auto pb-6">
    //                     <div className="flex flex-col items-center justify-center w-full relative pe-6 md:pe-0">
    //                         <img src="/img/submit.svg" className="relative z-10" />
    //                         <h5 className="text-sm font-normal text-light-black mb-1 mt-2">Order Accepted</h5>
    //                         <p className="text-xs text-3-light font-light">07 Oct 2023, 06:12 PM</p>
    //                         <div className="w-1/2 h-px bg-grey3 absolute top-2.5 right-0 "></div>
    //                     </div>
    //                     <div className="flex flex-col items-center justify-center w-full relative pe-6 md:pe-0">
    //                         <img src="/img/submit.svg" className="relative z-10"/>
    //                         <h5 className="text-sm font-normal text-light-black mb-1 mt-2">Order Placed</h5>
    //                         <p className="text-xs text-3-light font-light">07 Oct 2023, 06:12 PM</p>
    //                         <div className="w-full h-px bg-grey3 absolute top-2.5 "></div>
    //                     </div>
    //                     <div className="flex flex-col items-center justify-center w-full relative pe-6 md:pe-0">
    //                         <img src="/img/not-submit.svg" className="relative z-10" />
    //                         <h5 className="text-sm font-normal text-light-black mb-1 mt-2">Packing in Progress</h5>
    //                         <p className="text-xs text-3-light font-light">07 Oct 2023, 06:12 PM</p>
    //                         <div className="w-full h-px bg-grey3 absolute top-2.5 "></div>
    //                     </div>
    //                     <div className="flex flex-col items-center justify-center w-full relative pe-6 md:pe-0">
    //                         <img src="/img/not-submit.svg" className="relative z-10"/>
    //                         <h5 className="text-sm font-normal text-light-black mb-1 mt-2">Out of Delivery</h5>
    //                         <p className="text-xs text-3-light font-light">07 Oct 2023, 06:12 PM</p>
    //                         <div className="w-full h-px bg-grey3 absolute top-2.5 "></div>
    //                     </div>
    //                     <div className="flex flex-col items-center justify-center w-full relative pe-6 md:pe-0">
    //                         <img src="/img/not-submit.svg" className="relative z-10"/>
    //                         <h5 className="text-sm font-normal text-light-black mb-1 mt-2">Delivered</h5>
    //                         <p className="text-xs text-3-light font-light">07 Oct 2023, 06:12 PM</p>
    //                         <div className="h-px w-1/2 bg-grey3 absolute top-2.5 left-0 "></div>
    //                     </div>
    //                 </div>
    //                 <div className="py-6 border-y border-grey3">
    //                     <h3 className="text-base font-normal leading-5 text-black-500 mb-4">Order Information</h3>
    //                     <div className="flex items-start justify-between flex-wrap gap-4">
    //                         <div className="flex items-start flex-col sm:flex-row">
    //                             <img src="/img/checkList-product2.svg" className="w-[135.98px] h-[160px]" />
    //                             <div className="flex flex-col gap-2">
    //                                 <h4 className="text-base text-black-500 font-normal">Apple iPhone 15 Pro Max</h4>
    //                                 <p className="text-1-light text-sm font-light">Black Titanium, 256GB</p>
    //                             </div>
    //                         </div>
    //                         <div className="flex gap-1.5 items-center">
    //                             <p className="text-black text-base font-light">Qty</p>
    //                             <span className="text-black text-base font-light">1</span>
    //                         </div>
    //                         <p className="flex items-center gap-1 text-black-500 font-medium text-lg leading-6">
    //                             <img src="/img/rupee.svg" />
    //                             15,299
    //                         </p>
    //                         <div className="sm:w-[310px] w-full">
    //                             <div className="flex items-center justify-between mb-6">
    //                                 <h5 className="text-black-500 font-light text-base leading-5">Subtotal (1item)</h5>
    //                                 <p className="flex items-center gap-1 text-3-light text-sm leading-5">
    //                                     <img src="/img/rupee-sm-light.svg" />
    //                                     15,299
    //                                 </p>
    //                             </div>
    //                             <div className="flex items-center justify-between">
    //                                 <h5 className="text-black-500 font-light text-base leading-5">Sales taxes</h5>
    //                                 <p className="flex items-center gap-1 text-3-light text-sm leading-5">
    //                                     <img src="/img/rupee-sm-light.svg" />
    //                                     199.00
    //                                 </p>
    //                             </div>
    //                             <div className="w-full h-px bg-grey my-4"></div>
    //                             <div className="flex items-center justify-between">
    //                                 <h3 className="text-black-500 font-medium text-base leading-5">Grand Total</h3>
    //                                 <p className="flex items-center gap-1 text-black-500 text-sm leading-5">
    //                                     <img src="/img/rupee.svg" />
    //                                     15,498
    //                                 </p>
    //                             </div>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="pt-6">
    //                     <h3 className="text-black-500 text-base font-normal mb-4">Address Information</h3>
    //                     <h5 className="text-light-black text-base font-normal mb-4">Delivery Address</h5>
    //                     <div className="flex flex-col sm:flex-row sm:gap-x-[84px] gap-3 mb-3">
    //                         <div className="flex gap-1 flex-col">
    //                             <h3 className="text-light-black text-sm font-normal">Customer Name</h3>
    //                             <p className="text-3-light font-normal text-sm">Santina Jerde</p>
    //                         </div>
    //                         <div className="flex gap-1 flex-col">
    //                             <h3 className="text-light-black text-sm font-normal">Customer Address</h3>
    //                             <p className="text-3-light font-normal text-sm">No.10 Cntr Cottg Indu Empo,</p>
    //                             <p className="text-3-light font-normal text-sm"> Janpath, Delhi, India - 110001</p>
    //                         </div>
    //                     </div>
    //                     <div  className="flex flex-col sm:flex-row sm:gap-x-[70px] gap-3">
    //                         <div className="flex gap-1 flex-col">
    //                             <h3 className="text-light-black text-sm font-normal">Customer Number</h3>
    //                             <p className="text-3-light font-normal text-sm">9632587410</p>
    //                         </div>
    //                         <div className="flex gap-1 flex-col">
    //                             <h3 className="text-light-black text-sm font-normal">Customer Mail</h3>
    //                             <p className="text-3-light font-normal text-sm">SantinaJerde@gmail.com</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </>
    // )
}
