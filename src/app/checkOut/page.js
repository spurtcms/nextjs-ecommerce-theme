import Link from 'next/link'
import React from 'react'

export default function checkOut() {
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
                                <img src="/img/active-product.svg" />
                                <img src="/img/in-active-product.svg" className="hidden" />
                                <img src="/img/Complete-product.svg" className="hidden"/>
                                Accounts
                            </Link>
                            <div className="bg-primary w-4 h-px"></div>
                            <Link href="/checkOutShip" className="flex items-center text-base leading-5 font-normal gap-2 text-grey-300">
                                <img src="/img/active-product.svg" className="hidden" />
                                <img src="/img/Complete-product.svg" className="hidden"/>
                                <img src="/img/in-active-product.svg" />
                                Shipping
                            </Link>
                            <div className="bg-grey-300 w-4 h-px"></div>
                            <Link href="/checkOutPay" className="flex items-center text-base leading-5 font-normal gap-2 text-grey-300">
                                <img src="/img/active-product.svg" className="hidden" />
                                <img src="/img/Complete-product.svg" className="hidden"/>
                                <img src="/img/in-active-product.svg" />
                                Payment
                            </Link>
                        </div>
                        <div className="p-4">
                            <div className="w-full max-w-[534px]">
                                <h5 className="text-black-500 font-lights text-xl leading-6 mb-6">Account Details</h5>
                                <div className="mb-6 flex flex-col gap-2">
                                    <label className="text-black-500 font-light text-base leading-5">Email Address</label>
                                    <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Email Id" />
                                </div>
                                <div className="mb-6 flex flex-col gap-2">
                                    <label className="text-black-500 font-light text-base leading-5">Password</label>
                                    <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Password" />
                                </div>
                                <Link href="" className="h-11 flex justify-center items-center w-full bg-dark-500 text-base text-white font-normal rounded mb-3">
                                    Login
                                </Link>
                                <Link href="/signUp" className="text-base font-light text-black-500 text-center block w-full">Don't Have a account? <span className="font-medium">Sign in</span></Link>
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
