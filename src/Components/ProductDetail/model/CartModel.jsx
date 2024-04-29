import ImageComponets from '@/Components/ImageComponent'
import { TaxPriceValidation } from '@/utils/regexValidation'
import Link from 'next/link'
import React from 'react'

export default function CartModel({open,productDetail,quantity}) {
  return (
    <>
    {open==true&&<div className="absolute top-7 right-14">
                    <div className="absolute right-0 z-10 mt-9 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded-lg focus:outline-none min-w-80 w-80  p-3">
                            <h3 className="text-black-500 text-base pb-3 border-b border-1-light text-start">Added to cart</h3>
                            
                                <div className="flex gap-2 items-center mt-3 mb-7">
                                  <ImageComponets path={productDetail?.productImageArray?.[0]} w={80} h={80} alt={productDetail.productName} />
                                  <div>
                                    <h3 className="text-black-500 font-normal text-base mb-3 line-clamp-1">{productDetail.productName}</h3>
                                    <div className="flex items-center gap-5">
                                      <p className="flex items-center gap-1.5 text-lg font-medium text-black-500">
                                        <img src="/img/rupee.svg" />
                                        {TaxPriceValidation(productDetail.specialPrice,productDetail.discountPrice,productDetail.defaultPrice,productDetail.tax,"")*quantity}
                                      
                                      </p>
                                      <span className="text-3-light text-sm font-light line-through"> {TaxPriceValidation(productDetail.specialPrice,productDetail.discountPrice,productDetail.defaultPrice,productDetail.tax,"strike")?TaxPriceValidation(productDetail.specialPrice,productDetail.discountPrice,productDetail.defaultPrice,productDetail.tax,"strike")*quantity:""}</span>
                                    </div>
                                  </div>
                                </div>
                             
                            <div className="pt-3 border-t border-1-light">
                              <Link href='/my-cart' className="text-base font-normal text-white py-2 w-full flex justify-center items-center h-9 bg-dark-500 rounded ">Go to Cart</Link>
                            </div>
                          </div>
                          </div>}
    </>
  )
}
