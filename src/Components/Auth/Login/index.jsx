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
                            <svg aria-hidden="true" role="status" class="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                            </svg>:
                                "Login"
                            }
                            </button>
                            <Link href="/auth/sign-up" className="text-base font-light text-black-500 text-center block w-full">Don&apos;t Have a account? <span className="font-medium">Sign in</span></Link>
                 </div>
            </div>
        </section>
    </main>
           
   </>
  )
}




