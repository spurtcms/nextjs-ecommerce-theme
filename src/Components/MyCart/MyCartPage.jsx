'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import ImageComponets from '../ImageComponent';
import { TaxPriceValidation, quantityList } from '@/utils/regexValidation';
import { fetchGraphQl } from '@/api/graphicql';
import { GET_ADD_TO_CART, GET_MY_CART_QUERY, GET_REMOVE_CART_LIST } from '@/api/query';
import { checkCartName, reloadCartCount } from '@/redux/slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import MyCartSkeleton from '@/utils/SkeletonLoader/MyCart';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'
import { fetchGraphQLDa } from '@/api/clientGraphicql';
import ToastMessage from '../ToastMessage/ToastMessage';
import { imageUrl } from '@/api/url';


export default function MyCartPage({tokenCheck}) {
    const dispatch=useDispatch()
    const reloadCount=useSelector((state)=>state.cartReducer.reloadCount)

      const [cartItmeList,setCartItemList]=useState([])
      const [trigger,setTrigger]=useState(0)
      const [skeleton,setSkeleton]=useState(true)
    
    const pathname = usePathname()
const handleMycart=async()=>{
    let variable={
        "limit":10,
        "offset":0,
      }
    let mycartlist=await fetchGraphQLDa(GET_MY_CART_QUERY,variable)


   
    mycartlist=mycartlist?.ecommerceCartList?.cartList
    // mycartlist?.map((sdata)=>{
    //   sdata.quantity=sdata.ecommerceCart?.quantity
    // })
    // let filterD=localData.filter((d)=>d.id==sdata.id)
    let localData=[]
    if(localStorage.getItem("add-cart-list")!=undefined&&localStorage.getItem("add-cart-list")!="undefined"){
    localData=JSON.parse(localStorage.getItem("add-cart-list"))

    }
 

  if(localData!=null){
    const mergedArray = mycartlist?.map((item1) => {
        const item2 = localData?.find((item) => item?.id === item1.id);
        if (item2) {

            item1.quantity=item1?.quantity + (item2?.quantity || 0)
          return item1;

        } else {
          return item1;
          
        }
      }).concat(
        localData?.filter((item) => mycartlist?.every((item1) => item1?.id != item?.id))
      );
      setCartItemList(mergedArray)
    }
    else{
        setCartItemList(mycartlist)
    }

    setSkeleton(false) 
}

    useEffect(()=>{
      if(tokenCheck){
          handleMycart()
          
        
      }else{
        if(localStorage.getItem("add-cart-list")){
        
            setCartItemList(JSON.parse(localStorage.getItem("add-cart-list")))
            setSkeleton(false)
           
          }
          else{
            setSkeleton(false)
          }
      }
       
    },[tokenCheck])

    const handleQuantityChange=(qty,data)=>{
        cartItmeList?.map((sdata)=>{
        if(sdata.id==data.id){
            sdata.quantity= parseInt(qty)
        }
        })
        let variable = {
            productId: data?.id,
            quantity: parseInt(qty),
          };
          fetchGraphQl(GET_ADD_TO_CART, variable);
            setTrigger(trigger+1)
    }
    const subtotalPrice=()=>{
        let priceStart=0
        cartItmeList?.map((sdata)=>{
           let priceStore = TaxPriceValidation(sdata?.specialPrice,sdata?.discountPrice,sdata?.productPrice,0,"")*sdata?.quantity
           priceStart=priceStart+priceStore
            })
            return priceStart
             
            
    }
    const salesTaxPrice=()=>{
        let priceStart=0
        cartItmeList?.map((sdata)=>{
           let priceStore = sdata?.tax*sdata?.quantity
           priceStart=priceStart+priceStore
            })
            return priceStart
            
    }

    const handleRemove= async(data)=>{  
        if(tokenCheck){
            let variable={
                "pid": data?.id
              }
             let deletestore = await fetchGraphQl(GET_REMOVE_CART_LIST,variable)
             if(localStorage.getItem("add-cart-list")!=undefined){
                let localData=JSON?.parse(localStorage.getItem("add-cart-list"))
             
             

             const newLocal=localData?.filter((res)=>res.id!=data.id);
             localStorage.setItem("add-cart-list",JSON.stringify(newLocal))}

             if(deletestore?.removeProductFromCartlist){
                let cartstore=cartItmeList.filter((s)=>s?.id != data?.id)
                setCartItemList(cartstore)
                ToastMessage({type:"success",message:"Product removed from cart"})
             }
        
            }else{
                let cartstore=cartItmeList.filter((s)=>s.id != data.id)
                if(cartstore.length){
                    localStorage.setItem("add-cart-list",JSON.stringify(cartstore))
                setCartItemList(cartstore)
                ToastMessage({type:"success",message:"Product removed from cart"})
                }
                else{
                    localStorage.removeItem("add-cart-list")
                    setCartItemList(cartstore)
                    ToastMessage({type:"success",message:"Product removed from cart"})
                }

            
        }
      dispatch(reloadCartCount(reloadCount+1))
    }
const router=useRouter()
    const handleRoute=()=>{
        if(tokenCheck!=undefined){
            router.push('/account/checkout-shipping')
            
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
                    {cartItmeList?.length !=0?  <div className="flex gap-6 md:flex-row flex-col">
                        <div className="overflow-auto border border-grey3  rounded w-full  md:w-[80%]">
                        
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
                                    
                                    <div className="p-6 pb-9 border-b border-grey3 grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 last:border-0">
                                    <div className="align-top">
                                    <div className="flex gap-6 items-center sm:items-start md:flex-row flex-col">
                                    <ImageComponets path={`${imageUrl}${data?.productImageArray?.[0]}`} w={80} h={80} alt={data?.productName} />
                                        <h3 className="text-base font-normal text-black-500 line-clamp-3 break-words">{data?.productName}</h3>
                                    </div>
                                </div>
                                <div className=" align-top">
                                    <p className="flex items-center gap-1.5 text-lg font-medium text-black-500">
                                        <img src="/img/rupee.svg" />
                                        {TaxPriceValidation(data?.specialPrice,data?.discountPrice,data?.productPrice,data?.tax,"")} 
                                    </p>
                                </div>
                                <div className="align-top">
                                    <a  className="flex items-center gap-2 min-w-20  min-h-9 w-fit justify-center rounded-5 " >
                                    {/* <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-300 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:[box-shadow:none]" onChange={(e)=>handleQuantityChange(e.target.value,data)} value={data?.quantity}>
                        {quantityList().map((sdata)=>(
                        <option value={sdata}> Qty {sdata}</option>
                        ))} */}
                    <div id="countries" class="bg-gray-50 border border-gray-300 text-center text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-300 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:[box-shadow:none]">
                    Qty {data?.quantity}
                        </div>
                        {/* <option value={data?.quantity}> Qty {data?.quantity}</option> */}
                       
                        
                  
                                    </a>
                                </div>
                                <div className="align-top flex lg:flex-col flex-row lg:justify-normal justify-between flex-wrap">
                                    <p className="flex items-center gap-1.5 text-lg font-medium text-black-500">
                                        <img src="/img/rupee.svg" />
                                        {TaxPriceValidation(data?.specialPrice,data?.discountPrice,data?.productPrice,data?.tax,"")*data?.quantity} 

                                        
                                    </p>
                                    <button onClick={()=>handleRemove(data)} className="flex items-center gap-1 text-sm font-normal text-black-500 mt-0 lg:mt-[30px]">
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
                                </div>
                                <div className="px-4 py-5">
                                    {cartItmeList?.map((data)=>(
                                        <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-[15px]">
                                            <div className="flex items-center text-sm font-normal text-black-500 gap-[3px]">
                                                <img src="/img/multiples.svg" />
                                                {data?.quantity}
                                            </div>
                                            <p className="text-3-light text-xs leading-4 font-normal line-clamp-1">{data?.productName} </p>
                                        </div>
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                    <img src="/img/rupee-sm-light.svg" />
                                   
                                    {TaxPriceValidation(data?.specialPrice,data?.discountPrice,data?.productPrice,data?.tax,"")*data?.quantity} 
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
                                            {subtotalPrice()+salesTaxPrice()}
                                        </p>
                                    </div>
                                    <button onClick={handleRoute} className="flex justify-center items-center bg-dark-500 w-full text-white font-normal text-base leading-5 h-11 rounded">Check Out</button>
                                </div>
                            </div>
                        </div>
                    </div>:<>
                    <div className="h-[50vh] flex justify-center text-center">
                        <div className="mt-16">
                            <img src="/img/No-orded.svg" />
                            <p className="text-sm font-normal mb-4 mt-3 text-black">Empty Cart</p>
                        
                        </div>
                    </div>
                    </>}
                  
                </div>
            }
            
    </>
  )
}
