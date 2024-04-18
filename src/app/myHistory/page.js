import Link from 'next/link'
import React from 'react'

export default function myHistory() {
    return (
        <>
            <div className="p-4 sm:p-10">
                <div className="mb-6">
                    <h3 className="text-2xl font-normal mb-[5px] text-black-500 uppercase">MY Orders</h3>
                    <p className="text-3-light text-sm font-normal">Track your order history</p>
                </div>
                <div className="flex justify-between sm:items-center items-start sm:flex-row flex-col gap-4 sm:mb-0 mb-4">
                    <div className="flex items-center gap-4 mt-5">
                        <Link href="/myUpcomingOrder" className="pb-1.5  block border-black-500 text-sm font-normal text-black-500">
                            Upcoming Orders
                        </Link>
                        <Link href="/myHistory" className=" pb-1.5 block border-b-2 border-black-500 text-sm font-normal text-black-500">
                            History
                        </Link>
                    </div>
                    <div className="relative w-full sm:w-auto">
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
                        <div className="flex gap-2 items-center justify-end md:w-auto w-full whitespace-nowrap">
                            <button className="flex h-8 w-[86px] gap-2 items-center border border-black px-2 py-1.5 text-base font-light leading-5 text-black rounded">
                                <img src="/img/filter.svg" />
                                Filters
                            </button>
                            <Link href="" className="text-grey-300 text-xs font-light">Clear Filter</Link>
                        </div>

                    </div>
                    <div className="p-2 flex gap-4 border-b border-grey flex-wrap">
                        <div className="px-2 py-1 border border-grey rounded text-xs font-light text-black-500 relative">
                            SP11478522165456
                            <img src="/img/cancel-bg.svg" className="absolute -right-1.5 -top-1.5 cursor-pointer" />
                        </div>
                        <div className="px-2 py-1 border border-grey rounded text-xs font-light text-black-500 relative">
                            In-progress
                            <img src="/img/cancel-bg.svg" className="absolute -right-1.5 -top-1.5 cursor-pointer" />
                        </div>
                        <div className="relative flex gap-1 items-center">
                            <div className="px-2 py-1 border border-grey rounded text-xs font-light text-black-500 ">
                                In-progress
                            </div>
                            <div className="text-xs text-black-500 font-light">-</div>
                            <div className="px-2 py-1 border border-grey rounded text-xs font-light text-black-500 relative">
                                In-progress
                                <img src="/img/cancel-bg.svg" className="absolute -right-1.5 -top-1.5 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="overflow-auto">
                        <table className="w-full table border-collapse">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Product Name
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Order ID
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Price
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Order Date
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Status
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex gap-6 items-center md:flex-row flex-col">
                                            <img src="/img/checkList-product1.svg" className="w-[60px] h-[38px]s" />
                                            <h3 className="text-sm font-normal text-black-500">SAMSUNG 75" Crystal UHD 4K</h3>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <h3 className="text-sm font-normal text-black-500">SP11478522165456</h3>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                            <img src="/img/rupee-sm-light.svg" />
                                            15,299
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">27 Feb 2024</p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex">
                                            <div className="px-2 py-[3px] bg-sucess text-sucess text-xs font-normal rounded">
                                                Out of Delivery
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <Link href="/viewDetails" className="text-3-light font-light text-sm hover:underline">View Details</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex gap-6 items-center md:flex-row flex-col">
                                            <img src="/img/checkList-product1.svg" className="w-[60px] h-[38px]s" />
                                            <h3 className="text-sm font-normal text-black-500">SAMSUNG 75" Crystal UHD 4K</h3>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <h3 className="text-sm font-normal text-black-500">SP11478522165456</h3>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                            <img src="/img/rupee-sm-light.svg" />
                                            15,299
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">27 Feb 2024</p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex">
                                            <div className="px-2 py-[3px] bg-error text-error text-xs font-normal rounded">
                                                Canceled
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <Link href="/viewDetails" className="text-3-light font-light text-sm hover:underline">View Details</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex gap-6 items-center md:flex-row flex-col">
                                            <img src="/img/checkList-product1.svg" className="w-[60px] h-[38px]s" />
                                            <h3 className="text-sm font-normal text-black-500">SAMSUNG 75" Crystal UHD 4K</h3>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <h3 className="text-sm font-normal text-black-500">SP11478522165456</h3>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                            <img src="/img/rupee-sm-light.svg" />
                                            15,299
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">27 Feb 2024</p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex">
                                            <div className="px-2 py-[3px] bg-error text-error text-xs font-normal rounded">
                                                Canceled
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <Link href="/viewDetails" className="text-3-light font-light text-sm hover:underline">View Details</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex gap-6 items-center md:flex-row flex-col">
                                            <img src="/img/checkList-product1.svg" className="w-[60px] h-[38px]s" />
                                            <h3 className="text-sm font-normal text-black-500">SAMSUNG 75" Crystal UHD 4K</h3>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <h3 className="text-sm font-normal text-black-500">SP11478522165456</h3>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                            <img src="/img/rupee-sm-light.svg" />
                                            15,299
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">27 Feb 2024</p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex">
                                            <div className="px-2 py-[3px] bg-sucess text-sucess text-xs font-normal rounded">
                                                Out of Delivery
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <Link href="/viewDetails" className="text-3-light font-light text-sm hover:underline">View Details</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex gap-6 items-center md:flex-row flex-col">
                                            <img src="/img/checkList-product1.svg" className="w-[60px] h-[38px]s" />
                                            <h3 className="text-sm font-normal text-black-500">SAMSUNG 75" Crystal UHD 4K</h3>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <h3 className="text-sm font-normal text-black-500">SP11478522165456</h3>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                            <img src="/img/rupee-sm-light.svg" />
                                            15,299
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">27 Feb 2024</p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex">
                                            <div className="px-2 py-[3px] bg-sucess text-sucess text-xs font-normal rounded">
                                                Out of Delivery
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <Link href="/viewDetails" className="text-3-light font-light text-sm hover:underline">View Details</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex gap-6 items-center md:flex-row flex-col">
                                            <img src="/img/checkList-product1.svg" className="w-[60px] h-[38px]s" />
                                            <h3 className="text-sm font-normal text-black-500">SAMSUNG 75" Crystal UHD 4K</h3>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <h3 className="text-sm font-normal text-black-500">SP11478522165456</h3>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                            <img src="/img/rupee-sm-light.svg" />
                                            15,299
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">27 Feb 2024</p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex">
                                            <div className="px-2 py-[3px] bg-error text-error text-xs font-normal rounded">
                                                Canceled
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <Link href="/viewDetails" className="text-3-light font-light text-sm hover:underline">View Details</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
