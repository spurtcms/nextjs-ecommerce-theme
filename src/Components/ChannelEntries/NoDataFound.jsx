'use client'
import Link from 'next/link'
import React from 'react'
import { useDispatch } from 'react-redux'
import { ChannelEntryId, ChannelSearch, ChannelpublishedTime } from '../../../store/slices/channel'
import { CategoryParentId, CategoryScroll } from '../../../store/slices/category'

export default function NoDataFound({ search }) {
    const dispatch = useDispatch()
    const handleHome = (e) => {
        dispatch(ChannelpublishedTime(''))
        dispatch(CategoryParentId(0))
        dispatch(CategoryScroll(0))
        dispatch(ChannelSearch(''))
        dispatch(ChannelEntryId(0))
    }
    return (
        <>
            <div className=" px-5 lg:px-20  py-32 col-span-full grid place-items-center">
                <div className="flex flex-col items-center max-w-[408px] ">
                    <img src="\img\noData.svg" alt="nodata" className="dark:hidden" />
                    <img
                        src="\img\noData-dark.svg"
                        alt="nodata"
                        className="dark:block hidden"
                    />
                    <h1 className=" text-2xl leading-6 font-medium text-black  mb-3 mt-6 text-center dark:dark:text-light-1">
                        {search ? "No matching search results" : "No Listing Yet !"}
                    </h1>
                    {search ? <p className=" text-base leading-6 font-normal text-gray-400 text-center dark:text-light-2"> We couldn’t find anything that matched your search.</p> :
                        <Link href='/' className=" text-base leading-6 font-normal text-gray-400 text-center dark:text-light-2" onClick={handleHome}>
                            Go to home page
                           
                        </Link>
                    }
                </div>
            </div>
        </>
    )
}
