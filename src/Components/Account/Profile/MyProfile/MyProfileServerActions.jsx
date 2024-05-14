'use client'
import { fetchGraphQl } from '@/api/graphicql'
import { GET_ADDRESS_DETAIL } from '@/api/query'
import { EmailValidator } from '@/utils/regexValidation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function MyProfileServerActions() {
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
    const [newDp,setNewDp]=useState();
    const [dataImg,setDataImg]=useState()


    const hadlegetAddress=async()=>{
        let myAddress=await fetchGraphQl(GET_ADDRESS_DETAIL)
        setDataImg(myAddress)
        console.log(myAddress?.ecommerceCustomerDetails,'myAddress');
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

      let router=useRouter();

    const handleSubmit=()=>{
        setValid(1)
        if(validCheck()){
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
            //   dispatch(getAddress(obj))
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


    const changeDP = (e) => {
        const { files } = e.target;
        if (files && files[0] && files[0].name.match(/\.(jpg|jpeg|png|svg)$/)) {
          const fsize = files[0].size;
          const file = Math.round(fsize / 1024);
    
          if (file < 2048) {
            let reader = new FileReader();
    
            reader.readAsDataURL(files[0]);
    
            reader.onloadend = () => setNewDp(reader.result);
            // setImageUpload(true)
          }
        }
      };
  return (
  <>
   <div className='p-4 sm:p-10 md:pr-[118px] '>
                <div>
                    <h3 className='text-xl text-black mb-8 leading-6 font-normal'>Personal Info</h3>
                    <div className='grid grid-cols-1 sm:grid-1auto gap-5 sm:gap-[70px] items-start mb-8'>
                        <div className='relative w-[120px] h-[120px] m-auto sm:m-0'>
                            {newDp&&
                            <img src={newDp} className='w-full h-full rounded-full' />}
                            {dataImg?.ecommerceCustomerDetails?.firstName ?
                            <div className='flex text-6xl  font-semibold text-black items-center justify-center relative h-full w-full overflow-hidden rounded-full bg-slate-300'>
                             {dataImg?.ecommerceCustomerDetails?.firstName.at(0)}
                            </div>
                            :
                            <img src='/img/user1.jpg' className='w-full h-full rounded-full' />
                            }
                            
                            <input type='file' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' onChange={changeDP} />
                        </div>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base leading-5 text-black font-light'>Name </p>
                                <input value={name} placeholder="Enter name" onChange={(e)=>setName(e.target.value)} className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' />
                                {name ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Name is required</p>} 
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base leading-5 text-black font-light'>Mobile Number </p>
                                <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full'  value={number} placeholder="Enter number" onChange={(e)=>setNumber(e.target.value)}/>
                                        {number ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Mobile number is required</p>} 
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base leading-5 text-black font-light'>Email Id  </p>
                                <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' value={email}  placeholder="Enter Email Id" onChange={(e)=>setEmail(e.target.value)}/>
                                        {emailError !==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>{emailError}</p>}
                            </div>
                            <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>Address </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' value={area} placeholder="Enter Address" onChange={(e)=>setArea(e.target.value)}/>
                                        {area ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Address is required</p>} 
                                </div>
                        </div>
                    </div>
                    <div>
                        {/* <h3 className='text-xl text-black mb-8 leading-6 font-normal'>Address Info</h3> */}
                        <div className='sm:pl-[191px]'>
                            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 mb-6'>
                                {/* <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>House No </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' value={houseNo} placeholder="Enter house no" onChange={(e)=>setHouseNo(e.target.value)}/>
                                        {houseNo ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>House no is required</p>} 
                                </div> */}
                               
                                <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>City </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' value={city} placeholder="Enter city" onChange={(e)=>setCity(e.target.value)}/>
                                        {city ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>City is required</p>} 
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>State </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' value={states} placeholder="Enter State" onChange={(e)=>setStates(e.target.value)}/>
                                        {states ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>State is required</p>} 
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>Country </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' value={country} placeholder="Enter country" onChange={(e)=>setCountry(e.target.value)}/>
                                        {country ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Country is required</p>} 
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>Pincode </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full'value={houseNo} placeholder="Enter Pincode" onChange={(e)=>setHouseNo(e.target.value)}/>
                                        {houseNo ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Pincode is required</p>} 
                                </div>
                            </div>
                            <div className='flex gap-4 justify-end'>
                                <Link href="/" className='py-3 px-6 h-11 text-base leading-5 text-black border border-black rounded'>Cancel</Link>
                                <button onClick={handleSubmit} className='py-3 px-6 h-11 text-base leading-5 text-white bg-black rounded'>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </>
  )
}
