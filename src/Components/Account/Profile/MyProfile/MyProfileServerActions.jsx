import React from 'react'

export default function MyProfileServerActions() {


  return (
  <>
   <div className='p-4 sm:p-10 md:pr-[118px] '>
                <div>
                    <h3 className='text-xl text-black mb-8 leading-6 font-normal'>Profile Info</h3>
                    <div className='grid grid-cols-1 sm:grid-1auto gap-5 sm:gap-[70px] items-start mb-8'>
                        <div className='relative w-[120px] h-[120px] m-auto sm:m-0'>
                            <img src="/img/profile.svg" className='w-full h-full' />
                            <input type='file' className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer' />
                        </div>
                        <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6'>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base leading-5 text-black font-light'>Name </p>
                                <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base leading-5 text-black font-light'>Mobile Number </p>
                                <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p className='text-base leading-5 text-black font-light'>Email Id  </p>
                                <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-xl text-black mb-8 leading-6 font-normal'>Address Info</h3>
                        <div className='sm:pl-[191px]'>
                            <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-6 mb-6'>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>House No </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>Area </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>City </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>State </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>Country </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-base leading-5 text-black font-light'>Pincode </p>
                                    <input className='border-grey3 border px-3 py-4 text-base text-black leading-5 font-normal rounded-xl h-[52px] focus-visible:outline-none w-full' />
                                </div>
                            </div>
                            <div className='flex gap-4 justify-end'>
                                <button className='py-3 px-6 h-11 text-base leading-5 text-black border border-black rounded'>Cancel</button>
                                <button className='py-3 px-6 h-11 text-base leading-5 text-white bg-black rounded'>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </>
  )
}
