'use client'
import React, { Suspense, useState } from 'react'
import Link from 'next/link'
import CheckoutSummary from '../Common/CheckoutSummary'
import CheckoutRoutes from '../Common/CheckoutRoutes'

function CheckOutPayServerAction() {
    const [cartCount,setCartCount]=useState([])
  return (
    <>
    <div className="md:p-10 p-4">
                <div className="flex flex-col gap-1.5 mb-4">
                    <h5 className="text-2xl font-normal leading-8 uppercase">CheckOut</h5>
                    <p className="text-3-light text-sm font-normal">({cartCount.length} items)</p>
                </div>
                <div className="flex gap-6 md:flex-row flex-col">
                    <div className="md:w-[80%] w-full border border-grey3 rounded">
                    <Suspense fallback={null}>
                       <CheckoutRoutes />
                       </Suspense>
                        <div className="p-4">
                            <div className="w-full max-w-screen-sm">
                                <h5 className="text-black-500 font-lights text-xl leading-6 mb-6">Payment Options</h5>
                                <div className="flex gap-3 items-center mb-4">

                                    <input
                                        id="UPI"
                                        name="comment"
                                        type="radio"
                                        className=" h-4 w-4 rounded-full border-black-500 text-white focus:ring-0 focus:ring-transparent"
                                    />
                                    <label className="text-black-500 font-light text-base leading-5 cursor-pointer uppercase" for="UPI">UPI</label>
                                </div>
                                <div className="flex gap-3 items-center mb-4">

                                    <input
                                        id="Wallet"
                                        name="comment"
                                        type="radio"
                                        className=" h-4 w-4 rounded-full border-black-500 text-white focus:ring-0 focus:ring-transparent"
                                    />
                                    <label className="text-black-500 font-light text-base leading-5 cursor-pointer uppercase" for="Wallet">Wallets</label>
                                </div>
                                <div className="mb-4">
                                    <div className="flex gap-3 items-center mb-3">

                                        <input
                                            id="Card"
                                            name="comment"
                                            type="radio"
                                            className=" h-4 w-4 rounded-full border-black-500 text-white focus:ring-0 focus:ring-transparent"
                                        />
                                        <label className="text-black-500 font-light text-base leading-5 cursor-pointer" for="Card">Credit / Debit / ATM Card</label>
                                    </div>
                                    <div className="p-4 border-grey3 border rounded">
                                        <div className="flex gap-6 mb-6 flex-col sm:flex-row">
                                            <div className="flex flex-col gap-2 w-full sm:w-[80%]">
                                                <label className="text-black-500 font-light text-base leading-5">Card Number</label>
                                                <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="****  ****  ****  ****" />
                                            </div>
                                            <div className="flex flex-col gap-2 w-full sm:w-[20%]">
                                                <label className="text-black-500 font-light text-base leading-5 uppercase">ccv</label>
                                                <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="***" />
                                            </div>
                                        </div>
                                        <div className="flex gap-6 flex-col sm:flex-row">
                                            <div className="flex flex-col gap-2 w-full sm:w-[80%]">
                                                <label className="text-black-500 font-light text-base leading-5">Card Holder Name</label>
                                                <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Name" />
                                            </div>
                                            <div className="flex flex-col gap-2 w-full sm:w-[20%]">
                                                <label className="text-black-500 font-light text-base leading-5 uppercase">Expiry Date</label>
                                                <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="MM / YY" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center mb-4">

                                    <input
                                        id="Net-bank"
                                        name="comment"
                                        type="radio"
                                        className=" h-4 w-4 rounded-full border-black-500 text-white focus:ring-0 focus:ring-transparent"
                                    />
                                    <label className="text-black-500 font-light text-base leading-5 cursor-pointer uppercase" for="Net-bank">Net Banking</label>
                                </div>
                                <div className="flex gap-3 items-center">

                                    <input
                                        id="Cash"
                                        name="comment"
                                        type="radio"
                                        className=" h-4 w-4 rounded-full border-black-500 text-white focus:ring-0 focus:ring-transparent"
                                    />
                                    <label className="text-black-500 font-light text-base leading-5 cursor-pointer uppercase" for="Cash">Cash on Delivery</label>
                                </div>
                                <div className="max-w-md m-auto flex justify-center items-center flex-col gap-3 mt-8">
                                    <Link href="" prefetch className="h-11 flex justify-center items-center w-full bg-dark-500 text-base text-white font-normal rounded mb-3">
                                        Proceed to Pay
                                    </Link>
                                    <Link href="" className="text-base font-light leading-5">
                                    Cancel
                                    </Link>

                                </div>

                            </div>
                        </div>

                    </div>
                  <CheckoutSummary setCartCount={setCartCount}/>
                </div>
            </div>
    </>
  )
}

export default CheckOutPayServerAction
