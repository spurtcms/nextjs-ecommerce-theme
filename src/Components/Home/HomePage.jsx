'use client'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import ImageComponets from '../ImageComponent';
import { useSearchParams } from 'next/navigation';
import Currency from 'react-currency-formatter';

import { GET_POSTS_LIST_QUERY, Get_CATEGORIES_LIST } from '@/api/query';
import { TaxPriceValidation } from '@/utils/regexValidation';
import { fetchGraphQLDa } from '@/api/clientGraphicql';
import HomePageSkeleton from '@/utils/SkeletonLoader/HomePage';

const people = [
    {
      id: 1,
      name: "Low to High",
      setNo:0
    },
    {
      id: 2,
      name: "High to Low ",
      setNo:1,
    },
    {
      id: 3,
      name: "New Arrival",
      setNo:1,
      
    },
    {
      id: 4,
      name: "Rating",
      setNo:1,
    },
  ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
export default function HomePage() {
    const [selected, setSelected] = useState(people);
    const [cardListData,setCardListData]=useState()
    const [catagoryList,setCatagoryList]=useState()
    const [catIdheader,setCatIdheader]=useState()
    const [skeleton,setSkeleton]=useState(true)


    const searchParams1 = useSearchParams()
    const searchParams2 = useSearchParams()
    let catgoId=searchParams1.get("catgoId")
    let catName1=searchParams2.get("catName")
    

const listData = async ()=>{
  let list_varab={"limit":10,"offset":0,"filter":{"categoryId":catgoId}}
  // if(catgoId==null){
  let postData = await fetchGraphQLDa(GET_POSTS_LIST_QUERY,list_varab)
  setCardListData(postData?.ecommerceProductList?.productList)
  if(postData){
    setSkeleton(false)
  }
// }else{
//   let postData = await fetchGraphQLDa(GET_POSTS_LIST_QUERY,list_varab)
//   setCardListData(postData?.ecommerceProductList?.productList)

// }  
}

console.log(skeleton,'skeleton')
 const categorieList= async () =>{
  let catgo_variab={"categoryGroupId":147}
  let postData= await fetchGraphQLDa(Get_CATEGORIES_LIST,catgo_variab)
  setCatagoryList(postData?.categoriesList?.categories[0]?.categoryName)
  setCatIdheader(postData?.categoriesList?.categories[0].id)
  catgoId=postData?.categoriesList?.categories[0].id?.toString()
  listData()
  console.log(postData?.categoriesList?.categories[0].id,"098989")
}

const sortBy = async () =>{
  if(selected.id!=3&&selected.id!=4){
    if(catgoId==null){
  let list_varab={"limit":10,"offset":0,"filter":{"categoryId":catIdheader},"sort":{"price":selected.setNo}}
  let sortByData= await fetchGraphQLDa(GET_POSTS_LIST_QUERY,list_varab)
  setCardListData(sortByData?.ecommerceProductList?.productList)
}else{
  let list_varab={"limit":10,"offset":0,"filter":{"categoryId":catgoId},"sort":{"price":selected.setNo}}
  let sortByData= await fetchGraphQLDa(GET_POSTS_LIST_QUERY,list_varab)
  setCardListData(sortByData?.ecommerceProductList?.productList)
}
}
if(selected.id==3||selected.id==4){
  let list_varab={"limit":10,"offset":0,"filter":{"categoryId":catgoId},"sort":{"date":selected.setNo}}
  let sortByData= await fetchGraphQLDa(GET_POSTS_LIST_QUERY,list_varab)
  console.log(sortByData,"soujkk")
}

} 

useEffect(()=>{
  if(catgoId==null){
    categorieList()
    setSkeleton(true)
  }
  if(catgoId!=null){
    listData()
    setSkeleton(true)
  }
},[catgoId])


useEffect(()=>{
  if(selected.id!=undefined){
  sortBy()
}
},[selected])


console.log(cardListData,'cardListData')
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
              {catgoId==null?catagoryList:catName1}
             </h1>
             <span className=" text-xs text-1-light leading-3 ">
               (0 of {cardListData?.length} Products)
             </span>
           </div>
         </>

         <>
           {/* dropdown */}
           <div className="flex items-center gap-2">
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
            <div class=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4    border-t border-s border-grey">
            {/* card */}
            {cardListData?.map((data,index)=>(
              <div key={index} class="group p-5 hover:shadow-3xl transition-shadow border-e border-b border-grey">
              <Link href={`/product-detail/${data.id}`} className="grid place-items-center">
                
                <ImageComponets path={data.productImagePath} alt={data.productName} w={300} h={200}/>
              </Link>
              <div className="text-center">
              <Link
                 href={`/product-detail/${data.id}`}
                  className=" text-base text-black font-medium leading-5 mt-5 block"
                >
                 {data.productName}
                </Link>

                <p className="text-sm font-light leading-4 text-1-light mt-2 line-clamp-2">
                  {data.productDescription}
                </p>
                <div className="flex gap-2 items-center justify-center mt-3">
                  <strong className="flex gap-1 items-center text-base font-semibold leading-5 text-black">
                  {/* {data.discountPrice} */}
                  <Currency quantity={TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"")} currency='INR'/>
                  
                  </strong>
                 
                  <del className="text-xs font-normal text-1-light leading-4 ">
                  {/* {data.specialPrice} */}
                  <Currency quantity={TaxPriceValidation(data.specialPrice,data.discountPrice,data.defaultPrice,data.tax,"strike")} currency='INR'/>
                 
                  </del>
                </div>
                <div className="flex items-center rounded h-9 overflow-hidden border border-black max-w-56 mx-auto mt-4 invisible transition-opacity duration-200 opacity-0 group-hover:visible group-hover:opacity-100">
                  <Link
                    href={`/product-detail/${data.id}`}
                    className="flex items-center bg-black gap-2 p-2 size-full justify-center"
                  >
                    <img src="\img\card-cart.svg" alt="cart" />{" "}
                    <span className=" text-white font-normal text-sm leading-4 ">
                      Add to Cart
                    </span>
                  </Link>
                 
                </div>
              </div>
            </div>
            ))}
            
            </div>

    </section>
}
    
    </>
  )
}
