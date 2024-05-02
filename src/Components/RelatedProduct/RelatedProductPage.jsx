'use client'
import { fetchGraphQLDa } from '@/api/clientGraphicql'
import { GET_POSTS_LIST_QUERY } from '@/api/query'
import { TaxPriceValidation } from '@/utils/regexValidation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ImageComponets from '../ImageComponent'
import Link from 'next/link'

export default function RelatedProductPage({slug}) {

  const catgoId=useSelector((state)=>state.catgoReducer.catgoId)
  const [productList,setProductList]=useState([])
   const  handleRelatedProduct= async()=>{
         const related={"limit":10,"offset":0,"filter":{"categoryId":catgoId}}
         let sortByData= await fetchGraphQLDa(GET_POSTS_LIST_QUERY,related)
                 const relatedList=sortByData?.ecommerceProductList?.productList?.filter((s)=>s.productSlug!=slug)
                 setProductList(relatedList)
    }
    useEffect(()=>{
        if(catgoId){
            handleRelatedProduct()
        }
        
    },[catgoId])
    console.log(productList,'4444444');

  return (
  <>
                                    <div className="flex flex-col  gap-6">
                                            <div className="flex justify-between items-center">
                                                <h2 className=" text-2xl font-medium leading-8 text-1-dark  ">
                                                Related Product
                                                </h2>
                                                <Link
                                                href={"/"}
                                                prefetch
                                                className="text-3-light font-normal text-xs leading-4 underline"
                                                >
                                                See All
                                                </Link>
                                            </div>
                                    <div class=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 border-t border-s border-grey rounded-5 overflow-hidden">

                                            {productList?.map((data,index)=>(
                                   index<4&&
                                    <div class=" p-5 transition-shadow border-e border-b border-grey">
                                    <Link href={`/product-detail/${data?.productSlug}`} prefetch className="grid place-items-center">
                                    <ImageComponets path={data?.productImageArray?.[0]} alt={data.productName} w={300} h={200}/>
                                    </Link>
                                    <div className="text-center">
                                        <Link href={`/product-detail/${data?.productSlug}`} prefetch
                                        className=" text-base text-black font-medium leading-5 mt-5 block "
                                        >
                                        {data.productName}
                                        </Link>

                                        <p className="text-sm font-light leading-4 text-1-light mt-2 line-clamp-2">
                                        {data.productDescription}
                                        </p>
                                        <div className="flex gap-2 items-center justify-center mt-3">
                                        <strong className="flex gap-1 items-center text-base font-semibold leading-5 text-black before:content-[''] before:inline-block before:w-2 before:h-3 before:bg-[url('/img/rupee.svg')]   ">
                                        {TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"")} 
                                        </strong>
                                        <del className="text-xs font-normal text-1-light leading-4   ">
                                        {TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"strike")}
                                        </del>
                                        </div>
                                    </div>
                                    </div>


           ))}
                                    </div>
         
        </div>
  </>
  )
}
