'use client'
import React, { useState } from 'react'

export default function ProductDetailPage({productDetail}) {
  const [open, setOpen] = useState(false);

  const handleOpenAddtoCart = () => {
    setOpen(true);
  };
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
              <strong className="flex gap-1 items-center text-2xl font-medium leading-7 text-black before:content-[''] before:inline-block before:w-3 before:bg-no-repeat before:h-4 before:bg-[url('/img/rupee-md.svg')]   ">
               {productDetail.discountPrice}
              </strong>
              <del className="text-base font-normal text-3-light leading-5   ">
              {productDetail.specialPrice}
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
                href="javascript:void(0)"
                className="flex items-center gap-2 min-w-20  min-h-9 w-fit justify-center border rounded-5 border-grey1 "
              >
                <span className="text-3-light">Qty</span>
                <span className="text-3-light ">1</span>{" "}
                <img src="/img/qty-arrow.svg" alt="arrow" />
              </a>

              <a
                href="javascript:void(0)"
                className=" bg-black text-white  font-normal text-base grid place-items-center rounded-5 leading-5 basis-2/3 min-h-9"
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
   </>
  )
}
