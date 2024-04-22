import React from 'react'
import Link from 'next/link';

export default function MyCartPage({mycartlist}) {
  return (
    <>
      <div className="md:p-10 p-4">
                <div className="mb-4">
                    <h3 className="text-2xl font-normal text-black-500 mb-1 uppercase">My Cart</h3>
                    <p className="text-3-light text-sm font-normal">({mycartlist.Count} items)</p>
                </div>
                <div className="flex gap-6 md:flex-row flex-col">
                    <div className="overflow-auto border border-grey3  rounded w-full  md:w-[80%]">
                      
                        <div className="py-4 px-6 hidden lg:grid grid-cols-1 border-b border-grey3 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <h3 className="text-black-500 text-base font-normal text-start">
                                Item
                            </h3>
                            <h3 className="text-black-500 text-base font-normal text-start">
                                Price
                            </h3>
                            <h3 className="text-black-500 text-base font-normal text-start">
                                Quantity
                            </h3>
                            <h3 className="text-black-500 text-base font-normal text-start">
                                Total
                            </h3>
                        </div>
                        <div className="p-6 pb-9 border-b border-grey3 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
                            <div className="align-top">
                                <div className="flex gap-6 items-center sm:items-start md:flex-row flex-col">
                                    <img src="/img/checkList-product1.svg" />
                                    <h3 className="text-base font-normal text-black-500 line-clamp-3 break-words">SAMSUNG 75" Class CU7000000 Crystal UHD 4K Smart TV UN757000FXZAZXCVBNM</h3>
                                </div>
                            </div>
                            <div className=" align-top">
                                <p className="flex items-center gap-1.5 text-lg font-medium text-black-500">
                                    <img src="/img/rupee.svg" />
                                    15,299
                                </p>
                            </div>
                            <div className="align-top">
                                <a href="javascript:void(0)" className="flex items-center gap-2 min-w-20  min-h-9 w-fit justify-center border rounded-5 border-grey1 " >
                                    <span className="text-3-light">Qty</span>
                                    <span className="text-3-light ">1</span>{" "}
                                    <img src="/img/qty-arrow.svg" alt="arrow" />
                                </a>
                            </div>
                            <div className="align-top flex lg:flex-col flex-row lg:justify-normal justify-between flex-wrap">
                                <p className="flex items-center gap-1.5 text-lg font-medium text-black-500">
                                    <img src="/img/rupee.svg" />
                                    15,299
                                </p>
                                <button className="flex items-center gap-1 text-sm font-normal text-black-500 mt-0 lg:mt-[77px]">
                                    <img src="/img/remove.svg" />
                                    Remove
                                </button>
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-full md:w-[20%]">
                        <div className="border border-grey3 rounded ">
                            <div className="p-4 border-b border-grey3 flex justify-between items-center">
                                <h3 className="text-black-500 text-base font-normal">Order Summary</h3>
                                <button className="text-3-light text-xs font-normal">Edit</button>
                            </div>
                            <div className="px-4 py-5">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-[15px]">
                                        <div className="flex items-center text-sm font-normal text-black-500 gap-[3px]">
                                            <img src="/img/multiples.svg" />
                                            1
                                        </div>
                                        <p className="text-3-light text-xs leading-4 font-normal">SAMSUNG 75"</p>
                                    </div>
                                    <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                        <img src="/img/rupee-sm-light.svg" />
                                        15,299
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-[15px]">
                                        <div className="flex items-center text-sm font-normal text-black-500 gap-[3px]">
                                            <img src="/img/multiples.svg" />
                                            1
                                        </div>
                                        <p className="text-3-light text-xs leading-4 font-normal">Apple iphone</p>
                                    </div>
                                    <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                        <img src="/img/rupee-sm-light.svg" />
                                        15,299
                                    </p>
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-[15px]">
                                        <div className="flex items-center text-sm font-normal text-black-500 gap-[3px]">
                                            <img src="/img/multiples.svg" />
                                            2
                                        </div>
                                        <p className="text-3-light text-xs leading-4 font-normal">JBL</p>
                                    </div>
                                    <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                        <img src="/img/rupee-sm-light.svg" />
                                        15,299
                                    </p>
                                </div>
                                <div className="w-full h-px bg-grey mt-10 mb-6"></div>
                                <div className="flex items-center justify-between mb-6">
                                    <h5 className="text-black-500 font-light text-base leading-5">Subtotal (1item)</h5>
                                    <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                        <img src="/img/rupee-sm-light.svg" />
                                        15,299
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h5 className="text-black-500 font-light text-base leading-5">Sales taxes</h5>
                                    <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                        <img src="/img/rupee-sm-light.svg" />
                                        199.00
                                    </p>
                                </div>
                                <div className="w-full h-px bg-grey my-4"></div>
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-black-500 font-medium text-base leading-5">Grand Total</h3>
                                    <p className="flex items-center gap-1 text-black-500 text-sm leading-5">
                                        <img src="/img/rupee.svg" />
                                        15,498
                                    </p>
                                </div>
                                <Link href="/checkOut" className="flex justify-center items-center bg-dark-500 w-full text-white font-normal text-base leading-5 h-11 rounded">Check Out</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
