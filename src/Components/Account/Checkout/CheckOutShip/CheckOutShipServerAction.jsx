'use client'
import React, { Suspense, useEffect, useState } from 'react'
import CheckoutSummary from '../Common/CheckoutSummary'
import CheckoutRoutes from '../Common/CheckoutRoutes'
import { EmailValidator } from '@/utils/regexValidation'
import { useDispatch } from 'react-redux'
import { getAddress, shippingRoute } from '@/redux/slices/cartSlice'
import { useRouter } from 'next/navigation'
import { GET_ADDRESS_DETAIL } from '@/api/query'
import { fetchGraphQl } from '@/api/graphicql'

function CheckOutShipServerAction() {
    const dispatch=useDispatch()
    const router=useRouter()
    const [cartCount,setCartCount]=useState([])
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [area,setArea]=useState("")
    const [states,setStates]=useState("")
    const [number,setNumber]=useState("")
    const [houseNo,setHouseNo]=useState("")
    const [city,setCity]=useState("")
    const [country,setCountry]=useState("")
    const [emailError,setEmailError]=useState("")
    const [valid,setValid]=useState(0)
    const [loader,setLoader]=useState()
    const [shipRoutes,setShipRoutes]=useState()

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
    useEffect(()=>{
        if(valid==1){
          validCheck()
        }

      },[email])
    const handleSubmit=()=>{
        setValid(1)
        if(validCheck()){
          setLoader(true)
          dispatch(shippingRoute(true))
            setValid(0)
            let obj={
                "name":name,
                "email":email,
                "area":area,
                "states":states,
                "number":number,
                "houseNo":houseNo,
                "city":city,
                "country":country
              }
              dispatch(getAddress(obj))
              router.push("/account/checkout-payment")
              
        }
        
    }
    const validCheck=()=>{
        let emailcheck=false
        if (email !== "") {
          let emailCheck = EmailValidator(email);
          if (emailCheck) {
            setEmailError("");
            emailcheck=true
          } else {
            emailcheck=false
            setEmailError("Incorrect Email. Please check the email you have entered.");
          }
        } else {
          emailcheck=false
          setEmailError("Email id is required");
        }
        if(name !==""&&area !==""&&states !==""&&number !==""&&houseNo !==""&&city !==""&&country !==""&&emailcheck ==true){
         return true
        }else{
          return false
        }
     
    }
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
                        <CheckoutRoutes/>
                        </Suspense>
                        <div className="p-4">
                            <div className="w-full">
                                <h5 className="text-black-500 font-normals text-xl leading-6 mb-6">Shipping Details</h5>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-normal text-base leading-5">Name</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)}/>
                                        {name ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Name is required</p>} 
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-normal text-base leading-5">Mobile is required</label>
                                        <input  type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500"  value={number} placeholder="Enter number" onChange={(e)=>setNumber(e.target.value)}/>
                                        {number ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Mobile number is required</p>} 
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-normal text-base leading-5">Email Id</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" value={email}  placeholder="Enter Email Id" onChange={(e)=>setEmail(e.target.value)}/>
                                        {emailError !==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>{emailError}</p>}
                                    </div>
                                   
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-normal text-base leading-5">Address</label>
                                        <input  type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" value={area} placeholder="Enter Address" onChange={(e)=>setArea(e.target.value)}/>
                                        {area ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Address is required</p>} 
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-normal text-base leading-5">City</label>
                                        <input  type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" value={city} placeholder="Enter city" onChange={(e)=>setCity(e.target.value)}/>
                                        {city ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>City is required</p>} 
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-normal text-base leading-5">State</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" value={states} placeholder="Enter State" onChange={(e)=>setStates(e.target.value)}/>
                                        {states ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>State is required</p>} 
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-normal text-base leading-5">Country</label>
                                        <input type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" value={country} placeholder="Enter country" onChange={(e)=>setCountry(e.target.value)}/>
                                        {country ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Country is required</p>} 
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-black-500 font-normal text-base leading-5">Pincode</label>
                                        <input  type="text" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" value={houseNo} placeholder="Enter Pincode" onChange={(e)=>setHouseNo(e.target.value)}/>
                                        {houseNo ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Pincode is required</p>} 
                                    </div>
                                </div>
                                <a className="h-11 flex justify-center items-center max-w-md m-auto bg-dark-500 text-base text-white font-normal rounded mb-3 cursor-pointer" onClick={handleSubmit}>
                                {loader?
                            <svg aria-hidden="true" role="status" class="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>:
                                "Use this address"
                            }
                                </a>
                            </div>
                        </div>

                    </div>
                    <CheckoutSummary setCartCount={setCartCount}/>
                </div>
            </div>
    </>
  )
}

export default CheckOutShipServerAction
