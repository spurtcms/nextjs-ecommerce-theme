'use client'
import { postGraphQl } from '@/api/graphicql'
import { GET_POSTS_LOGIN_QUERY } from '@/api/query'
import { TokenGetValue } from '@/api/serverActions'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function LoginPage() {
  const[email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [validCheck,setValidCheck]=useState(0)
  const [loader,setLoader]=useState()
  const dispatch=useDispatch()
  const cartPathName=useSelector((state)=>state.cartReducer.checkoutCart)
  const reloadCount=useSelector((state)=>state.cartReducer.reloadCount)

  const handleLogin=async()=>{
   
    setValidCheck(1)
    
      if(email !==""&&password !==""){
        setLoader(true)
        setValidCheck(0)
        const inputdata={"email":email,"password":password}
        postGraphQl(GET_POSTS_LOGIN_QUERY,inputdata,"login",setLoader,cartPathName,reloadCount,dispatch)
      }
  }

  const Onkeydownfunc = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleLogin()
    }
  }

  return (
   <>
    <main className="grid place-items-center min-h-90 p-4  bg-blue-2 h-responsive">
        {/* <section className=" p-8 drop-shadow-1 bg-white rounded w-full max-w-[464px]"> */}
        <section className="p-4 sm:p-8 rounded w-full drop-shadow-1 bg-white max-w-[464px]">
          <div className="md:p-10 sm:p-4">
                <div className="sm:p-4">
                        <h3 className="text-2xl leading-7 font-normal text-primary mb-10">Login</h3>
                        <h5 className="text-black-500 font-lights text-xl leading-6 mb-6">Account Details</h5>
                                
                             <div className="flex flex-col gap-2 mt-6">
                                <label
                                for="email"
                                className=" text-black-500 font-light text-base leading-5"
                                >
                                Email Address
                                </label>
                                <input type="text" onChange={(e)=>setEmail(e.target.value)} onKeyDown={(e) => Onkeydownfunc(e)} className=" p-3 border  rounded-md  border-gray-1 text-sm font-normal leading-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black placeholder:text-grey-2 focus:outline-none " placeholder='Enter email' />
                                    {email ==""&&validCheck==1&&<p className='text-red-600 text-xs font-normal'>Email id required</p>}
                                
                            </div>
                            <div className="flex flex-col gap-2 mt-6">
                                <label
                                for="userName"
                                className="text-black-500 font-light text-base leading-5"
                                >
                                Password
                                </label>
                                <input onChange={(e)=>setPassword(e.target.value)} onKeyDown={(e) => Onkeydownfunc(e)} type="text" className="p-3 border  rounded-md border-gray-1  text-sm font-normal leading-4 focus:border-grey3 focus:shadow-none focus:ring-0 text-black placeholder:text-grey-2 focus:outline-none" placeholder='Enter password'/>
                                    {password ==""&&validCheck==1&&<p className='text-red-600 text-xs font-normal'>Password is required</p>} 
                            </div>
                            

                            <button className="bg-dark-500 mb-3 p-3 w-full rounded text-sm font-medium leading-4 text-white  mt-6 " onClick={()=>handleLogin()}>
                            {loader?
                            <div className="loader"></div> :
                                "Login"
                            }
                            </button>
                            <Link href="/auth/sign-up" className="text-base font-light text-black-500 text-center block w-full">Don&apos;t Have a account? <span className="font-medium">Sign up</span></Link>
                 </div>
            </div>
        </section>
    </main>
           
   </>
  )
}




