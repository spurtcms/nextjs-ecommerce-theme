'use client'
import { Listbox, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import Link from 'next/link';
import ImageComponets from '../ImageComponent';

const people = [
    {
      id: 1,
      name: "Low to High",
    },
    {
      id: 2,
      name: "High to Low ",
    },
    {
      id: 3,
      name: "New Arrival",
    },
    {
      id: 4,
      name: "Rating",
    },
  ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
export default function HomePage({cardlist}) {
    const [selected, setSelected] = useState(people[3]);
    console.log(cardlist,'43434343');
  return (
    <><section class="lg:px-10 px-5 pb-10">
    <div className="flex justify-between py-6 flex-wrap gap-4">
         <>
           {/* top option */}
           <div className="flex items-center gap-2 ">
             <h1 className="text-xl text-black font-normal leading-6  ">
               Electronics
             </h1>
             <span className=" text-xs text-1-light leading-3 ">
               (20 of 200 Products)
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
            {cardlist?.productList?.map((data,index)=>(
              <div key={index} class="group p-5 hover:shadow-3xl transition-shadow border-e border-b border-grey">
              <Link href={`/product-detail/${data.id}`} className="grid place-items-center">
                {/* <img src="\img\product-1.svg" alt="card-img" /> */}
                <ImageComponets path={data.productImagePath} alt={data.productName} w={300} h={200}/>
              </Link>
              <div className="text-center">
                <a
                 
                  className=" text-base text-black font-light leading-5 mt-5 block"
                >
                 {data.productName}
                </a>

                <p className="text-sm font-light leading-4 text-1-light mt-2 ">
                  {data.productDescription}
                </p>
                <div className="flex gap-2 items-center justify-center mt-3">
                  <strong className="flex gap-1 items-center text-base font-semibold leading-5 text-black before:content-[''] before:inline-block before:w-2 before:h-3 before:bg-[url('/img/rupee.svg')]   ">
                  {data.discountPrice}
                  </strong>
                  <del className="text-xs font-normal text-1-light leading-4   ">
                  {data.specialPrice}
                  </del>
                </div>
                <div className="flex items-center rounded h-9 overflow-hidden border border-black max-w-56 mx-auto mt-4 invisible transition-opacity duration-200 opacity-0 group-hover:visible group-hover:opacity-100">
                  <a
                    href="javascript:void(0)"
                    className="flex items-center bg-black gap-2 p-2 size-full justify-center"
                  >
                    <img src="\img\card-cart.svg" alt="cart" />{" "}
                    <span className=" text-white font-normal text-sm leading-4 ">
                      Add to Cart
                    </span>
                  </a>
                 
                </div>
              </div>
            </div>
            ))}
            
            </div>

    </section></>
  )
}
