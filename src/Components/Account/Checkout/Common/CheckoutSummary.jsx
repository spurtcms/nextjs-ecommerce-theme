import ImageComponets from '@/Components/ImageComponent'
import { fetchGraphQLDa } from '@/api/clientGraphicql'
import { GET_MY_CART_QUERY } from '@/api/query'
import { TaxPriceValidation } from '@/utils/regexValidation'
import React, { useEffect, useState } from 'react'

export default function CheckoutSummary({setCartCount}) {
    const [productSummary,setProductSummary]=useState([])
   
    const handleMycart=async()=>{
        let variable={
            "limit":10,
            "offset":0,
          }
        let mycartlist=await fetchGraphQLDa(GET_MY_CART_QUERY,variable)
        mycartlist=mycartlist?.ecommerceCartList?.cartList
        mycartlist?.map((sdata)=>{
          sdata.quantity=sdata.ecommerceCart?.quantity
    
        })
        setCartCount(mycartlist)
        setProductSummary(mycartlist)
    }
    useEffect(()=>{
        handleMycart()
    },[])
    const subtotalPrice=()=>{
        let priceStart=0
        productSummary?.map((sdata)=>{
           let priceStore = TaxPriceValidation(sdata.specialPrice,sdata.discountPrice,sdata.defaultPrice,0,"")*sdata.quantity
           priceStart=priceStart+priceStore
            })
            return priceStart
             
            
    }
    const salesTaxPrice=()=>{
        let priceStart=0
        productSummary?.map((sdata)=>{
           let priceStore = sdata.tax*sdata.quantity
           priceStart=priceStart+priceStore
            })
            return priceStart
            
    }

  return (
   <>
     <div className="w-full md:w-[20%]">
                        <div className="border border-grey3 rounded ">
                            <div className="p-4 border-b border-grey3 flex justify-between items-center">
                                <h3 className="text-black-500 text-base font-normal">Order Summary</h3>
                            </div>
                            <div className="p-4">
                               
                                    {productSummary?.map((data)=>(
                                         <div className="flex items-start gap-2 mb-4">
                                         {/* <img src="/img/detail-product1.svg" className="w-[100px] h-[64px]" /> */}
                                         <ImageComponets path={data?.productImageArray?.[0]} w={100} h={100}/>
                                         <div>
                                         <p className="text-xs text-black-500 font-light mb-3">{data.productName}</p>
                                         <div className="flex items-center gap-2 mb-2">
                                             <p className="text-xs font-light text-3-light">Qty</p>
                                             <span className="text-xs font-light text-3-light">{data.quantity}</span>
                                         </div>
                                         <div className="flex items-center gap-2">
                                             <p className="flex items-center gap-1.5 text-base font-normal leading-5 text-black-500">
                                                 <img src="/img/rupee.svg" />
                                                 {TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"")*data.quantity} 
                                             </p>
                                             <span className="text-3-light text-sm font-light line-through">  {TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"strike")?TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"strike")*data.quantity:""}</span>
                                         </div>
                                     </div>
                                     </div>
                                    ))}
                                   
                                
                                <div className="w-full h-px bg-grey mt-10 mb-6"></div>
                                <div className="flex items-center justify-between mb-6">
                                    <h5 className="text-black-500 font-light text-base leading-5">Subtotal</h5>
                                    <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                        <img src="/img/rupee-sm-light.svg" />
                                        {subtotalPrice()}
                                    </p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <h5 className="text-black-500 font-light text-base leading-5">Sales taxes</h5>
                                    <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                        <img src="/img/rupee-sm-light.svg" />
                                       {salesTaxPrice()}
                                    </p>
                                </div>
                                <div className="w-full h-px bg-grey my-4"></div>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-black-500 font-medium text-base leading-5">Grand Total</h3>
                                    <p className="flex items-center gap-1 text-black-500 text-sm leading-5">
                                        <img src="/img/rupee.svg" />
                                        {subtotalPrice()+salesTaxPrice()}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
   </>
  )
}
