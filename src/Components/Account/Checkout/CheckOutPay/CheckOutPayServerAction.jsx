'use client'
import React, { Suspense, useEffect, useState } from 'react'
import Link from 'next/link'
import CheckoutSummary from '../Common/CheckoutSummary'
import CheckoutRoutes from '../Common/CheckoutRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGraphQl, postGraphQl } from '@/api/graphicql'
import { GET_ADDRESS_DETAIL, GET_CHECKOUT, Get_CATEGORIES_LIST } from '@/api/query'
import { TaxPriceValidation } from '@/utils/regexValidation'
import { fetchGraphQLDa } from '@/api/clientGraphicql'
import { checkCartName } from '@/redux/slices/cartSlice'
import { catagoryId, catagoryName } from '@/redux/slices/catgorySlice'

function CheckOutPayServerAction() {
    const [cartCount,setCartCount]=useState([])
    const address=useSelector(s=>s.cartReducer.address)
    const [loader,setLoader]=useState()
    const [catgoData,setCatgoData]=useState()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [area,setArea]=useState("")
    const [states,setStates]=useState("")
    const [number,setNumber]=useState("")
    const [houseNo,setHouseNo]=useState("")
    const [city,setCity]=useState("")
    const [country,setCountry]=useState("")
    const reloadCount=useSelector((state)=>state.cartReducer.reloadCount)


    const dispatch=useDispatch()
    const subtotalPrice=()=>{
        let priceStart=0
        cartCount?.map((sdata)=>{
           let priceStore = TaxPriceValidation(sdata.specialPrice,sdata.discountPrice,sdata.defaultPrice,0,"")*sdata.quantity
           priceStart=priceStart+priceStore
            })
            return priceStart
             
            
    }
    const salesTaxPrice=()=>{
        let priceStart=0
        cartCount?.map((sdata)=>{
           let priceStore = sdata.tax*sdata.quantity
           priceStart=priceStart+priceStore
            })
            return priceStart
            
    }
    const quantityCount=()=>{
        let priceStart=0
        cartCount?.map((sdata)=>{
           priceStart=priceStart+sdata.quantity
            })
            return priceStart
            
    }

    const hadlegetAddress=async()=>{
        let myAddress=await fetchGraphQl(GET_ADDRESS_DETAIL)
        if(myAddress?.ecommerceCustomerDetails){
          setName(myAddress.ecommerceCustomerDetails.firstName)
          setEmail(myAddress.ecommerceCustomerDetails.email)
          setArea(myAddress.ecommerceCustomerDetails.streetAddress)
          setNumber(myAddress.ecommerceCustomerDetails.mobileNo)
          setStates(myAddress.ecommerceCustomerDetails.state)
          setHouseNo(myAddress.ecommerceCustomerDetails.zipCode)
          setCity(myAddress.ecommerceCustomerDetails.city)
          setCountry(myAddress.ecommerceCustomerDetails.country)
  
        }
      }
      useEffect(()=>{
         hadlegetAddress()
      },[])

    const handleCheckout=()=>{
        let addressObj={
            "cd":{
              "firstName":name,
              "username": name,
              "email":email,
              "streetAddress":area,
              "state":states,
              "mobileNo":number,
              "zipCode":houseNo,
              "city":city,
              "country":country,
              "profileImage":"",
              "isActive": 1,
            }  
            }
        setLoader(true)
        let add=JSON.stringify(addressObj)
        let checkArr=[]
        let obj={}
        cartCount?.map((data)=>{
          
            obj.productId=data.id
            obj.quantity=data.quantity
            obj.price=subtotalPrice()
            obj.tax=salesTaxPrice()
            obj.totalCost=subtotalPrice()+salesTaxPrice()
            checkArr.push(obj)
              }
        )
      let variableList={
            "mode": "cash on delivery",
            "addr": add,
            "prod":checkArr,
            "summ": {
              "subTotal": subtotalPrice(),
              "totalTax": salesTaxPrice(),
              "totalCost": subtotalPrice()+salesTaxPrice(),
              "totalQuantity":quantityCount()
            }
          }

        postGraphQl(GET_CHECKOUT,variableList,"checkout",setLoader,"",reloadCount,dispatch)
    }

    const categorieList= async () =>{
        let catgo_variab={"categoryGroupId":147}
        let postData= await fetchGraphQLDa(Get_CATEGORIES_LIST,catgo_variab)
        setCatgoData(postData)
       
      }

      useEffect(()=>{
        categorieList()
      },[])

      return (
    <>
    <div className="md:p-10 p-4">
                <div className="flex flex-col gap-1.5 mb-4">
                    <h5 className="text-2xl font-normal leading-8 uppercase">CheckOut</h5>
                    <p className="text-3-light text-sm font-normal">({cartCount?.length} items)</p>
                </div>
                <div className="flex gap-6 md:flex-row flex-col">
                    <div className="md:w-[80%] w-full border border-grey3 rounded">
                    <Suspense fallback={null}>
                       <CheckoutRoutes />
                       </Suspense>
                        <div className="p-4">
                            <div className="w-full max-w-screen-sm">
                                <h5 className="text-black-500 font-lights text-xl leading-6 mb-6">Payment Options</h5>
                                <div className="flex gap-3 items-center mb-4">

                                    
                                     <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label className="text-black-500 font-light text-base leading-5 cursor-pointer uppercase" for="UPI">UPI</label>
                                </div>
                                <div className="flex gap-3 items-center mb-4">

                                <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label className="text-black-500 font-light text-base leading-5 cursor-pointer uppercase" for="Wallet">Wallets</label>
                                </div>
                                <div className="mb-4">
                                    <div className="flex gap-3 items-center mb-3">

                                    <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="text-black-500 font-light text-base leading-5 cursor-pointer" for="Card">Credit / Debit / ATM Card</label>
                                    </div>
                                    <div className="p-4 border-grey3 border rounded">
                                        <div className="flex gap-6 mb-6 flex-col sm:flex-row">
                                            <div className="flex flex-col gap-2 w-full sm:w-[80%]">
                                                <label className="text-black-500 font-light text-base leading-5">Card Number</label>
                                                <input type="text" disabled className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="****  ****  ****  ****" />
                                            </div>
                                            <div className="flex flex-col gap-2 w-full sm:w-[20%]">
                                                <label className="text-black-500 font-light text-base leading-5 uppercase">ccv</label>
                                                <input type="text" disabled className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="***" />
                                            </div>
                                        </div>
                                        <div className="flex gap-6 flex-col sm:flex-row">
                                            <div className="flex flex-col gap-2 w-full sm:w-[80%]">
                                                <label className="text-black-500 font-light text-base leading-5">Card Holder Name</label>
                                                <input type="text" disabled className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Name" />
                                            </div>
                                            <div className="flex flex-col gap-2 w-full sm:w-[20%]">
                                                <label className="text-black-500 font-light text-base leading-5 uppercase">Expiry Date</label>
                                                <input type="text" disabled className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="MM / YY" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-3 items-center mb-4">

                                <input disabled id="disabled-radio-1" type="radio" value="" name="disabled-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                    <label className="text-black-500 font-light text-base leading-5 cursor-pointer uppercase" for="Net-bank">Net Banking</label>
                                </div>
                                <div className="flex gap-3 items-center">

                                    <input
                                        id="Cash"
                                        name="comment"
                                        type="radio"
                                        defaultChecked
                                        className=" h-4 w-4 rounded-full border-black-500 text-white focus:ring-0 focus:ring-transparent"
                                    />
                                    <label className="text-black-500 font-light text-base leading-5 cursor-pointer uppercase" for="Cash">Cash on Delivery</label>
                                </div>
                                <div className="max-w-md m-auto flex justify-center items-center flex-col gap-3 mt-8">
                                    <a onClick={handleCheckout} className="h-11 flex cursor-pointer justify-center items-center w-full bg-dark-500 text-base text-white font-normal rounded mb-3">
                                    {loader?
                            <svg aria-hidden="true" role="status" class="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>:
                                "Proceed to Pay"
                            }  
                            </a>
                            <Link href="/" passHref onClick={()=>{ dispatch(checkCartName(""),dispatch(catagoryName(catgoData?.categoriesList?.categories[0]?.categoryName)),
                                dispatch(catagoryId(catgoData?.categoriesList?.categories[0]?.id)))}} className="text-base cursor-pointer font-light leading-5">
                             Cancel
                            </Link>

                                </div>

                            </div>
                        </div>

                    </div>
                  <CheckoutSummary setCartCount={setCartCount}/>
                </div>
            </div>
    </>
  )
}

export default CheckOutPayServerAction
