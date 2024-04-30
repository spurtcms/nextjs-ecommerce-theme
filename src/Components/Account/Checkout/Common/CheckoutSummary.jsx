import React from 'react'

export default function CheckoutSummary() {
  return (
   <>
     <div className="w-full md:w-[20%]">
                        <div className="border border-grey3 rounded ">
                            <div className="p-4 border-b border-grey3 flex justify-between items-center">
                                <h3 className="text-black-500 text-base font-normal">Order Summary</h3>
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
   </>
  )
}
