'use client'
import ImageComponets from '@/Components/ImageComponent'
import { fetchGraphQLDa } from '@/api/clientGraphicql'
import { GET_PRODUCT_DETAIL, GET_PRODUCT_DETAIL_STATUSNAME } from '@/api/query'
import { imageUrl } from '@/api/url'
import moment from 'moment/moment'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function MyOrderDetailSeverActions({params}) {

    const [productDetail,setProductDetail]=useState()

    // const detailName=async()=>{
    //    let detailstatus= await fetchGraphQLDa(GET_PRODUCT_DETAIL_STATUSNAME)
    //    console.log(detailstatus,'detailstatus')
    // }

    const detailApi=async()=>{
        let detail_var={"pslug":params?.slug?.[0],"oid":params?.slug?.[1]}
        let postData= await fetchGraphQLDa(GET_PRODUCT_DETAIL,detail_var)
        setProductDetail(postData)
    }

    useEffect(()=>{
        detailApi()
        // detailName()
    },[])

    let AddressData;
    if(productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.shippingDetails&&productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.shippingDetails!=undefined){
        AddressData=JSON.parse(productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.shippingDetails)
    }




let statusData=[
    {
        id:1,
        status:"Order Confirmed",
        date:"07 Oct 2023, 06:12 PM"
    },
    {
        id:2,
        status:"Shipped",
        date:"07 Oct 2023, 06:12 PM"
    },
    {
        id:3,
        status:"Out of Delivery",
        date:"07 Oct 2023, 06:12 PM"
    },
    {
        id:4,
        status:"Delivered",
        date:"07 Oct 2023, 06:12 PM"
    },
]
// if(statusData)
// {result?.status=="Order Placed"&&statusData.indexOf(result?.status)}

let statusCheck=statusData.findIndex((data,index)=>data.status=="Out of Delivery"
)

  return (
    <div className="sm:px-10 px-4 py-4 ">
    <Link href="/account/my-orders?offset=0" className="flex gap-1.5 items-center text-grey-300 text-xs font-light mb-6">
        <img src="/img/back.svg" />
        Back
    </Link>
    <div className="flex gap-2 mb-2 flex-wrap">
        <h3 className="text-black-500 text-base font-normal">Order ID -{productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.orderUniqueId}</h3>
        <div className="px-2 py-[3px] bg-sucess text-sucess text-xs font-normal rounded">
            {/* Out of Delivery */}
            {productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.orderStatus}
        </div>
    </div>
    <div className="flex gap-3 items-center mb-6">
        <div className="flex">
            <p className="text-xs font-normal text-grey-300 flex gap-1">
                Order Date :
                <span className="text-grey-500">{ moment(productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.
orderTime).format("DD MMMM YYYY")}</span>
            </p>
        </div>
        <div className="w-px h-4 bg-grey3"></div>
        {/* <p className="text-xs font-normal text-primary">Estimated Delivery :</p> */}
    </div>
    <div className="border border-grey3 rounded p-6">
        <div className=" flex whitespace-nowrap overflow-auto pb-6">
            {statusData.map((result,index)=>(
                
                <>
            <div className="flex flex-col items-center justify-center w-full relative pe-6 md:pe-0 active-border">
                <img src={`${index<=statusCheck?"/img/submit.svg":"/img/not-submit.svg"}` }className="relative z-10" />
                <h5 className="text-sm font-normal text-light-black mb-1 mt-2">{result?.status}</h5>
                <p className="text-xs text-3-light font-light">07 Oct 2023, 06:12 PM</p>
                <div className="w-full h-px bg-grey3 absolute top-2.5 left-0 line"></div>
            </div>
            </>
            ))}
            {/* <div className="flex flex-col items-center justify-center w-full relative pe-6 md:pe-0">
                <img src="/img/submit.svg" className="relative z-10"/>
                <h5 className="text-sm font-normal text-light-black mb-1 mt-2">Order Placed</h5>
                <p className="text-xs text-3-light font-light">07 Oct 2023, 06:12 PM</p>
                <div className="w-full h-px bg-grey3 absolute top-2.5 "></div>
            </div>
            <div className="flex flex-col items-center justify-center w-full relative pe-6 md:pe-0">
                <img src="/img/not-submit.svg" className="relative z-10" />
                <h5 className="text-sm font-normal text-light-black mb-1 mt-2">Packing in Progress</h5>
                <p className="text-xs text-3-light font-light">07 Oct 2023, 06:12 PM</p>
                <div className="w-full h-px bg-grey3 absolute top-2.5 "></div>
            </div>
            <div className="flex flex-col items-center justify-center w-full relative pe-6 md:pe-0">
                <img src="/img/not-submit.svg" className="relative z-10"/>
                <h5 className="text-sm font-normal text-light-black mb-1 mt-2">Out of Delivery</h5>
                <p className="text-xs text-3-light font-light">07 Oct 2023, 06:12 PM</p>
                <div className="w-full h-px bg-grey3 absolute top-2.5 "></div>
            </div>
            <div className="flex flex-col items-center justify-center w-full relative pe-6 md:pe-0">
                <img src="/img/not-submit.svg" className="relative z-10"/>
                <h5 className="text-sm font-normal text-light-black mb-1 mt-2">Delivered</h5>
                <p className="text-xs text-3-light font-light">07 Oct 2023, 06:12 PM</p>
                <div className="h-px w-1/2 bg-grey3 absolute top-2.5 left-0 "></div>
            </div> */}
        </div>
        <div className="py-6 border-y border-grey3">
            <h3 className="text-base font-normal leading-5 text-black-500 mb-4">Order Information</h3>
            <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-start flex-col sm:flex-row">
                    {/* <img src="/img/checkList-product2.svg" className="w-[135.98px] h-[160px]" /> */}
                    <ImageComponets path={`${imageUrl}${productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.productImageArray?.[0]}`} w={135.98} h={160}/>
                    <div className="flex flex-col gap-2 px-4">
                        <h4 className="text-base text-black-500 font-normal">{productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.productName}</h4>
                        <p className="text-1-light text-sm font-light">Black Titanium, 256GB</p>
                    </div>
                </div>
                <div className="flex gap-1.5 items-center">
                    <p className="text-black text-base font-light">Qty</p>
                    <span className="text-black text-base font-light">{productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.orderQuantity}</span>
                </div>
                <p className="flex items-center gap-1 text-black-500 font-medium text-lg leading-6">
                    <img src="/img/rupee.svg" />
                   {productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.orderPrice}
                </p>
                <div className="sm:w-[310px] w-full">
                    <div className="flex items-center justify-between mb-6">
                        <h5 className="text-black-500 font-light text-base leading-5">Subtotal (1item)</h5>
                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                            <img src="/img/rupee-sm-light.svg" />
                            {productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.orderPrice}
                            {/* 15,299 */}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <h5 className="text-black-500 font-light text-base leading-5">Sales taxes</h5>
                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                            <img src="/img/rupee-sm-light.svg" />
                            {productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.orderTax}
                        </p>
                    </div>
                    <div className="w-full h-px bg-grey my-4"></div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-black-500 font-medium text-base leading-5">Grand Total</h3>
                        <p className="flex items-center gap-1 text-black-500 text-sm leading-5">
                            <img src="/img/rupee.svg" />
                            {productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.orderPrice + productDetail?.ecommerceProductOrderDetails?.EcommerceProduct?.orderTax}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="pt-6">
            <h3 className="text-black-500 text-base font-normal mb-4">Address Information</h3>
            <h5 className="text-light-black text-base font-normal mb-4">Delivery Address</h5>
            <div className="flex flex-col sm:flex-row sm:gap-x-[84px] gap-3 mb-3">
                <div className="flex gap-1 flex-col">
                    <h3 className="text-light-black text-sm font-normal">Customer Name</h3>
                    <p className="text-3-light font-normal text-sm">{AddressData?.firstName}</p>
                    
                </div>
                <div className="flex gap-1 flex-col">
                    <h3 className="text-light-black text-sm font-normal">Customer Address</h3>
                    <p className="text-3-light font-normal text-sm">No-{AddressData?.streetAddress}{AddressData?.area},{AddressData?.city},</p>
                    <p className="text-3-light font-normal text-sm"> {AddressData?.state},{AddressData?.country}-{AddressData?.zipCode}</p>
                </div>
            </div>
            <div  className="flex flex-col sm:flex-row sm:gap-x-[70px] gap-3">
                <div className="flex gap-1 flex-col">
                    <h3 className="text-light-black text-sm font-normal">Customer Number</h3>
                    <p className="text-3-light font-normal text-sm">{AddressData?.mobileNo}</p>
                </div>
                <div className="flex gap-1 flex-col">
                    <h3 className="text-light-black text-sm font-normal">Customer Mail</h3>
                    <p className="text-3-light font-normal text-sm">{AddressData?.email}</p>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
