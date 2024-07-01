"use client"
import ImageComponets from '@/Components/ImageComponent'
import { fetchGraphQLDa } from '@/api/clientGraphicql'
import { GET_MY_ORDERED_LIST } from '@/api/query'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker'
import moment from 'moment/moment'
import Pagination from '@/utils/Pagination'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import MyOrderList from '@/utils/SkeletonLoader/MyOrderList'
import { handleOrder } from '@/api/clientActions'
import { useDispatch } from 'react-redux'
import { orderIdValue } from '@/redux/slices/cartSlice'
import { imageUrl } from '@/api/url'

const Status=[   
    {id:0, name: "Choose Status",apiName:""}, 
    {id:1, name: "Order Placed",apiName:"placed"},
    {id:2, name: "Shipped",apiName:"shipped"},
    {id:3, name: "Out Of Delivery",apiName:"outofdelivery"},
    // {id:4, name: "Delivered",apiName:"delivered"},
    // {id:5, name: "Canceled",apiName:"cancelled"}
]

const StatusHistory=[
    {id:0, name: "Choose Status",apiName:""}, 
    {id:1, name: "Delivered",apiName:"delivered"},
    {id:2, name: "Cancelled",apiName:"cancelled"}
]

const Filters = [
    {orderId: false},
    {delstatus: false},
    {date: false}
  ]

  



    export default function MyOrderServerActions({routers}) {
    const searchParams=useSearchParams()
    const off=searchParams.get("offset")
    const pathNameHistory=usePathname()
    const [productList,setProductList]=useState([])
    const [orderId,setOrderId]=useState("")
    const [startDate,setStartDate]=useState("")
    const [endDate,setEndDate]=useState("")
    const [deliveryStatus,setDeliveryStatus]=useState("")
    const [applyfilter,setApplyFilter]=useState(false)
    const [searchFilter,setSearchFilter]=useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [offset,setOffset]=useState(parseInt(off))
    const [limit] = useState(10);
    const [totalRecords,setTotalRecords]=useState(0)
    const [validCheck,setValidCheck]=useState(0)
    const [skeleton,setSkeleton]=useState(true)
    const [inputData,setInputData]=useState()
    const router=useRouter()


    const orderList= async ()=>{
        if(pathNameHistory==="/account/my-orders"){
        setProductList([])
        setTotalRecords(0)
        let list_var={"lim":10,"off":offset,"filter":{"upcomingOrders": 1}}
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)

        if(postData){
            setSkeleton(false)
        }
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
    }else{
        setProductList([])
        setTotalRecords(0)
        let list_var={"lim":10,"off":offset,"filter":{"orderHistory": 1}}
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        if(postData){
            setSkeleton(false)
        }
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)  
    }
    }

    const searchData= async ()=>{
        if(pathNameHistory==="/account/my-orders"){
        setProductList([])
        setTotalRecords(0)
        let list_var={"lim":10,"off":offset,"filter":{"upcomingOrders": 1,"searchKeyword":searchFilter}}
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
    }else{
        setProductList([])
        setTotalRecords(0)
        let list_var={"lim":10,"off":offset,"filter":{"orderHistory": 1,"searchKeyword":searchFilter}}
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
    }
    }



    useEffect(()=>{
        if(searchFilter==""){
        orderList()
    }
    },[offset])

    useEffect(()=>{
        searchData()
    },[searchFilter,offset])

   
    const handleFilter=async()=>{
        setInputData(orderId)
        
        if(orderId==""){
            Filters[0].orderId=false
        }
        if(pathNameHistory==="/account/my-orders"){
        if(startDate!=""&&endDate==""){
            setValidCheck(1)
        }else{
            setValidCheck(0)
        setApplyFilter(true)
        if(orderId!=""){
            Filters[0].orderId=true
           
        }
        if(deliveryStatus?.name!=undefined){
            Filters[1].delstatus=true
        }
        if(startDate!=""&&endDate){
            Filters[2].date=true
        }
        let list_var={
            "lim":10,
            "off":offset,
            "filter":{
                "status":deliveryStatus?.apiName?deliveryStatus?.apiName:"",
                "startingDate":startDate!=""?moment(startDate).format("YYYY-MM-DD"):"",
                "endingDate":endDate!=""?moment(endDate).format("YYYY-MM-DD"):"",
                "orderId":orderId?orderId:"",
                // "upcomingOrders": 1
            }
        }
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
    }
  }
  else{
    if(startDate!=""&&endDate==""){
        setValidCheck(1)
    }else{
        setValidCheck(0)
    setApplyFilter(true)
    
    if(orderId!=""){
        Filters[0].orderId=true
    }
    if(deliveryStatus?.name!=undefined){
        Filters[1].delstatus=true
    }
    if(startDate!=""&&endDate){
        Filters[2].date=true
    }
    let list_var={
        "lim":10,
        "off":offset,
        "filter":{
            "status":deliveryStatus?.apiName?deliveryStatus?.apiName:"",
            "startingDate":startDate!=""?moment(startDate).format("YYYY-MM-DD"):"",
            "endingDate":endDate!=""?moment(endDate).format("YYYY-MM-DD"):"",
            "orderId":orderId?orderId:"",
            // "orderHistory": 1
        }
    }
    let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
    setProductList(postData?.ecommerceProductOrdersList?.productList)
    setTotalRecords(postData?.ecommerceProductOrdersList?.count)
}
  }
    }

    const handleClear=async ()=>{
    
        setSkeleton(true)
        if(pathNameHistory==="/account/my-orders"){
        setOrderId("")
        setStartDate("")
        setEndDate("")
        setDeliveryStatus("")
        setProductList([])
        setApplyFilter(false)
        Filters[0].orderId=false
        Filters[1].delstatus=false
        Filters[2].date=false
        let list_var={"lim":10,"off":offset,"filter":{"upcomingOrders": 1}}
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        if(postData){
            setSkeleton(false)
        }
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
    }else{
        setOrderId("")
        setStartDate("")
        setEndDate("")
        setDeliveryStatus("")
        setProductList([])
        setApplyFilter(false)
        Filters[0].orderId=false
        Filters[1].delstatus=false
        Filters[2].date=false
        let list_var={"lim":10,"off":offset,"filter":{"orderHistory": 1}}
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        if(postData){
            setSkeleton(false)
        }
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
    }
    }

    const handleSingleFilter=async(data)=>{
        let list_var
        if(data=="orderId"){
            setOrderId("")
            Filters[0].orderId=false
            if(pathNameHistory==="/account/my-orders"){
             list_var={
                "lim":10,
                "off":offset,
                "filter":{
                    "status":deliveryStatus?.apiName?deliveryStatus?.apiName:"",
                    "startingDate":startDate!=""?moment(startDate).format("YYYY-MM-DD"):"",
                    "endingDate":endDate!=""?moment(endDate).format("YYYY-MM-DD"):"",
                    "upcomingOrders": 1
                }
            }
        }else{
            list_var={
                "lim":10,
                "off":offset,
                "filter":{
                    "status":deliveryStatus?.apiName?deliveryStatus?.apiName:"",
                    "startingDate":startDate!=""?moment(startDate).format("YYYY-MM-DD"):"",
                    "endingDate":endDate!=""?moment(endDate).format("YYYY-MM-DD"):"",
                    "orderHistory": 1
                }
            }
        }
          
        }else if(data=="status"){

            setDeliveryStatus("")
            Filters[1].delstatus=false
            if(pathNameHistory==="/account/my-orders"){
            list_var={
                "lim":10,
                "off":offset,
                "filter":{
                    "startingDate":startDate!=""?moment(startDate).format("YYYY-MM-DD"):"",
                    "endingDate":endDate!=""?moment(endDate).format("YYYY-MM-DD"):"",
                    "orderId":orderId?orderId:"",
                    "upcomingOrders": 1
                }
            }
        }else{
            list_var={
                "lim":10,
                "off":offset,
                "filter":{
                    "startingDate":startDate!=""?moment(startDate).format("YYYY-MM-DD"):"",
                    "endingDate":endDate!=""?moment(endDate).format("YYYY-MM-DD"):"",
                    "orderId":orderId?orderId:"",
                    "orderHistory": 1
                }
            }
        }
        }else if(data=="date"){
            setStartDate("")
            setEndDate("")
            Filters[2].date=false
            if(pathNameHistory==="/account/my-orders"){
            list_var={
                "lim":10,
                "off":offset,
                "filter":{
                    "status":deliveryStatus?.apiName?deliveryStatus?.apiName:"",
                    "orderId":orderId?orderId:"",
                    "upcomingOrders": 1
                }
            }
        }else{
            list_var={
                "lim":10,
                "off":offset,
                "filter":{
                    "status":deliveryStatus?.apiName?deliveryStatus?.apiName:"",
                    "orderId":orderId?orderId:"",
                    "orderHistory": 1
                }
            }
        }
        }
        
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
    }
   
    const handleChange=(e)=>{
        if(e.target.value){
            Filters[1].delstatus=false
        }
        if(pathNameHistory==="/account/my-orders"){
            if(e.target.value!="Choose Status"){
        Status.map((data,index)=>{
            if(data.name===e.target.value){
                let obj={
                    "id":data.id,
                    "name":e.target.value,
                    "apiName":data.apiName
                }

                setDeliveryStatus(obj)
            }
        })
    }
    }else{
        if(e.target.value!="Choose Status"){
        StatusHistory.map((data,index)=>{
            if(data.name===e.target.value){
                let obj={
                    "id":data.id,
                    "name":e.target.value,
                    "apiName":data.apiName
                }
                setDeliveryStatus(obj)
            }
        })
    }
    }
    }

    const handleOrderId=(e)=>{
        
            setOrderId(e.target.value)
        
        
       
    }
    const onPageChange=(data)=>{

        setSkeleton(true)
        if(pathNameHistory==="/account/my-orders"){
        let offset = Math.ceil((data - 1) * limit);
        setOffset(offset)
        setCurrentPage(data)
        router.push(`/account/my-orders?offset=${offset}`)
    }else{
        let offset = Math.ceil((data - 1) * limit);
        setOffset(offset)
        setCurrentPage(data)
        router.push(`/account/my-history?offset=${offset}`)
    }
    }

    const nPages1 = Math.ceil(totalRecords!=undefined&&totalRecords / 10)
    
    const handleDate=(date)=>{
     setStartDate(date)
     Filters[2].date=false
    }
    useEffect(()=>{
        setCurrentPage(offset/10+1)
    },[])

    //  let disptach=useDispatch()
    // const handleClick=(id)=>{
    //     disptach(orderIdValue(id))
    // }
    
  return (
    <>
       <div className="p-4 sm:p-10">
                <div className="mb-6">
                    <h3 className="text-2xl font-normal mb-[5px] text-black-500 uppercase">MY Orders</h3>
                    <p className="text-3-light text-sm font-normal">Track your order history</p>
                </div>
                <div className="flex justify-between sm:items-center items-start sm:flex-row flex-col gap-4 sm:mb-0 mb-4">
                    <div className="flex items-center gap-4 mt-5">
                        <Link href={`/account/my-orders?offset=0`} key={1} className={`pb-1.5 ${pathNameHistory==="/account/my-orders"&& "border-b-2"} block border-black-500 text-sm font-normal text-black-500`} >
                            Upcoming Orders
                        </Link>
                        <Link href={`/account/my-history?offset=0`} key={2} className={` pb-1.5 ${pathNameHistory==="/account/my-history"&&"border-b-2"} block border-black-500 text-sm font-normal text-black-500`} >
                            History
                        </Link>
                    </div>
                    <div className="relative sm:w-auto w-full">
                        <input type="text" value={searchFilter} className="border-grey3 h-8 sm:w-[300px] w-full py-2 ps-12 pe-2 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded " placeholder="search" onChange={(e)=>setSearchFilter(e.target.value)}/>
                        <img src="/img/search-light.svg" className="absolute top-2 left-4" />
                    </div>
                </div>
                <div className="border-grey border rounded">
                    <div className="px-2 py-4 flex gap-5 md:flex-row flex-col border-b border-grey ">
                        <div className="flex items-center gap-4 sm:w-[90%] w-full sm:flex-row flex-col">
                            <div className="w-full">
                                <input type="text" value={orderId} className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded" placeholder="Enter Order ID" onChange={(e)=>{handleOrderId(e)}}/>
                            </div>
                            <div className="relative w-full">
                                <select value={deliveryStatus?.name?deliveryStatus?.name:""} className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded" onChange={(e)=>handleChange(e)}>
                                    {pathNameHistory=="/account/my-history"?<>
                                    {StatusHistory.map((data,ind)=>(<>
                                        <option value={data.name}>{data.name}</option></>))}</>
                                    :<>
                                    {Status.map((data,ind)=>(<>
                                    <option value={data.name}>{data.name}</option></>))}</>}
                                </select>
                            </div>
                            <div className="w-full">
                                {/* <input type="text" className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded" placeholder="Start Date" /> */}
                                <ReactDatePicker
                                placeholderText="Start Date"
                                className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded"
                                dateFormat="dd/MM/yyyy"
                                selected={startDate}
                                onChange={(date) => (handleDate(date))}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                minDate={new Date(1990, 1, 1)}
                                maxDate={new Date()}
                                />
                            </div>
                            <div className={`w-full ${startDate===""?"pointer-events-none":""}`}>
                                {/* <input type="text" className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded" placeholder="End Date" /> */}
                                <ReactDatePicker
                                placeholderText="End Date"
                                className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded"
                                dateFormat="dd/MM/yyyy"
                                selected={endDate}
                                onChange={(date) => {setEndDate(date);}}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                minDate={new Date(1990, 1, 1)}
                                maxDate={new Date()}
                                />
                                {startDate!=""&&endDate==""&&validCheck==1&&<p className='text-red-600 text-xs font-normal'>End Date is required</p>}
                            </div>
                        </div>
                        <div className="flex gap-2 items-center justify-end md:w-auto w-full whitespace-nowrap">
                            <button className="flex h-8 w-full sm:w-[128px] justify-center gap-2 items-center bg-black px-3 py-1.5 text-base font-normal leading-5 text-white rounded" onClick={()=>handleFilter()}>
                            Apply Filters
                            </button>
                            <button className="text-black w-full justify-center sm:w-[117px] h-8 flex items-center px-3 py-1.5 border border-black text-base font-normal rounded" onClick={() => handleClear()}>Clear Filter</button>
                        </div>

                    </div>
                    <div className="p-2 flex gap-4 border-b border-grey flex-wrap">
                        {applyfilter==true&&<>
                        {Filters[0].orderId==true&&<>
                        <div className="px-2 py-1 border border-grey rounded text-xs font-light text-black-500 relative">
                            {/* SP11478522165456 */}
                            {inputData}
                            <img src="/img/cancel-bg.svg" className="absolute -right-1.5 -top-1.5 cursor-pointer" onClick={()=>handleSingleFilter("orderId")}/>
                        </div></>}
                        {Filters[1].delstatus==true&&<>
                        <div className="px-2 py-1 border border-grey rounded text-xs font-light text-black-500 relative">
                            {deliveryStatus?.name}
                            <img src="/img/cancel-bg.svg" className="absolute -right-1.5 -top-1.5 cursor-pointer" onClick={()=>handleSingleFilter("status")}/>
                        </div></>}
                        {Filters[2].date==true&&<>
                        <div className="relative flex gap-1 items-center">
                            <div className="px-2 py-1 border border-grey rounded text-xs font-light text-black-500 ">
                                {moment(startDate).format("YYYY-MM-DD")}
                            </div>
                            <div className="text-xs text-black-500 font-light">-</div>
                            <div className="px-2 py-1 border border-grey rounded text-xs font-light text-black-500 relative">
                                {moment(endDate).format("YYYY-MM-DD")}
                                <img src="/img/cancel-bg.svg" className="absolute -right-1.5 -top-1.5 cursor-pointer" onClick={()=>handleSingleFilter("date")}/>
                            </div>
                        </div></>}
                        </>}
                    </div>
                    <div className="overflow-auto min-h-[510px]">
                        <table className="w-full table border-collapse lastdata">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Product Name
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Order ID
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Price
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Order Date
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Delivery Date
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-center text-base font-normal text-black-500">
                                        Status
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-center text-base font-normal text-black-500">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            {pathNameHistory!="/account/my-history"?<>
                            <tbody>
                                {
                                    skeleton
                                    ?
                                    <MyOrderList/>
                                    :
                                <>
                                {productList?.length>0?productList?.map((result,index)=>(
                                <>
                                {console.log(productList,'productList')}
                                <tr>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex gap-6 items-center md:flex-row flex-col">
                                           
                                            <ImageComponets path={`${imageUrl}${result?.productImageArray?.[0]}`}  w={60} h={38}/>
                                            {/* <img src={"https://demo.spurtcms.com/"+result?.productImagePath} className="w-20 h-15"
                                            onError={({ currentTarget }) => {
                                            currentTarget.onerror = null;
                                            currentTarget.src = "/img/no-image.png";
                                        }} /> */}
                                            <h3 className="text-sm font-normal text-black-500">{result?.productName}</h3>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <h3 className="text-sm font-normal text-black-500">{result?.orderUniqueId}</h3>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                            <img src="/img/rupee-sm-light.svg" />
                                            {result?.orderPrice}
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">{moment(result?.orderTime).format("DD MMMM YYYY")}</p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5"></p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-center">
                                        <div className="flex justify-center">
                                            <div className={`px-2 py-[3px] ${result?.orderStatus=="canceled"?'bg-danger text-danger':'bg-sucess text-sucess'} text-xs font-normal rounded`}>
                                                {result?.orderStatus}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-center">
                                        <Link href={`/account/my-order-detail/${result?.productSlug}/${result?.orderId}`} className="text-3-light font-medium text-sm hover:underline">View Details</Link>
                                    </td>
                                </tr>
                                
                                </>))
                                :<>

                                <tr>
                                    <td colSpan={8}>
                                <div className="h-[50vh] flex justify-center text-center">
                        <div className="mt-16">
                            <img src="/img/No-orded.svg" />
                            <p className="text-sm font-normal mb-4 mt-3 text-black">You have no orders</p>
                            <Link href="/" className="bg-dark-500 rounded flex justify-center items-center text-white text-base font-normal px-6 py-2 h-9">Start Shopping</Link>
                        </div>
                    </div>
                    </td>
                                 </tr>
                             </>}
                             </>}
                           
                            </tbody></>:<>

                            <tbody>

                                {
                                      skeleton
                                    ?
                                    <MyOrderList/>
                                    :
                                <>
                                {productList?.length>0?productList?.map((result,index)=>(
                                <>
                                <tr>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex gap-6 items-center md:flex-row flex-col">
                                            {/* <img src="/img/checkList-product1.svg" className="w-[60px] h-[38px]s" /> */}
                                            <ImageComponets path={"https://demo.spurtcms.com/"+result?.productImagePath}  w={60} h={38}/>
                                            <h3 className="text-sm font-normal text-black-500">{result?.productName}</h3>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <h3 className="text-sm font-normal text-black-500">{result?.orderUniqueId}</h3>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                            <img src="/img/rupee-sm-light.svg" />
                                            {result?.orderPrice}
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">{moment(result?.createdOn).format("DD MMMM YYYY")}</p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5"></p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-center">
                                        <div className="flex justify-center">
                                            <div className="px-2 py-[3px] bg-sucess text-sucess text-xs font-normal rounded">
                                                {result?.orderStatus}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-center">
                                        <Link href={`/account/my-order-detail/${result?.productSlug}/${result?.orderId}`} className="text-3-light font-medium text-sm hover:underline">View Details</Link>
                                    </td>
                                </tr>
                                </>))
                                :<>

                                <tr>
                                    <td colSpan={8}>
                                <div className="h-[50vh] flex justify-center text-center">
                        <div className="mt-16">
                            <img src="/img/No-orded.svg" />
                            <p className="text-sm font-normal mb-4 mt-3 text-black">You have no orders</p>
                            <Link href="/" className="bg-dark-500 rounded flex justify-center items-center text-white text-base font-normal px-6 py-2 h-9">Start Shopping</Link>
                        </div>
                    </div>
                    </td>
                               </tr>
                               </>}
                               </> }
                            </tbody>
                            </>}
                        </table>

                                      
                    </div>
                    
                </div>
                {productList!=""&&<>
                {searchFilter==""&&totalRecords>10&&<>
                <div className="flex justify-end mt-5">
                <Pagination 
                nPages1={nPages1}
                currentPage={currentPage}
                onPageChange={onPageChange}
                />
                </div></>}
                {searchFilter!=""&&totalRecords>10&&<>
                <div className="flex justify-end mt-5">
                <Pagination 
                nPages1={nPages1}
                currentPage={currentPage}
                onPageChange={onPageChange}
                />
                </div></>}
                </>}
                 
            </div>
    </>
  )
}
