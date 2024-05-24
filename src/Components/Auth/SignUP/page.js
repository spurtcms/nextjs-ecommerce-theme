'use client'
import ToastMessage from '@/Components/ToastMessage/ToastMessage'
import { postGraphQl } from '@/api/graphicql'
import { GET_POSTS_SIGN_QUERY } from '@/api/query'
import { EmailValidator, lowerPresent, numPresent, specialPresent, upperPresent } from '@/utils/regexValidation'
import { spinner } from '@/utils/spinner'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function SingUp() {

      const [fisrtName,setFirstName]=useState("")
      const [phNumber,setphNumber]=useState("")
      const [email,setEmail]=useState("")
      const [password,setPassword]=useState("")
      const [emailError,setEmailError]=useState("")
      const [valid,setValid]=useState(0)
      const [passwordError,setPasswordError]=useState([])
      const [loader,setLoader]=useState(false)

      useEffect(()=>{
        if(valid==1){
          validCheck()
        }

      },[email,password])
    
      const handlesignup=()=>{
        setValid(1)

        const inputdata={
            "singData": {
              "firstName": fisrtName,
              "mobile": phNumber,
              "email": email,
              "password": password,
             
            },
            "ecomModule": 1
          }
          if(validCheck()){
            setValid(0)
            setLoader(true)
            postGraphQl(GET_POSTS_SIGN_QUERY,inputdata,"signup",setLoader,"","","")
            ToastMessage({type:'success',message:"Register Successfull"})
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
        let arrayValue = []
     if (password == "") {
      arrayValue.push("New password is required")
      setPasswordError(["New password is required"])
      
    } else {
      if (!upperPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 in capital case!")
      }
      if (!numPresent(password) && password.length !== 0) {
        arrayValue.push("Must have at least 1 number")
      }
      if (!lowerPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 lower lase!")
      }
      
      if (password.length < 8) {
        arrayValue.push("Must be at least 8 characters!")
      }
      if (!specialPresent(password) && password.length !== 0) {
        arrayValue.push("Must contain at least 1 special characters!")
      }
      setPasswordError(arrayValue)
    }
        if(fisrtName !==""&&phNumber !==""&&arrayValue.length==0&&emailcheck ==true){
         return true
        }else{
          return false
        }
      }
      const Onkeydownfunc = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          handlesignup()
        }
      }
     
  return (
   <>
   <div className="grid place-items-center min-h-90 p-4  bg-blue-2 h-responsive">
                <div className="w-full max-w-[534px] m-auto">
                    <h3 className="text-2xl leading-7 font-normal text-primary mb-10">Sign up</h3>
                    <h5 className="text-black-500 font-lights text-xl leading-6 mb-6">Account Details</h5>
                    <div className="mb-6 flex flex-col gap-2">
                        <label className="text-black-500 font-light text-base leading-5">Full Name</label>
                        <input type="text" onKeyDown={(e) => Onkeydownfunc(e)} className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Name"  onChange={(e)=>setFirstName(e.target.value)} />
                        {fisrtName ==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>Full name is required</p>} 
                    </div>
                    <div className="mb-6 flex flex-col gap-2">
                        <label className="text-black-500 font-light text-base leading-5">Phone Number</label>
                        <input type="number" onKeyDown={(e) => Onkeydownfunc(e)} className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Phone Number"  onChange={(e)=>setphNumber(e.target.value)}/>
                        {phNumber==""&&valid==1&& <p className='text-red-600 text-xs font-normal'>Phone number is required</p>}
             
                    </div>
                    <div className="mb-6 flex flex-col gap-2">
                        <label className="text-black-500 font-light text-base leading-5">Email Id</label>
                        <input type="email" onKeyDown={(e) => Onkeydownfunc(e)} className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Email Id"  onChange={(e)=>setEmail(e.target.value)} />
                        {emailError !==""&&valid==1&&<p className='text-red-600 text-xs font-normal'>{emailError}</p>}
                    </div>
                    <div className="mb-6 flex flex-col gap-2">
                        <label className="text-black-500 font-light text-base leading-5">Password</label>
                        <input type="text" onKeyDown={(e) => Onkeydownfunc(e)} className="border-grey3 rounded-lg h-[52px] placeholder:text-grey px-3 py-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black-500" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)}/>
                        {valid==1&& <div class="mt-1">
        <ul class="grid grid-cols-1 sm:grid-cols-2  ps-2 gap-y-2">
          {passwordError?.map((err)=>(
           <li class="text-xs font-normal text-red-600">{err}</li>
          ))}
       
         </ul>
      </div>}
                    </div>
                    <button onClick={()=>handlesignup()} className="h-11 flex justify-center items-center w-full bg-dark-500 text-base text-white font-normal rounded mb-3">
                   
                      {loader==true?<div className="loader"></div> :" Register"}
                    </button>
                    <Link  href="/auth/login" className="text-base font-light text-black-500 text-center block w-full">Have an account?  <span className="font-medium">Sign in</span></Link>
                </div>
            </div>
   </>
  )
}
