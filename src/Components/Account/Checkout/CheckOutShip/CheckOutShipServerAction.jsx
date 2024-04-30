'use client'
import React, { Suspense } from 'react'
import Link from 'next/link'
import CheckoutSummary from '../Common/CheckoutSummary'
import CheckoutRoutes from '../Common/CheckoutRoutes'

function CheckOutShipServerAction() {
  return (
    <>
    <div className="md:p-10 p-4">
                <div className="flex flex-col gap-1.5 mb-4">
                    <h5 className="text-2xl font-normal leading-8 uppercase">CheckOut</h5>
                    <p className="text-3-light text-sm font-normal">(1 items)</p>
                </div>
                
                <div className="flex gap-6 md:flex-row flex-col">
                    <div className="md:w-[80%] w-full border border-grey3 rounded">
                    <Suspense fallback={null}>
                        <CheckoutRoutes />
                        </Suspense>
                        <div className="p-4">
                            <div className="w-full">
                                <h5 className="text-black-500 font-lights text-xl leading-6 mb-6">Shipping Details</h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-light text-base leading-5">Name</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Email Id" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-light text-base leading-5">Mobile Number</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Password" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-light text-base leading-5">Email Id</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Email Id" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-light text-base leading-5">House no</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Password" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-light text-base leading-5">Area</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Email Id" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-light text-base leading-5">City</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Password" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-light text-base leading-5">State</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Email Id" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-light text-base leading-5">Country</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Password" />
                                    </div>
                                </div>
                                <Link href="" className="h-11 flex justify-center items-center max-w-md m-auto bg-dark-500 text-base text-white font-normal rounded mb-3">
                                Use this address
                                </Link>
                            </div>
                        </div>

                    </div>
                    <CheckoutSummary />
                </div>
            </div>
    </>
  )
}

export default CheckOutShipServerAction
