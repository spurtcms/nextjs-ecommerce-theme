'use client'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import ImageComponets from '../ImageComponent';


import { GET_POSTS_LIST_QUERY, GET_POST_VIEWCOUNT_QUERY, Get_CATEGORIES_LIST } from '@/api/query';
import { TaxPriceValidation } from '@/utils/regexValidation';
import { fetchGraphQLDa } from '@/api/clientGraphicql';
import HomePageSkeleton from '@/utils/SkeletonLoader/HomePage';
import { useSelector,useDispatch } from "react-redux";
import { catagoryId, catagoryName } from "@/redux/slices/catgorySlice";
import { fetchGraphQl } from '@/api/graphicql';
import { imageUrl } from '@/api/url';

const people = [
    {
      id: 1,
      name: "Low to high",
      setNo:0
    },
    {
      id: 2,
      name: "High to low ",
      setNo:1,
    },
    {
      id: 3,
      name: "Most Viewed",
      setNo:1,
      
    },
    // {
    //   id: 4,
    //   name: "High Rating",
    //   setNo:1,
    // },
  ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

export default function HomePage() {

    const dispatch=useDispatch()
    const catgorId=useSelector((state)=>state.catgoReducer.catgoId)
    const catogoryName=useSelector((state)=>state.catgoReducer.catagoryName)
    const [selected, setSelected] = useState(people);
    let [cardListData,setCardListData]=useState([])
    const [catagoryList,setCatagoryList]=useState()
    const [skeleton,setSkeleton]=useState(true)
    const [scrolCheck,setScrollCheck]=useState()
    let [offset,setOffset]=useState(0)
    const [count,setCount]=useState(null)
    const [disableScroll,setDisableScroll]=useState(false)




const listData = async ()=>{
  let list_varab={"limit":25,"offset":offset,"filter":{"categoryId":catgorId}}
  console.log(catgorId,'catgorId')
  let postData = await fetchGraphQLDa(GET_POSTS_LIST_QUERY,list_varab)
  console.log(postData,'postData')
  setCount(postData?.ecommerceProductList)
  setCardListData(postData?.ecommerceProductList?.productList)
  if(postData){
    setSkeleton(false)
    setScrollCheck(true)
  }
}




const offsetListData =async()=>{
  if(disableScroll==false){
  let list_varab={"limit":25,"offset":offset,"filter":{"categoryId":catgorId}}
  let postData = await fetchGraphQLDa(GET_POSTS_LIST_QUERY,list_varab)
  handleLoad(postData)
  if(postData){
    setSkeleton(false)
  }
  }
}

 const categorieList= async () =>{

  // let catgo_variab={"categoryGroupId":147}
  let postData= await fetchGraphQLDa(Get_CATEGORIES_LIST)
  setCatagoryList(postData?.categoriesList?.categories[0]?.categoryName)
  
  if(catgorId==null){
    dispatch(catagoryId(postData?.categoriesList?.categories[0]?.id))
  }
}
const sortBy = async () =>{
  if(selected.id==0){
    let catgo_variab={"categoryGroupId":147}
  let postData= await fetchGraphQLDa(Get_CATEGORIES_LIST,catgo_variab)
  setCatagoryList(postData?.categoriesList?.categories[0]?.categoryName)
  }
  if(selected.id!=3&&selected.id!=4){
  let list_varab={"limit":25,"offset":offset,"filter":{"categoryId":catgorId},"sort":{"price":selected.setNo}}
  let sortByData= await fetchGraphQLDa(GET_POSTS_LIST_QUERY,list_varab)
  let postData=cardListData.concat(sortByData?.ecommerceProductList?.productList)
  setCardListData(postData)
}
if(selected.id==3||selected.id==4){
  let list_varab={"limit":25,"offset":offset,"filter":{"categoryId":catgorId},"sort":{"viewCount":selected.setNo}}
  let sortByData= await fetchGraphQLDa(GET_POSTS_LIST_QUERY,list_varab)
  let postData=cardListData.concat(sortByData?.ecommerceProductList?.productList)
  setCardListData(postData)
}

} 

useEffect(()=>{
  setCardListData([])
  setOffset(0)
  offset=0
  if(offset==0){
  if(catgorId==null){
    setDisableScroll(false)
    setSelected([])
    categorieList()
    setSkeleton(true)
  }
  if(catgorId!=null){
    setDisableScroll(false)
    setSelected([])
    listData()  
    setSkeleton(true)
  }
}
},[catgorId])

useEffect(()=>{
  if(offset!=0&&selected.id==undefined){
    offsetListData()
  }
  if(offset!=0&&selected.id!=undefined){
    sortBy()
  }
},[offset])

useEffect(()=>{
  cardListData=[]
  if(selected.id!=undefined&&offset==0){
  sortBy()
}
},[selected])

const handleLoad=(data)=>{
  if(data?.ecommerceProductList?.productList?.length==0){
    setDisableScroll(true)
  }
  
  let postesArr=cardListData?.concat(data?.ecommerceProductList?.productList)
  setCardListData(postesArr)
  }



    const handleScroll = (e) => {
  
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight = Math.ceil(
        e.target.documentElement.scrollTop + window.innerHeight
      );
      if (currentHeight + 1 >= scrollHeight) {  

        setOffset(offset+25) 

      }
    };
  
    useEffect(() => {
      if(scrolCheck){
        window.addEventListener("scroll", handleScroll);
      }
      
    }, [handleScroll]);

    const handleCount=(slug)=>{
      let variable_count={
        "slug":slug
      }
      fetchGraphQl(GET_POST_VIEWCOUNT_QUERY,variable_count)
    }

    console.log(imageUrl,'imageUrl',cardListData)

  return (
    <>

{skeleton==true?
<HomePageSkeleton/>
:
<section class="lg:px-10 px-5 pb-10">
    <div className="flex justify-between py-6 flex-wrap gap-4">
         <>
           {/* top option */}
           <div className="flex items-center gap-2 ">
         
             <h1 className="text-xl text-black font-normal leading-6  ">
              {catgorId==null?catagoryList:catogoryName}
             </h1>
             <span className=" text-xs text-1-light leading-3 ">
               (0 of {count?.count} Products)
             </span>
           </div>
         </>

         <>
           {/* dropdown */}
           <div className="flex items-center gap-2" onClick={()=>{setOffset(0)}}>
             <Listbox value={selected} onChange={setSelected}>
               {({ open }) => (
                 <>
                   <Listbox.Label className=" text-sm font-normal leading-4 text-black">
                     SORT BY
                   </Listbox.Label>
                   <div className="relative">
                     <Listbox.Button className="relative  ">
                       <span className="flex items-center w-40 border border-grey py-2 ps-3  ">
                         <span className="text-xs font-normal text-black leading-4 me-1">
                           {/* Price:{selected.name==undefined&&' Choose filter'} */}
                           Price:
                         </span>
                         <span className=" text-xs font-normal text-black leading-4">
                          {selected.name}
                         </span>
                       </span>
                       <span className="pointer-events-none  absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                         <img src="\img\drop-arrow.svg" alt="arrow" />
                       </span>
                     </Listbox.Button>

                     <Transition
                       show={open}
                       as={Fragment}
                       leave="transition ease-in duration-100"
                       leaveFrom="opacity-100"
                       leaveTo="opacity-0"
                     >
                       <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1  shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-xs">
                         {people.map((sortValue) => (
                           <Listbox.Option
                             key={sortValue.id}
                             className={({ active }) =>
                               classNames(
                                 active ? "bg-gray-100 " : "text-gray-900",
                                 "relative cursor-default select-none py-2 pl-3 pr-9"
                               )
                             }
                             value={sortValue}
                           >
                             {({ selected, active }) => (
                               <>
                                 <div className="flex items-center">
                                   <span
                                     className={classNames(
                                       selected ? "font-semibold" : "font-sm",
                                       "ml-3 block truncate"
                                     )}
                                   >
                                     {sortValue.name}
                                   </span>
                                 </div>
                               </>
                             )}
                           </Listbox.Option>
                         ))}
                       </Listbox.Options>
                     </Transition>
                   </div>
                 </>
               )}
             </Listbox>
           </div>
         </>
        </div>
            <div class=" grid grid-auto-cols border-t border-s border-grey">
            {/* card */}
            {cardListData?.map((data,index)=>(
              
               <>
               {console.log(data,'data222')}
              <div key={index} class="group p-5 hover:shadow-3xl transition-shadow border-e border-b border-grey">
               
              <Link href={`/product-detail/${data?.productSlug}`} prefetch className="grid place-items-center" onClick={()=>handleCount(data?.productSlug)}>
                
                <ImageComponets path={`${imageUrl}${data?.productImageArray?.[0]}`} alt={data?.productName} w={300} h={200} styAdd={`h-40`}/>
              </Link>
              
              <div className="text-center">
              <Link
                 href={`/product-detail/${data?.productSlug}`}
                 prefetch
                  className=" text-base text-black font-medium leading-5 mt-5 block"
                >
                 {data?.productName}
                </Link>

                <p className="text-sm font-light leading-4 text-1-light mt-2 line-clamp-2">
                  {data?.productDescription}
                </p>
                <div className="flex gap-2 items-center justify-center mt-3">
                  <strong className="flex gap-1 items-center text-base font-semibold leading-5 text-black before:content-[''] before:inline-block before:w-2 before:h-3 before:bg-[url('/img/rupee.svg')]   ">
                  {/* {data.discountPrice} */}
                  {TaxPriceValidation(data?.specialPrice,data?.discountPrice,data?.productPrice,data?.tax,"")} 
                  
                  </strong>
                 
                  <del className="text-xs font-normal text-1-light leading-4 ">
                  {/* {data.specialPrice} */}
                 {TaxPriceValidation(data?.specialPrice,data?.discountPrice,data?.productPrice,data?.tax,"strike")}
                  </del>
                </div>
                <div className="flex items-center rounded h-9 overflow-hidden border border-black max-w-56 mx-auto mt-4 invisible transition-opacity duration-200 opacity-0 group-hover:visible group-hover:opacity-100">
                  <Link
                    href={`/product-detail/${data?.productSlug}`}
                    prefetch
                    className="flex items-center bg-black gap-2 p-2 size-full justify-center"
                    onClick={()=>handleCount(data?.productSlug)}
                  >
                    <img src="\img\card-cart.svg" alt="cart" />{" "}
                    <span className=" text-white font-normal text-sm leading-4 ">
                      Add to Cart
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            </> 
            ))}
            
            </div>

    </section>
}
    
    </>
  )
}
