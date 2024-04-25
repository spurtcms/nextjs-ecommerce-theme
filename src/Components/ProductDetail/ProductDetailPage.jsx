'use client'
import { TaxPriceValidation, quantityList } from '@/utils/regexValidation';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react'
import ImageComponets from '../ImageComponent';
import { fetchGraphQl } from '@/api/graphicql';
import { GET_ADD_TO_CART } from '@/api/query';
import ProductDetailSkeleton from '@/utils/SkeletonLoader/ProductDetail';
import { useDispatch, useSelector } from 'react-redux';
import { reloadCartCount } from '@/redux/slices/cartSlice';

export default function ProductDetailPage({productDetail,tokenCheck}) {
  const dispatch=useDispatch()
  const reloadCount=useSelector((state)=>state.cartReducer.reloadCount)
  const [open, setOpen] = useState(false);
  const [quantity,setQuantity]=useState(1)
  const [skeleton,setSkeleton]=useState(true)
  
  const handleOpenAddtoCart = () => {
    if(tokenCheck){
     let variable= {
        "productId": productDetail.id,
        "quantity": parseInt(quantity)
      }
      fetchGraphQl(GET_ADD_TO_CART,variable)
    }else{
      let qytArr=[]
      productDetail.quantity=parseInt(quantity)
      if(localStorage.getItem("add-cart-list")){
          let cartlist=JSON.parse(localStorage.getItem("add-cart-list"))
          
          if(cartlist.length){
            let idCheck=false
            cartlist.map((data)=>{
              if(data.id==productDetail.id){
                idCheck=true
                data.quantity=data.quantity+parseInt(quantity)
              }
            })
            if(idCheck==true){
              localStorage.setItem("add-cart-list",JSON.stringify(cartlist))
            }else{
              cartlist.push(productDetail)
              localStorage.setItem("add-cart-list",JSON.stringify(cartlist))
            }
          }
      }else{
        qytArr.push(productDetail)
        localStorage.setItem("add-cart-list",JSON.stringify(qytArr))
      }
      
    
    }
    dispatch(reloadCartCount(reloadCount+1))
    setOpen(true);
    setTimeout(()=>{
      setOpen(false);
    },2000)
  };
  useEffect(() => {
    if (typeof window !== 'undefined' && open) {
      const handleClick = (e) => {
        setOpen(false);
      };

      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }, [open]);

  useEffect(()=>{
if(productDetail){
  setSkeleton(false)
}
  },[])
  return (
   <>
    <ul className="flex items-center gap-2 py-6 px-5 md:px-10">
        <li>
          <a href="javascript:void(0)" className="block w-4">
            <img src="/img/home.svg" alt="home" />{" "}
          </a>
        </li>
        <li>
          <img
            src="/img/bread-arrow.svg"
            alt="arrow"
            className="min-w-3 w-3 max-h-2"
          />
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="text-2-light font-normal leading-tight text-sm hover:text-black block"
          >
            Electronics
          </a>
        </li>
        <li>
          <img
            src="/img/bread-arrow.svg"
            alt="arrow"
            className="min-w-3 w-3 max-h-2"
          />
        </li>
        <li>
          <a
            href="javascript:void(0)"
            className="text-2-light hover:text-black md:w-56 w-40 overflow-hidden text-ellipsis block whitespace-nowrap"
          >
            Samsung 65" class CU7000 class CU7000 class class CU7000 class
            CU7000 class class CU7000 class CU7000 class CU7000
          </a>
        </li>
    </ul>
{skeleton==true?
<ProductDetailSkeleton/>
:
    <section className="px-5 lg:px-10 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-8 border-b border-grey mb-6">
          <div className="grid sm:grid-cols-2 grid-cols-1   p-2 gap-4  h-fit md:sticky relative top-6 ">
            <div className="sm:col-span-2 grid place-items-center  rounded-5 overflow-hidden">
              <div className="flex gap-3 absolute top-2 right-2">
                
                <a
                  href="javascript:void(0)"
                  class="grid place-items-center  col-span-2"
                >
                  <img src="/img/zoom-product.svg" alt="view product" />
                </a>
              </div>
              <div className="w-full ">
                <img
                  src="/img/detail-product1.svg"
                  alt="product image"
                  className="w-full"
                />
              </div>
            </div>

            <div className="sm:col-span-2 grid place-items-center rounded-5 relative overflow-hidden ">
              <div className="w-full brightness-25">
                <img
                  src="/img/detail-product1.svg"
                  alt="product image"
                  className="w-full aspect-video  object-cover object-center"
                />
              </div>

              <a href="javascript:void(0)" class=" absolute ">
                <img src="/img/video-play.svg" alt="play" />
              </a>
            </div>

            <div className=" grid place-items-center  rounded-5 overflow-hidden relative">
              <div className="flex gap-3 absolute top-2 right-2">
                <a
                  href="javascript:void(0)"
                  class="grid place-items-center  col-span-2"
                >
                  <img src="/img/zoom-product.svg" alt="view product" />
                </a>
              </div>
              <div className="w-full ">
                <img
                  src="/img/detail-product2.svg"
                  alt="product image"
                  className="w-full"
                />
              </div>
            </div>

            <div className=" grid place-items-center  rounded-5 overflow-hidden relative">
              <div className="flex gap-3 absolute top-2 right-2">
                <a
                  href="javascript:void(0)"
                  class="grid place-items-center  col-span-2"
                >
                  <img src="/img/zoom-product.svg" alt="view product" />
                </a>
              </div>
              <div className="w-full ">
                <img
                  src="/img/detail-product3.svg"
                  alt="product image"
                  className="w-full"
                />
              </div>
            </div>

            <div className=" grid place-items-center  rounded-5 overflow-hidden relative">
              <div className="flex gap-3 absolute top-2 right-2">
                <a
                  href="javascript:void(0)"
                  class="grid place-items-center  col-span-2"
                >
                  <img src="/img/zoom-product.svg" alt="view product" />
                </a>
              </div>
              <div className="w-full ">
                <img
                  src="/img/detail-product4.svg"
                  alt="product image"
                  className="w-full"
                />
              </div>
            </div>

            <div className=" grid place-items-center  rounded-5 overflow-hidden relative">
              <div className="flex gap-3 absolute top-2 right-2">
                <a
                  href="javascript:void(0)"
                  class="grid place-items-center  col-span-2"
                >
                  <img src="/img/zoom-product.svg" alt="view product" />
                </a>
              </div>
              <div className="w-full ">
                <img
                  src="/img/detail-product5.svg"
                  alt="product image"
                  className="w-full"
                />
              </div>
            </div>

          </div>

          <div className="block">
            <h1 className="text-black font-medium text-2xl leading-7 ">
            {productDetail.productName}
            </h1>
            <div className="flex gap-2 items-center  mt-4">
              <strong className="flex gap-1 items-center text-2xl font-medium leading-7 text-black 
              before:content-[''] before:inline-block before:w-3 before:bg-no-repeat before:h-4 before:bg-[url('/img/rupee-md.svg')]">
              {TaxPriceValidation(productDetail.specialPrice,productDetail.discountPrice,productDetail.defaultPrice,productDetail.tax,"")}
              {/* {TaxPriceValidation(productDetail.specialPrice,productDetail.discountPrice,productDetail.defaultPrice,productDetail.tax,"")} */}
              </strong>
              <del className="text-base font-normal text-3-light leading-5">
              {TaxPriceValidation(productDetail.specialPrice,productDetail.discountPrice,productDetail.defaultPrice,productDetail.tax,"strike")}
              {/* {TaxPriceValidation(productDetail.specialPrice,productDetail.discountPrice,productDetail.defaultPrice,productDetail.tax,"strike")} */}
              </del>
            </div>
            <h3 className="text-1-dark text-base leading-5 font-medium mt-8">
              Description
            </h3>
            <p className=" text-sm leading-5 font-light text-1-dark  mt-4 pb-1 ">
              {productDetail.productDescription}
            </p>

            <div className="flex gap-4 items-start mt-16">
              <a
              
                className="flex items-center gap-2 min-w-20  min-h-9 w-fit justify-center rounded-5 "
              >
               
                  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-300 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:[box-shadow:none]" onChange={(e)=>setQuantity(e.target.value)}>
                    {quantityList().map((data,index)=>(
                      <option value={data} > Qty {data}</option>
                    ))}
                    
                  </select>
               </a>

              <a
               
                className="bg-black text-white  font-normal text-base grid place-items-center rounded-5 leading-5 basis-2/3 min-h-9 cursor-pointer"
                onClick={(e) => handleOpenAddtoCart(e)}
              >
                
                Add to Cart
              </a>
            </div>


            <div className="flex flex-col gap-4 my-6 border-b border-grey">
              
            </div>

          </div>
        </div>
        
      </section>
}
      
      {/* cart design */}
                   {open==true&&<div className="absolute top-7 right-14">
                    <div className="absolute right-0 z-10 mt-9 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 rounded-lg focus:outline-none min-w-80 w-80  p-3">
                            <h3 className="text-black-500 text-base pb-3 border-b border-1-light text-start">Added to cart</h3>
                            
                                <div className="flex gap-2 items-center mt-3 mb-7">
                                  <ImageComponets path={productDetail.productImagePath} w={80} h={80} alt={productDetail.productName} />
                                  <div>
                                    <h3 className="text-black-500 font-normal text-base mb-3 line-clamp-1">{productDetail.productName}</h3>
                                    <div className="flex items-center gap-5">
                                      <p className="flex items-center gap-1.5 text-lg font-medium text-black-500">
                                        <img src="/img/rupee.svg" />
                                        {TaxPriceValidation(productDetail.specialPrice,productDetail.discountPrice,productDetail.defaultPrice,productDetail.tax,"")*quantity}
                                        {/* {TaxPriceValidation(productDetail.specialPrice,productDetail.discountPrice,productDetail.defaultPrice,productDetail.tax,"")*quantity} */}
                                      </p>
                                      <span className="text-3-light text-sm font-light line-through"> </span>
                                    </div>
                                  </div>
                                </div>
                             
                            <div className="pt-3 border-t border-1-light">
                              <Link href='/my-cart' className="text-base font-normal text-white py-2 w-full flex justify-center items-center h-9 bg-dark-500 rounded ">Go to Cart</Link>
                            </div>
                          </div>
                          </div>}
                    
   </>
  )
}

{/* <div>
                          <div className="absolute -top-1 -right-2 flex justify-center items-center w-3 h-3 bg-dark-500 rounded-full">
                            <span className="text-white text-[10px] leading-3">{cartCout}</span>
                          </div>
                        </div> */}