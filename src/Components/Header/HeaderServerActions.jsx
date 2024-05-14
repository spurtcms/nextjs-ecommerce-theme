"use client";
import { Fragment, useEffect, useRef, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import ImageComponets from "../ImageComponent";
import { GET_ADDRESS_DETAIL, GET_MY_CART_QUERY, GET_POSTS_LIST_QUERY, Get_CATEGORIES_LIST } from "@/api/query";
import { useRouter } from "next/navigation";
import { fetchGraphQLDa } from "@/api/clientGraphicql";
import { useSelector,useDispatch } from "react-redux";
import HeaderPageSkeleton from "@/utils/SkeletonLoader/HeaderPage";
import { fetchGraphQl } from "@/api/graphicql";
import { RemoveToken } from "@/api/serverActions";
import { catagoryId, catagoryName } from "@/redux/slices/catgorySlice";
import { checkCartName, getTrriger, reloadCartCount } from "@/redux/slices/cartSlice";
import ToastMessage from "../ToastMessage/ToastMessage";
// import Loader from "./Loader";


// const navigation = [
//   { name: "Electronics", href: "#", current: true },
//   { name: "TVs & Appliances", href: "#", current: false },
//   { name: "Mens", href: "#", current: false },
//   { name: "Women", href: "#", current: false },
//   { name: "Baby & kids", href: "#", current: false },
//   { name: "Home & Furniture", href: "#", current: false },
//   { name: "Offer Zone", href: "#", current: false },
// ];


export default function HeaderServerActions({tokenCheck}) {
    const dispatch=useDispatch()
    const reloadCount=useSelector((state)=>state.cartReducer.reloadCount)
    const catgorId=useSelector((state)=>state.catgoReducer.catgoId)
    const catogoryName=useSelector((state)=>state.catgoReducer.catagoryName)
    

  const [catgoData,setCatgoData]=useState()
  const [productListData,setProductListData]=useState()
  const [searchBtnOn,setSearchBtnOn]=useState(false)
  const [search,setSearch]=useState("")
  const [cartCount,setCartcount]=useState(0)
  const [skeleton,setSkeleton]=useState(true)
  const [trigger,setTrigger]=useState(0)
  const [cartLoad,setCartrelaod]=useState(0)
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [dataImg,setDataImg]=useState('')
  

  
  
  const router=useRouter()
  const resultsRef = useRef(null);



  const hadlegetAddress=async()=>{
    let myAddress=await fetchGraphQl(GET_ADDRESS_DETAIL)
    setDataImg(myAddress)
    console.log(myAddress?.ecommerceCustomerDetails,'myAddress');
    // if(myAddress?.ecommerceCustomerDetails){
    //   setName(myAddress.ecommerceCustomerDetails.firstName)
    //   setEmail(myAddress.ecommerceCustomerDetails.email)
    //   setArea(myAddress.ecommerceCustomerDetails.streetAddress)
    //   setNumber(myAddress.ecommerceCustomerDetails.mobileNo)
    //   setStates(myAddress.ecommerceCustomerDetails.state)
    //   setHouseNo(myAddress.ecommerceCustomerDetails.zipCode)
    //   setCity(myAddress.ecommerceCustomerDetails.city)
    //   setCountry(myAddress.ecommerceCustomerDetails.country)
    // }
  }
  useEffect(()=>{
     hadlegetAddress()
     console.log("object")
  },[reloadCount])


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
  }

  const categorieList1 = async ()=>{
    let catgo_variab={"categoryGroupId":147}
    let postData= await fetchGraphQLDa(Get_CATEGORIES_LIST,catgo_variab)
    handlecatData(postData)
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
    categorieList1()
  },[trigger])
  useEffect(()=>{
    listData()
  },[search])

  const handleCartCountCheck=async()=>{
    if(tokenCheck){
        let variable={
            "limit":10,
            "offset":0,
          }
         let mycartlist=await fetchGraphQl(GET_MY_CART_QUERY,variable)
         
          mycartlist=mycartlist?.ecommerceCartList?.cartList
          
          setCartcount(mycartlist?.length?mycartlist?.length:0)
      }else{
        if(localStorage.getItem("add-cart-list")){
            let count=JSON.parse(localStorage.getItem("add-cart-list"))
            setCartcount(count.length)
         }else{
           setCartcount(0)
         }
      }
    
  }
  useEffect(()=>{
    handleCartCountCheck()
  
   
    },[reloadCount,cartLoad,tokenCheck])

const handleClose=()=>{
  setSearchBtnOn(true)
  setProductListData()
}

const handleProduct=(data)=>{
  setTrigger(trigger+1)
  dispatch(catagoryId(data?.categoriesId))
  router.push(`/product-detail/${data?.productSlug}`)
  setSearchBtnOn(false)
  setFocusedIndex(-1)
}
const handleCatagory=(data)=>{
  dispatch(checkCartName(""))
    dispatch(catagoryName(data?.categoryName))

      dispatch(catagoryId(data.id))
    
    
  }
const Logout=()=>{
  dispatch(checkCartName('')) 
  setCartrelaod(cartLoad+1)
  localStorage.removeItem("add-cart-list")
  ToastMessage({type:'success',message:"Logout Successfull"})
    RemoveToken()
    // dispatch(getTrriger(false))
    dispatch(reloadCartCount(reloadCount-1))
    
}

const handlecatData=(data)=>{
data?.categoriesList?.categories.map((vdata,index)=>{
if(vdata.id==catgorId){
  dispatch(catagoryName(vdata?.categoryName))
}
})
}

const handleKeyDown = (event) => {
  if (event.key === 'ArrowDown') {
    if(focusedIndex>=-1&&focusedIndex<productListData.length-1){
    setFocusedIndex(focusedIndex + 1);
    const element = document.getElementById(focusedIndex +1);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
  }else{
    setFocusedIndex(-1)
  }
  }else if(event.key === "Enter"){
    if (focusedIndex >= 0 && focusedIndex < productListData.length) {
      handleProduct(productListData[focusedIndex]);
    }
  }else if(event.key ==="ArrowUp"){
    if (focusedIndex >= -1 && focusedIndex < productListData.length) {
    const element = document.getElementById(focusedIndex - 1);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center'});
    }
    setFocusedIndex(focusedIndex -1)
    if (focusedIndex === -1) {
      resultsRef.current.scrollTop = 0;
    }
  }else{
    if(focusedIndex <=-1){
    setFocusedIndex(productListData?.length - 1)}
  }}
};



console.log(productListData,"8978")
console.log(dataImg,'dataImg')
  return (
    <>
    {/* <Loader /> */}
     <Disclosure as="nav" className="bg-white border-b border-1-light">
        {({ open }) => (
          <>
            {/* header */}

            <div className="  lg::px-10 px-5 ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 gap-4 items-center justify-center sm:justify-between ">
                  <Link href={'/'}
                    prefetch
                    className="flex flex-shrink-0 items-center w-1/3  sm:w-auto"
                    onClick={()=>{ dispatch(checkCartName(""),dispatch(catagoryName(catgoData?.categoriesList?.categories[0]?.categoryName)),
                    dispatch(catagoryId(catgoData?.categoriesList?.categories[0]?.id)))}}
                  >
                    <ImageComponets path={"/img/logo.svg"} alt={"spurtCMS logo"} w={157} h={20}/>
                   
                  </Link>
                  {skeleton==true?<HeaderPageSkeleton/>:
                  <div className="hidden sm:ml-6 lg:block">
                    <div className="flex gap-6 ">
                      {catgoData?.categoriesList?.categories?.map((item,index) => (
                         <Link href={"/"} onClick={()=>handleCatagory(item)} prefetch className={`font-light xl:text-sm text-sm  text-black text-nowrap leading-tight flex flex-col gap-1 items-center hover:text-primary  after:content-[''] after:inline-block after:w-1 after:h-1  hover:after:bg-[url('/img/active-dot.svg')]  transition-all 
                         ${(index==0&&catgorId==null)||item.id==catgorId?'text-primary after:bg-[url("/img/active-dot.svg")]':'hover:text-blue-500'}  `} >
                           {item.categoryName}
                         </Link >
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
                          <input type="text" className="border-0 border-slate-200 py-4 ps-8 w-full h-[50px] focus:outline-none focus:ring-0 text-sm font-normal text-black" onKeyDown={(e)=>handleKeyDown(e)} onChange={(e)=>setSearch(e.target.value)}/>
                          <img src="/img/close2.svg"  className="absolute top-[17px] right-0 cursor-pointer" onClick={()=>setSearchBtnOn(false)}/>
                          <img src="/img/search-light.svg"  className="absolute top-[17px] left-0"/>
                        </div>
                        {search!=""&&
                        <div className="overflow-auto max-h-56 border-t border-slate-200" ref={resultsRef}>
                          {productListData?.length!=0?productListData?.map((data,index)=>(<>
                          <Link key={index} id={index} href={`/product-detail/${data?.productSlug}`} prefetch={true} className={`flex gap-3 items-center p-2 border-b border-slate-200 h-14 ${focusedIndex === index? 'bg-gray-200' : ''}`}  onClick={()=>handleProduct(data)} >
                            <div className="w-10 min-h-10 flex items-center" prefetch onClick={()=>handleProduct(data)}><ImageComponets path={data?.productImageArray?.[0]} w={40} h={40} /></div>
                            <p className="text-sm font-normal text-black cursor-pointer" prefetch onClick={()=>handleProduct(data)}>{data?.productName}</p>
                          </Link></>)):<><div className="p-4 flex items-center justify-center"><p className="text-sm font-medium text-black" >{"No data found"}</p></div></>}
                        </div>}
                        </div>

                        
                        <div className="fixed top-0 h-full w-full opacity-[0.5] bg-white left-0 z-40"></div>
                    
                    </div>
                </>}
                   <Link href={"/my-cart"} prefetch>
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
                          {dataImg?.ecommerceCustomerDetails?.profileImage&&
                          <img
                          className="w-6 h-6 rounded-full"
                          src={dataImg?.ecommerceCustomerDetails?.profileImage}
                          alt="profile"
                        />}
                         {dataImg?.ecommerceCustomerDetails?.firstName!=undefined
                         ?
                         <div className='flex    text-black items-center justify-center relative h-6 w-6 overflow-hidden rounded-full bg-slate-300'>
                         {dataImg?.ecommerceCustomerDetails?.firstName.at(0)}
                        </div>
                        :
                        <img className="w-6 h-6 rounded-full" src='/img/user1.jpg' />
                         }
                        
                           {/* <img
                            className="w-6 h-6 rounded-full"
                            src="/img/profile.svg"
                            alt="profile"
                          /> */}
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
                              <Link
                                href="/account/my-profile"
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
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                href={`/account/my-orders?offset=0`}
                                // href={{
                                //   pathname: "/account/my-orders", query: { offset: 0 },
                                // }}
                                prefetch
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img src="/img/order.svg" alt="order" /> My
                                Orders
                              </Link>
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
                                tokenCheck?<a onClick={()=>Logout()} className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight cursor-pointer"
                                  )}> <img src="/img/logout.svg" alt="logout" />
                                Logout</a>:<><Link
                               href={"/auth/login"}
                               prefetch
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img src="/img/login.svg" alt="logout" />
                                Login
                               
                              </Link></>
                              
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
                 href={"/"}
                 prefetch
                 onClick={()=>handleCatagory(item)}
                 className={`block font-normal text-black  text-sm hover:text-primary  text-nowrap leading-tigh mt-0 p-1 
                 ${(index==0&&catgorId==null)||item.id==catgorId?'text-primary after:bg-[url("/img/active-dot.svg")]':'hover:text-blue-500'}  `}
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
