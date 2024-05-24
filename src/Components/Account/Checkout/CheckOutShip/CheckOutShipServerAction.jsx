'use client'
import React, { Suspense, useEffect, useState } from 'react'
import CheckoutSummary from '../Common/CheckoutSummary'
import CheckoutRoutes from '../Common/CheckoutRoutes'
import { EmailValidator } from '@/utils/regexValidation'
import { useDispatch, useSelector } from 'react-redux'
import { getAddress, reloadCartCount, shippingRoute } from '@/redux/slices/cartSlice'
import { useRouter } from 'next/navigation'
import { GET_ADDRESS_DETAIL, GET_POST_ADDRESS_QUERY } from '@/api/query'
import { fetchGraphQl, postGraphQl } from '@/api/graphicql'

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

    const reloadCount=useSelector((state)=>state.cartReducer.reloadCount)

    const hadlegetAddress=async()=>{
      let myAddress=await fetchGraphQl(GET_ADDRESS_DETAIL)
      if(myAddress?.ecommerceCustomerDetails){
        if(myAddress.ecommerceCustomerDetails.firstName!=null){
          setName(myAddress.ecommerceCustomerDetails.firstName)
        }
        if(myAddress.ecommerceCustomerDetails.email!=null){
          setEmail(myAddress.ecommerceCustomerDetails.email)
        }
        if(myAddress.ecommerceCustomerDetails.streetAddress!=null){
          setArea(myAddress.ecommerceCustomerDetails.streetAddress)
        }
        if(myAddress.ecommerceCustomerDetails.mobileNo!=null){
          setNumber(myAddress.ecommerceCustomerDetails.mobileNo)
        }
        if(myAddress.ecommerceCustomerDetails.state!=null){
          setStates(myAddress.ecommerceCustomerDetails.state)
        }
        if(myAddress.ecommerceCustomerDetails.zipCode!=null){
          setHouseNo(myAddress.ecommerceCustomerDetails.zipCode)
        }
        if(myAddress.ecommerceCustomerDetails.city!=null){
          setCity(myAddress.ecommerceCustomerDetails.city)
        }
        if(myAddress.ecommerceCustomerDetails.country!=null){
          setCountry(myAddress.ecommerceCustomerDetails.country)
        }
        

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
              // dispatch(getAddress(obj))
              // router.push("/account/checkout-payment")
              // ToastMessage({type:'success',message:"Update Successfull"})
              postGraphQl(GET_POST_ADDRESS_QUERY,obj,"Address",setLoader,"",reloadCount,dispatch)
             
              
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
        if(name !=""&&area !=""&&states !=""&&number !=""&&houseNo !=""&&city !=""&&country !=""&&emailcheck ==true){
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
                                        <input type="email" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" value={email}  placeholder="Enter Email Id" onChange={(e)=>setEmail(e.target.value)}/>
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
                                        <input  type="number" className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" value={houseNo} placeholder="Enter Pincode" onChange={(e)=>setHouseNo(e.target.value)}/>
                                        {houseNo ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Pincode is required</p>} 
                                    </div>
                                </div>
                                <a className="h-11 flex justify-center items-center max-w-md m-auto bg-dark-500 text-base text-white font-normal rounded mb-3 cursor-pointer" onClick={handleSubmit}>
                                {loader?
                            <div className='loader'></div>
                            :
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
