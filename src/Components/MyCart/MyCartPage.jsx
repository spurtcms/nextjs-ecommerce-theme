'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import ImageComponets from '../ImageComponent';
import { TaxPriceValidation, quantityList } from '@/utils/regexValidation';
import { fetchGraphQl } from '@/api/graphicql';
import { GET_REMOVE_CART_LIST } from '@/api/query';
import { checkCartName, reloadCartCount } from '@/redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import MyCartSkeleton from '@/utils/SkeletonLoader/MyCart';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'


export default function MyCartPage({mycartlist,tokenCheck}) {
    const dispatch=useDispatch()
    const reloadCount=useSelector((state)=>state.cartReducer.reloadCount)

      const [cartItmeList,setCartItemList]=useState([])
      const [trigger,setTrigger]=useState(0)
      const [skeleton,setSkeleton]=useState(true)
    //   const [totalvalue,setTotalvalue]=useState()
    //   const [taxvalue,setTaxvalue]=useState()
    const pathname = usePathname()
    console.log(pathname,'pathname')

    useEffect(()=>{
      if(tokenCheck){
        setCartItemList(mycartlist)
        setSkeleton(false)
        
      }else{
        if(localStorage.getItem("add-cart-list")){
        
            setCartItemList(JSON.parse(localStorage.getItem("add-cart-list")))
            setSkeleton(false)
           
          }
          else{
            setSkeleton(false)
          }
      }
       
    },[tokenCheck,mycartlist])

    console.log(mycartlist,'mycartlist')
    const handleQuantityChange=(qty,data)=>{
cartItmeList?.map((sdata)=>{
if(sdata.id==data.id){
    sdata.quantity= parseInt(qty)
}
})
    setTrigger(trigger+1)
    }
    const subtotalPrice=()=>{
        let priceStart=0
        cartItmeList?.map((sdata)=>{
           let priceStore = TaxPriceValidation(sdata.specialPrice,sdata.discountPrice,sdata.defaultPrice,0,"")*sdata.quantity
           priceStart=priceStart+priceStore
            })
            return priceStart
             
            
    }
    const salesTaxPrice=()=>{
        let priceStart=0
        cartItmeList?.map((sdata)=>{
           let priceStore = sdata.tax*sdata.quantity
           priceStart=priceStart+priceStore
            })
            return priceStart
            
    }

    // const grantTotalPrice=()=>{
    //     let priceStart=0
    //     cartItmeList?.map((sdata)=>{
    //        let priceStore = TaxPriceValidation(sdata.specialPrice,sdata.discountPrice,sdata.defaultPrice,0,"")*sdata.quantity;
    //        let priceTax= sdata.tax*sdata.quantity
    //        priceStart=priceStore+priceTax+priceStart
    //         })
    //         return <Currency quantity={priceStart} currency='INR'/> 
    // }
    const handleRemove= async(data)=>{  
        if(tokenCheck){
            let variable={
                "pid": data.id
              }
             let deletestore = await fetchGraphQl(GET_REMOVE_CART_LIST,variable)
             if(deletestore?.removeProductFromCartlist){
                let cartstore=cartItmeList.filter((s)=>s.id != data.id)
                setCartItemList(cartstore)
             }
        }else{
            let cartstore=cartItmeList.filter((s)=>s.id != data.id)
            if(cartstore.length){
                localStorage.setItem("add-cart-list",JSON.stringify(cartstore))
            setCartItemList(cartstore)
            }
            else{
                localStorage.removeItem("add-cart-list")
                setCartItemList(cartstore)
            }

            
        }
      dispatch(reloadCartCount(reloadCount+1))
    }
const router=useRouter()
    const handleRoute=()=>{
        if(tokenCheck!=undefined){
            router.push('/checkout-shipping')
        }
        else{
            router.push('/auth/login')
            dispatch(checkCartName(pathname)) 
        }
    }
  return (
    <>      {skeleton?<MyCartSkeleton/>:
                    <div className="md:p-10 p-4">
                    <div className="mb-4">
                        <h3 className="text-2xl font-normal text-black-500 mb-1 uppercase">My Cart</h3>
                        <p className="text-3-light text-sm font-normal">({cartItmeList?.length} items)</p>
                    </div>
                    <div className="flex gap-6 md:flex-row flex-col">
                        <div className="overflow-auto border border-grey3 border-b-0 rounded w-full  md:w-[80%]">
                        
                            <div className="py-4 px-6 hidden lg:grid grid-cols-1 border-b border-grey3 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
                                <h3 className="text-black-500 text-base font-normal text-start">
                                    Item
                                </h3>
                                <h3 className="text-black-500 text-base font-normal text-start">
                                    Price
                                </h3>
                                <h3 className="text-black-500 text-base font-normal text-start">
                                    Quantity
                                </h3>
                                <h3 className="text-black-500 text-base font-normal text-start">
                                    Total
                                </h3>
                            </div>
                        
                                {cartItmeList?.map((data,index)=>(
                                    
                                    <div className="p-6 pb-9 border-b border-grey3 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6">
                                    <div className="align-top">
                                    <div className="flex gap-6 items-center sm:items-start md:flex-row flex-col">
                                    <ImageComponets path={data?.productImageArray?.[0]} w={80} h={80} alt={data.productName} />
                                        <h3 className="text-base font-normal text-black-500 line-clamp-3 break-words">{data.productName}</h3>
                                    </div>
                                </div>
                                <div className=" align-top">
                                    <p className="flex items-center gap-1.5 text-lg font-medium text-black-500">
                                        <img src="/img/rupee.svg" />
                                        {TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"")} 
                                        {/* {TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"")} */}
                                    </p>
                                </div>
                                <div className="align-top">
                                    <a  className="flex items-center gap-2 min-w-20  min-h-9 w-fit justify-center rounded-5 " >
                                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-300 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:[box-shadow:none]" onChange={(e)=>handleQuantityChange(e.target.value,data)} value={data.quantity}>
                        {quantityList().map((sdata)=>(
                        <option value={sdata}> Qty {sdata}</option>
                        ))}
                        
                    </select>
                                    </a>
                                </div>
                                <div className="align-top flex lg:flex-col flex-row lg:justify-normal justify-between flex-wrap">
                                    <p className="flex items-center gap-1.5 text-lg font-medium text-black-500">
                                        <img src="/img/rupee.svg" />
                                        {/* {TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"")*data.quantity} */}
                                        {TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"")*data.quantity} 
                                    </p>
                                    <button onClick={()=>handleRemove(data)} className="flex items-center gap-1 text-sm font-normal text-black-500 mt-0 lg:mt-[77px]">
                                        <img src="/img/remove.svg" />
                                        Remove
                                    </button>
                                </div>
                                </div>
                                

                                ))}
                            
                            
                            
                        </div>
                        <div className="w-full md:w-[20%]">
                            <div className="border border-grey3 rounded ">
                                <div className="p-4 border-b border-grey3 flex justify-between items-center">
                                    <h3 className="text-black-500 text-base font-normal">Order Summary</h3>
                                    {/* <button className="text-3-light text-xs font-normal">Edit</button> */}
                                </div>
                                <div className="px-4 py-5">
                                    {cartItmeList?.map((data)=>(
                                        <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-[15px]">
                                            <div className="flex items-center text-sm font-normal text-black-500 gap-[3px]">
                                                <img src="/img/multiples.svg" />
                                                {data.quantity}
                                            </div>
                                            <p className="text-3-light text-xs leading-4 font-normal line-clamp-1">{data.productName} </p>
                                        </div>
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                    <img src="/img/rupee-sm-light.svg" />
                                    {/* {TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,0,"")*data.quantity} */}
                                    {TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"")*data.quantity} 
                                        </p>
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
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-black-500 font-medium text-base leading-5">Grand Total</h3>
                                        <p className="flex items-center gap-1 text-black-500 text-sm leading-5">
                                            <img src="/img/rupee.svg" />
                                            {/* <Currency quantity={totalvalue+taxvalue} currency='INR'/>  */}
                                            {subtotalPrice()+salesTaxPrice()}
                                            {/* {grantTotalPrice()} */}
                                        </p>
                                    </div>
                                    <button onClick={handleRoute} className="flex justify-center items-center bg-dark-500 w-full text-white font-normal text-base leading-5 h-11 rounded">Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            
    </>
  )
}
