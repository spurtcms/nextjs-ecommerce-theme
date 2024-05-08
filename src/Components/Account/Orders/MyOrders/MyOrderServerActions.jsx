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
import { useRouter, useSearchParams } from 'next/navigation'

const Status=[   
    {id:0, name: "Choose Status"}, 
    {id:1, name: "placed"},
    {id:2, name: "Shipped"},
    {id:3, name: "Out Of Delivery"},
    {id:4, name: "Delivered"},
    {id:5, name: "Canceled"}
]


export default function MyOrderServerActions({routers}) {
    const searchParams=useSearchParams()
    const off=searchParams.get("offset")
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
    const [changeTab,setChangeTab]=useState(false)
    const [totalRecords,setTotalRecords]=useState(0)
    const router=useRouter()

    
    
    console.log(off,"09090kl")
    const orderList= async ()=>{
        let list_var={"lim":10,"off":offset}
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
        console.log(postData?.ecommerceProductOrdersList?.count,"99998iii")
    }

    const searchData= async ()=>{
        setProductList([])
        setTotalRecords(0)
        let list_var={"lim":10,"off":offset,"filter":{"searchKeyword":searchFilter}}
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        console.log(postData,"77yyughhg")
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
    }

    useEffect(()=>{
        if(searchFilter==""){
        orderList()
    }
    },[offset])

    useEffect(()=>{
        searchData()
    },[searchFilter,offset])

    const nPages1 = Math.ceil(totalRecords!=undefined&&totalRecords / 10)
    const handleFilter=async()=>{
        setApplyFilter(true)
        let list_var={
            "lim":10,
            "off":offset,
            "filter":{
                "status":deliveryStatus?.name?deliveryStatus?.name:"",
                "startingDate":startDate!=""?moment(startDate).format("YYYY-MM-DD"):"",
                "endingDate":endDate!=""?moment(endDate).format("YYYY-MM-DD"):"",
                "orderId":orderId?orderId:"",
            }
        }
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
        console.log(postData,"787")
    }

    const handleClear=async ()=>{
        setOrderId("")
        setStartDate("")
        setEndDate("")
        setDeliveryStatus("")
        setProductList([])
        setApplyFilter(false)
        let list_var={"lim":10,"off":offset}
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
    }

    const handleSingleFilter=async(data)=>{
        let list_var
        if(data=="orderId"){
            setOrderId("")
            // setApplyFilter(false)
             list_var={
                "lim":10,
                "off":offset,
                "filter":{
                    "status":deliveryStatus?.name?deliveryStatus?.name:"",
                    "startingDate":startDate!=""?moment(startDate).format("YYYY-MM-DD"):"",
                    "endingDate":endDate!=""?moment(endDate).format("YYYY-MM-DD"):"",
                }
            }
          
        }else if(data=="status"){

            setDeliveryStatus("")
            // setApplyFilter(false)
            list_var={
                "lim":10,
                "off":offset,
                "filter":{
                    "startingDate":startDate!=""?moment(startDate).format("YYYY-MM-DD"):"",
                    "endingDate":endDate!=""?moment(endDate).format("YYYY-MM-DD"):"",
                    "orderId":orderId?orderId:"",
                }
            }
        }else if(data=="date"){
            setStartDate("")
            setEndDate("")
            list_var={
                "lim":10,
                "off":offset,
                "filter":{
                    "status":deliveryStatus?.name?deliveryStatus?.name:"",
                    "orderId":orderId?orderId:"",
                }
            }
        }
        
        let postData= await fetchGraphQLDa(GET_MY_ORDERED_LIST,list_var)
        setProductList(postData?.ecommerceProductOrdersList?.productList)
        setTotalRecords(postData?.ecommerceProductOrdersList?.count)
    }

    const handleChange=(e)=>{
        console.log(e.target.value,"o7897iuk")
        Status.map((data,index)=>{
            if(data.name===e.target.value){
                let obj={
                    "id":data.id,
                    "name":e.target.value
                }

                setDeliveryStatus(obj)
            }
        })
    }

    const handleOrderId=(e)=>{
        setOrderId(e.target.value)
    }

    const onPageChange=(data)=>{
        // console.log(data,"78799")
        let offset = Math.ceil((data - 1) * limit);
        setOffset(offset)
        setCurrentPage(data)
        router.push(`/account/my-orders?offset=${offset}`)

    }
useEffect(()=>{
    setCurrentPage(offset/10+1)
},[])
    
    console.log(changeTab,"08jl")
  return (
    <>
       <div className="p-4 sm:p-10">
                <div className="mb-6">
                    <h3 className="text-2xl font-normal mb-[5px] text-black-500 uppercase">MY Orders</h3>
                    <p className="text-3-light text-sm font-normal">Track your order history</p>
                </div>
                <div className="flex justify-between sm:items-center items-start sm:flex-row flex-col gap-4 sm:mb-0 mb-4">
                    <div className="flex items-center gap-4 mt-5">
                        <Link href={`/account/my-orders?offset=0`} key={1} className={`pb-1.5 ${changeTab==false&& "border-b-2"} block border-black-500 text-sm font-normal text-black-500`} onClick={()=>setChangeTab(false)}>
                            Upcoming Orders
                        </Link>
                        <Link href={`/account/my-history?offset=0`} key={2} className={` pb-1.5 ${changeTab==true&&"border-b-2"} block border-black-500 text-sm font-normal text-black-500`} onClick={()=>setChangeTab(true)}>
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
                                    {Status.map((data,ind)=>(<>
                                    <option value={data.name}>{data.name}</option></>))}
                                </select>
                            </div>
                            <div className="w-full">
                                {/* <input type="text" className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded" placeholder="Start Date" /> */}
                                <ReactDatePicker
                                placeholderText="dd/mm/yyyy"
                                className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded"
                                dateFormat="dd/MM/yyyy"
                                selected={startDate}
                                onChange={(date) => {setStartDate(date);}}
                                peekNextMonth
                                showMonthDropdown
                                showYearDropdown
                                dropdownMode="select"
                                minDate={new Date(1990, 1, 1)}
                                maxDate={new Date()}
                                />
                            </div>
                            <div className="w-full">
                                {/* <input type="text" className="h-8 w-full border-grey3 focus:ring-0 focus:shadow-none focus:border-grey3 text-xs font-light rounded" placeholder="End Date" /> */}
                                <ReactDatePicker
                                placeholderText="dd/mm/yyyy"
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
                        {orderId!=""&&<>
                        <div className="px-2 py-1 border border-grey rounded text-xs font-light text-black-500 relative">
                            {/* SP11478522165456 */}
                            {orderId}
                            <img src="/img/cancel-bg.svg" className="absolute -right-1.5 -top-1.5 cursor-pointer" onClick={()=>handleSingleFilter("orderId")}/>
                        </div></>}
                        {deliveryStatus!=""&&<>
                        <div className="px-2 py-1 border border-grey rounded text-xs font-light text-black-500 relative">
                            {deliveryStatus?.name}
                            <img src="/img/cancel-bg.svg" className="absolute -right-1.5 -top-1.5 cursor-pointer" onClick={()=>handleSingleFilter("status")}/>
                        </div></>}
                        {startDate!=""&&endDate!=""&&<>
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
                    <div className="overflow-auto min-h-[530px]">
                        <table className="w-full table border-collapse">
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
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Status
                                    </th>
                                    <th className="px-4 py-2 border-b border-grey text-start text-base font-normal text-black-500">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {productList.length!=0?productList?.map((result,index)=>(<>
                                <tr>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex gap-6 items-center md:flex-row flex-col">
                                            {/* <img src="/img/checkList-product1.svg" className="w-[60px] h-[38px]s" /> */}
                                            <ImageComponets path={"https://demo.spurtcms.com/"+result?.productImagePath}  w={60} h={38}/>
                                            <h3 className="text-sm font-normal text-black-500">{result?.productName}</h3>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <h3 className="text-sm font-normal text-black-500">{result?.orderDetails?.orderUniqueId}</h3>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="flex items-center gap-1 text-3-light text-sm leading-5">
                                            <img src="/img/rupee-sm-light.svg" />
                                            {result?.orderDetails?.price}
                                        </p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5">{moment(result?.createdOn).format("DD MMMM YYYY")}</p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <p className="text-3-light text-sm leading-5"></p>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <div className="flex">
                                            <div className="px-2 py-[3px] bg-sucess text-sucess text-xs font-normal rounded">
                                                {result?.orderDetails?.status}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border-b border-grey text-start">
                                        <Link href={`/account/my-order-detail/${result?.productSlug}`} className="text-3-light font-light text-sm hover:underline">View Details</Link>
                                    </td>
                                </tr></>)):<>

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
                           
                            </tbody>
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
