import Link from 'next/link'
import React from 'react'

export default function checkOutPay() {
    return (
        <>
            <div className="md:p-10 p-4">
                <div className="flex flex-col gap-1.5 mb-4">
                    <h5 className="text-2xl font-normal leading-8 uppercase">CheckOut</h5>
                    <p className="text-3-light text-sm font-normal">(1 items)</p>
                </div>
                <div className="flex gap-6 md:flex-row flex-col">
                    <div className="md:w-[80%] w-full border border-grey3 rounded">
                        <div className="p-4 flex border-b border-grey gap-2 items-center">
                            <Link href="checkOut" className="flex items-center text-base leading-5 font-normal gap-2 text-primary">
                                <img src="/img/active-product.svg" className="hidden" />
                                <img src="/img/Complete-product.svg" />
                                <img src="/img/in-active-product.svg" className="hidden" />
                                Accounts
                            </Link>
                            <div className="bg-primary w-4 h-px"></div>
                            <Link href="/checkOutShip" className="flex items-center text-base leading-5 font-normal gap-2 text-primary">
                                <img src="/img/active-product.svg" className="hidden" />
                                <img src="/img/in-active-product.svg" className="hidden" />
                                <img src="/img/Complete-product.svg" />
                                Shipping
                            </Link>
                            <div className="bg-primary w-4 h-px"></div>
                            <Link href="/checkOutPay" className="flex items-center text-base leading-5 font-normal gap-2 text-primary">
                                <img src="/img/active-product.svg" />
                                <img src="/img/Complete-product.svg" className="hidden" />
                                <img src="/img/in-active-product.svg" className="hidden" />
                                Payment
                            </Link>
                        </div>
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
                                    <Link href="" className="h-11 flex justify-center items-center w-full bg-dark-500 text-base text-white font-normal rounded mb-3">
                                        Proceed to Pay
                                    </Link>
                                    <Link href="" className="text-base font-light leading-5">
                                    Cancel
                                    </Link>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className="w-full md:w-[20%]">
                        <div className="border border-grey3 rounded ">
                            <div className="p-4 border-b border-grey3 flex justify-between items-center">
                                <h3 className="text-black-500 text-base font-normal">Order Summary</h3>
                                <button className="text-3-light text-xs font-normal">Edit</button>
                            </div>
                            <div className="p-4">
                                <div className="flex items-start gap-2">
                                    <img src="/img/detail-product1.svg" className="w-[100px] h-[64px]" />
                                    <div>
                                        <p className="text-xs text-black-500 font-light mb-3">Samsung 65" class CU7000 Crystal UHD 4K Smart TV - Titan Gray (UN65CU7000)</p>
                                        <div className="flex items-center gap-2 mb-2">
                                            <p className="text-xs font-light text-3-light">Qty</p>
                                            <span className="text-xs font-light text-3-light">1</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="flex items-center gap-1.5 text-base font-normal leading-5 text-black-500">
                                                <img src="/img/rupee.svg" />
                                                15,299
                                            </p>
                                            <span className="text-3-light text-sm font-light line-through">16,999</span>
                                        </div>
                                    </div>
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
                                <div className="flex items-center justify-between">
                                    <h3 className="text-black-500 font-medium text-base leading-5">Grand Total</h3>
                                    <p className="flex items-center gap-1 text-black-500 text-sm leading-5">
                                        <img src="/img/rupee.svg" />
                                        15,498
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
