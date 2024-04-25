"use client";
import { Fragment, useEffect, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import ImageComponets from "../ImageComponent";
import { GET_POSTS_LIST_QUERY, Get_CATEGORIES_LIST } from "@/api/query";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchGraphQLDa } from "@/api/clientGraphicql";
import { useSelector } from "react-redux";
import HeaderPageSkeleton from "@/utils/SkeletonLoader/HeaderPage";


const navigation = [
  { name: "Electronics", href: "#", current: true },
  { name: "TVs & Appliances", href: "#", current: false },
  { name: "Mens", href: "#", current: false },
  { name: "Women", href: "#", current: false },
  { name: "Baby & kids", href: "#", current: false },
  { name: "Home & Furniture", href: "#", current: false },
  { name: "Offer Zone", href: "#", current: false },
];


export default function Header() {

  const [catgoData,setCatgoData]=useState()
  // const [catNo,setCatNo]=useState()
  const [productListData,setProductListData]=useState()
  const [searchBtnOn,setSearchBtnOn]=useState(false)
  const [search,setSearch]=useState("")
  const [cartCount,setCartcount]=useState(0)
  const [skeleton,setSkeleton]=useState(true)
  const router=useRouter()
  const searchParams1 = useSearchParams()
  let catgoId=searchParams1.get("catgoId")
  const reloadCount=useSelector((state)=>state.cartReducer.reloadCount)

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
      
  const categorieList= async () =>{
    let catgo_variab={"categoryGroupId":147}
    let postData= await fetchGraphQLDa(Get_CATEGORIES_LIST,catgo_variab)
    setCatgoData(postData)
    if(postData){
      setSkeleton(false)
    }
    // catgoId=postData?.categoriesList?.categories[0].id?.toString()
    // setCatNo(catgoId)
  }

  const listData = async ()=>{
    let list_varab={"limit":10,"offset":0,"filter":{"searchKeyword":search}}
    let postData = await fetchGraphQLDa(GET_POSTS_LIST_QUERY,list_varab)
    setProductListData(postData?.ecommerceProductList?.productList) 
  }

  useEffect(()=>{
    categorieList()
  },[])

  useEffect(()=>{
    listData()
  },[search])

  useEffect(()=>{
    if(localStorage.getItem("add-cart-list")){
       let count=JSON.parse(localStorage.getItem("add-cart-list"))
       setCartcount(count.length)
    }else{
      setCartcount(0)
    }
    },[reloadCount])

const handleClose=()=>{
  setSearchBtnOn(true)
  setProductListData()
}

const handleProduct=(data)=>{
  router.push(`/product-detail/${data.id}`) 
  setSearchBtnOn(false)
}
  return (
    <>
     <Disclosure as="nav" className="bg-white border-b border-1-light">
        {({ open }) => (
          <>
            {/* header */}

            <div className="  lg::px-10 px-5 ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 gap-4 items-center justify-center sm:justify-between ">
                  <Link href={'/'}
                    
                    className="flex flex-shrink-0 items-center w-1/3  sm:w-auto"
                  >
                    <ImageComponets path={"/img/logo.svg"} alt={"spurtCMS logo"} w={157} h={20}/>
                   
                  </Link>
                  {skeleton==true?<HeaderPageSkeleton/>:
                  <div className="hidden sm:ml-6 lg:block">
                    <div className="flex gap-6 ">
                      {catgoData?.categoriesList?.categories?.map((item,index) => (
                        <Link href={catgoData?.categoriesList?.categories[0].id==item.id?`/`:`/?catgoId=${item.id}&catName=${item.categoryName}`}className={`font-light xl:text-sm text-xs  text-black text-nowrap leading-tight flex flex-col gap-1 items-center hover:text-primary  after:content-[''] after:inline-block after:w-1 after:h-1  hover:after:bg-[url('/img/active-dot.svg')]  transition-all 
                        ${(index==0&&catgoId==null)||item.id==catgoId?'text-primary after:bg-[url("/img/active-dot.svg")]':'hover:text-blue-500'}  `} >
                          {item.categoryName}
                        </Link>
                      ))}
                    </div>
                  </div>}

                  <div className=" flex gap-4 items-center lg:ms-0 ms-auto">
                    <button type="button" className="" onClick={()=>{handleClose()}}>
                      <img src="/img/search.svg" alt="search" />
                    </button>
                    {searchBtnOn&&<>
                 
                     <div className='fixed top-0 left-0 py-20 bg-transparent rounded h-full  drop-shadow-md overflow-y-auto w-full z-50'>
                      
                            <div className='px-4 max-w-[600px] m-auto bg-white border border-slate-200 rounded-md shadow-lg relative  z-50' >
                            <div className="relative w-full">
                              <input type="text" className="border-0 border-slate-200 py-4 ps-12 w-full h-[50px] focus:outline-none focus:ring-0 text-sm font-normal text-black"  onChange={(e)=>setSearch(e.target.value)}/>
                              <img src="/img/close2.svg"  className="absolute top-4 right-4 cursor-pointer" onClick={()=>setSearchBtnOn(false)}/>
                              <img src="/img/search.svg"  className="absolute top-4 left-4"/>
                            </div>
                            {search!=""&&
                            <div className="max-h-[171px] overflow-auto">
                              {productListData?.map((data,index)=>(<>
                              <div className="flex gap-3 items-center p-2 border-b border-slate-200">
                                <img src={data?.productImagePath} className="w-10 h-10 cursor-pointer" onClick={()=>handleProduct(data)}/>
                                <p className="text-sm font-normal text-black cursor-pointer" onClick={()=>handleProduct(data)}>{data?.productName}</p>
                              </div></>))}
                            </div>}
                            </div>

                            
                            <div className="fixed top-0 h-full w-full opacity-[0.5] bg-white left-0 z-40"></div>
                        
                        </div>
                    </>}

                   <Link href={"/my-cart"}>
                   <button type="button" className="relative">
                      <img src="/img/cart.svg" alt="search" />
                      <div>
                          <div className="absolute -top-1 -right-2 flex justify-center items-center w-3 h-3 bg-dark-500 rounded-full">
                            <span className="text-white text-[10px] leading-3">{cartCount}</span>
                          </div>
                        </div>
                    </button>

                    </Link>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative">
                      <div>
                        <Menu.Button className="relative flex rounded-full text-sm ">
                          <img
                            className="w-6 h-6 rounded-full"
                            src="/img/profile.svg"
                            alt="profile"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  py-1 rounded-md  ">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="javascript:void(0)"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img
                                  src="/img/profile-drop.svg"
                                  alt="profile"
                                />{" "}
                                My Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/myOrder"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img src="/img/order.svg" alt="order" /> My
                                Orders
                              </a>
                            )}
                          </Menu.Item>
                          {/* <Menu.Item>
                            {({ active }) => (
                              <a
                                href="javascript:void(0)"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img
                                  src="/img/notification.svg"
                                  alt="notification"
                                />{" "}
                                Notifications
                              </a>
                            )}
                          </Menu.Item> */}

                          {/* <Menu.Item>
                            {({ active }) => (
                              <a
                                href="javascript:void(0)"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img src="/img/coupons.svg" alt="coupons" />
                                Coupons
                              </a>
                            )}
                          </Menu.Item> */}

                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="javascript:void(0)"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img src="/img/logout.svg" alt="logout" />
                                Logout
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  <div className=" lg:hidden flex items-center ">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rotate-180 ">
                      <img src="/img/menu.svg" alt="menu" />
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 pb-2 pt-2 ">
                  {catgoData?.categoriesList?.categories?.map((item,index) => (
                    <Link
                      href={catgoData?.categoriesList?.categories[0].id==item.id?`/`:`/?catgoId=${item.id}&catName=${item.categoryName}`}
                      className=" block font-normal text-black  text-sm hover:text-primary text-primar text-nowrap leading-tigh mt-0 p-1 "
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.categoryName}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  )
}
