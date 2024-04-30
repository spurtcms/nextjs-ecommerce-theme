import Link from 'next/link'
import React from 'react'

export default function noOrder() {
    return (
        <>
            <div className="p-4 sm:p-10">
                <div className="mb-6">
                    <h3 className="text-2xl font-normal mb-[5px] text-black-500 uppercase">MY Orders</h3>
                    <p className="text-3-light text-sm font-normal">Track your order history</p>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4 mt-5">
                        <Link href="/myUpcomingOrder" className="pb-1.5  block border-black-500 text-sm font-normal text-black-500">
                            Upcoming Orders
                        </Link>
                        <Link href="/myHistory" className=" pb-1.5 block border-b-2 border-black-500 text-sm font-normal text-black-500">
                            History
                        </Link>
                    </div>
                    <div className="relative">
                        <input type="text" className="border-grey3 h-8 sm:w-[300px] w-full py-2 ps-12 pe-2 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded " placeholder="search" />
                        <img src="/img/search-light.svg" className="absolute top-2 left-4" />
                    </div>
                </div>
                <div className="border-grey border rounded">
                    <div className="px-2 py-4 flex gap-5 md:flex-row flex-col border-b border-grey ">
                        <div className="flex items-center gap-4 sm:w-[90%] w-full sm:flex-row flex-col">
                            <div className="w-full">
                                <input type="text" className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded" placeholder="Enter Order ID" />
                            </div>
                            <div className="relative w-full">
                                <select className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded" >
                                    <option>Status</option>
                                    <option>1</option>
                                    <option>1</option>
                                    <option>1</option>
                                </select>
                            </div>
                            <div className="w-full">
                                <input type="text" className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded" placeholder="Start Date" />
                            </div>
                            <div className="w-full">
                                <input type="text" className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded" placeholder="End Date" />
                            </div>
                        </div>
                        <div className="flex gap-2 items-center justify-end md:w-[10%] w-full">
                            <button className="flex h-8 gap-2 items-center border border-black px-2 py-1.5 text-base font-light leading-5 text-black rounded" >
                                <img src="/img/filter.svg" />
                                Filters
                            </button>
                            <Link href="" className="text-grey-300 text-xs font-light">Clear Filter</Link>
                        </div>
                    </div>
                    <div className="h-[50vh] flex justify-center text-center">
                        <div className="mt-16">
                            <img src="/img/No-orded.svg" />
                            <p className="text-sm font-normal mb-4 mt-3 text-black">You have no orders</p>
                            <Link href="/" className="bg-dark-500 rounded flex justify-center items-center text-white text-base font-normal px-6 py-2 h-9">Start Shopping</Link>
                        </div>
                    </div>

                </div>

            </div>
    </>
  )
}
