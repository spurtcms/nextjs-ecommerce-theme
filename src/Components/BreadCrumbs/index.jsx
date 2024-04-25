import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

export default function BreadCrubs({productDetail}) {
    const catogoryName=useSelector((state)=>state.catgoReducer.catagoryName)
    const catgoId=useSelector((state)=>state.catgoReducer.catgoId)
    const router=useRouter()

    console.log(catgoId,"8989ukj")
    const handleRouteChng=(e)=>{
        console.log(catgoId,catogoryName,"kkhkhkhk")
        // router.push(`/?catgoId=${catgoId}&catName=${catogoryName}`)
        router.push(`/`)
    }
    
  return (
    <>
    <ul className="flex items-center gap-2 py-6 px-5 md:px-10">
        <li>
          <Link href={`/`} className="block w-4">
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
            href={catgoId==null?`/`:`/?catgoId=${catgoId}&catName=${catogoryName}`}
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
