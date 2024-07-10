import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { catagoryId, catagoryName } from "@/redux/slices/catgorySlice";
import { fetchGraphQLDa } from '@/api/clientGraphicql';
import { Get_CATEGORIES_LIST } from '@/api/query';
import { checkCartName, gethomeRoute, homeRoute } from '@/redux/slices/cartSlice';

export default function BreadCrubs({productDetail}) {
  const dispatch=useDispatch();
    const catogoryName=useSelector((state)=>state.catgoReducer.catagoryName)
    const catgoId=useSelector((state)=>state.catgoReducer.catgoId)
    const router=useRouter()


    const handleHome=async()=>{
      let catgo_variab={"categoryGroupId":10}
      let postData= await fetchGraphQLDa(Get_CATEGORIES_LIST,catgo_variab)
      dispatch(checkCartName(""),dispatch(catagoryName(postData?.categoriesList?.categories[0]?.categoryName)),
                    dispatch(catagoryId(postData?.categoriesList?.categories[0]?.id)))
    }
  
    
  return (
    <>
    <ul className="flex items-center gap-2 py-6 px-5 md:px-10">
        <li>
          <Link href={`/`} onClick={handleHome} prefetch className="block w-4">
            <img src="/img/home.svg" alt="home" />{" "}
          </Link>
        </li>
        <li>
          <img
            src="/img/bread-arrow.svg"
            alt="arrow"
            className="min-w-3 w-3 max-h-2"
          />
        </li>
        <li>
          <Link
            href={"/"}
            className="text-2-light font-normal leading-tight text-sm hover:text-black block" 
          >
            {catogoryName}
          </Link>
        </li>
        <li>
          <img
            src="/img/bread-arrow.svg"
            alt="arrow"
            className="min-w-3 w-3 max-h-2"
          />
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="text-2-light hover:text-black md:w-56 w-40 overflow-hidden text-ellipsis block whitespace-nowrap"
          >
            {productDetail?.productName}
          </a>
        </li>
    </ul>
    </>
  )
}
