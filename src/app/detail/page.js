"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Accordion } from "flowbite-react";
import Link from "next/link";

export default function Detail() {
  const [open, setOpen] = useState(false);

  const handleOpenAddtoCart = () => {
    setOpen(true);
  };

  return (
    <>
      <ul className="flex items-center gap-2 py-6 px-5 md:px-10">
        <li>
          <a href="javascript:void(0)" className="block w-4">
            <img src="\img\home.svg" alt="home" />{" "}
          </a>
        </li>
        <li>
          <img
            src="\img\bread-arrow.svg"
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
            src="\img\bread-arrow.svg"
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
                  <img src="\img\detail-wish.svg" alt="wish" />
                </a>
                <a
                  href="javascript:void(0)"
                  class="grid place-items-center  col-span-2"
                >
                  <img src="\img\zoom-product.svg" alt="view product" />
                </a>
              </div>
              <div className="w-full ">
                <img
                  src="\img\detail-product1.svg"
                  alt="product image"
                  className="w-full"
                />
              </div>
            </div>

            <div className="sm:col-span-2 grid place-items-center rounded-5 relative overflow-hidden ">
              <div className="w-full brightness-25">
                <img
                  src="\img\detail-product1.svg"
                  alt="product image"
                  className="w-full aspect-video  object-cover object-center"
                />
              </div>

              <a href="javascript:void(0)" class=" absolute ">
                <img src="\img\video-play.svg" alt="play" />
              </a>
            </div>

            <div className=" grid place-items-center  rounded-5 overflow-hidden relative">
              <div className="flex gap-3 absolute top-2 right-2">
                <a
                  href="javascript:void(0)"
                  class="grid place-items-center  col-span-2"
                >
                  <img src="\img\zoom-product.svg" alt="view product" />
                </a>
              </div>
              <div className="w-full ">
                <img
                  src="\img\detail-product2.svg"
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
                  <img src="\img\zoom-product.svg" alt="view product" />
                </a>
              </div>
              <div className="w-full ">
                <img
                  src="\img\detail-product3.svg"
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
                  <img src="\img\zoom-product.svg" alt="view product" />
                </a>
              </div>
              <div className="w-full ">
                <img
                  src="\img\detail-product4.svg"
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
                  <img src="\img\zoom-product.svg" alt="view product" />
                </a>
              </div>
              <div className="w-full ">
                <img
                  src="\img\detail-product5.svg"
                  alt="product image"
                  className="w-full"
                />
              </div>
            </div>

            <a
              href="javascript:void(0)"
              className="border rounded-5 border-grey1 text-3-light  text-base font-light leading-5 py-1 px-6  w-fit col-span-2 m-auto block"
            >
              Show more image
            </a>
          </div>

          <div className="block">
            <h1 className="text-black font-medium text-2xl leading-7 ">
              Samsung 65" class CU7000 Crystal UHD 4K Smart TV - Titan Gray
              (UN65CU7000)
            </h1>
            <div className="flex gap-2 items-center  mt-4">
              <strong className="flex gap-1 items-center text-2xl font-medium leading-7 text-black before:content-[''] before:inline-block before:w-3 before:bg-no-repeat before:h-4 before:bg-[url('/img/rupee-md.svg')]   ">
                15,299
              </strong>
              <del className="text-base font-normal text-3-light leading-5   ">
                16,999
              </del>
            </div>
            <h3 className="text-1-dark text-base leading-5 font-medium mt-8">
              Description
            </h3>
            <p className=" text-sm leading-5 font-light text-1-dark  mt-4 pb-1 ">
              True to life color. Effortless connectivity. Dazzling 4K value.
              Samsung Crystal UHD is worth a look (and more). Effortlessly
              access TV shows, movies and ambient content using the Samsung
              Smart Hub, or find a range of great games on the Samsung Gaming
              Hub.* Enjoy content even more clear than it was created as its
              upgraded to 4K resolution. Color and contrast are also improved
              with our PurColor and Mega Contrast technologies that instantly
              analyze and adjust what you see on screen. As all the visual
              details shine through, you’ll be surrounded by 3D sound that moves
              with the action, engaging all your senses. *High speed internet
              connection, additional gaming service subscriptions and compatible
              controller required.
            </p>

            <div className="flex gap-4 items-start mt-16">
              <a
                href="javascript:void(0)"
                className="flex items-center gap-2 min-w-20  min-h-9 w-fit justify-center border rounded-5 border-grey1 "
              >
                <span className="text-3-light">Qty</span>
                <span className="text-3-light ">1</span>{" "}
                <img src="\img\qty-arrow.svg" alt="arrow" />
              </a>

              <a
                href="javascript:void(0)"
                className=" bg-black text-white  font-normal text-base grid place-items-center rounded-5 leading-5 basis-2/3 min-h-9"
                onClick={(e) => handleOpenAddtoCart(e)}
              >
                Add to Cart
              </a>
            </div>

            <div className="flex gap-4 items-center mt-6">
              <div className="">
                <img src="\img\samsung.svg" alt="samsung" />
              </div>
              <strong className="text-base font-medium text-1-dark leading-5">
                3 years warranty
              </strong>
            </div>

            <div className="flex flex-col gap-4 my-6 pb-6 border-b border-grey">
              <h3 className=" col-span-2 ">Highlight </h3>
              <div className="grid grid-cols-2  w-2/3 gap-6">
                <div className="flex gap-3 items-center">
                  <img src="\img\4k.svg" alt="4k" />
                  <p className=" text-xs font-light text-3-light ">
                    4K Ultra High Definition
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src="\img\smart-tv.svg" alt="smart tv" />
                  <p className=" text-xs font-light text-3-light ">Smart TV</p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src="\img\bluetooth.svg" alt="bluetooth" />
                  <p className=" text-xs font-light text-3-light ">
                    5.1 Bluetooth
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <img src="\img\google-tv.svg" alt="google tv" />
                  <p className=" text-xs font-light text-3-light ">Google TV</p>
                </div>
              </div>
            </div>

            <Accordion className="border rounded-lg border-grey3 overflow-hidden">
              <Accordion.Panel className="block border-grey3 border-b">
                <Accordion.Title className="hover:bg-white focus:ring-0 ring-0 text-start  text-xl font-medium leading-6  bg-white justify-start py-5 px-6 flex items-center gap-3  ">
                  <h2 className="text-start  text-xl font-medium leading-6 text-1-dark">
                    Highlight
                  </h2>
                </Accordion.Title>
                <Accordion.Content className="border-grey3 border-t px-0 py-0">
                  <ul className="bg-light px-8 py-5 grid gap-3">
                    <li className="text-sm leading-relaxed font-light text-1-dark flex gap-3 before:content-[''] before:mt-2 before:inline-block before:min-w-2 before:h-2 before:bg-no-repeat before:bg-[url('/img/list-style-rounded.svg')] ">
                      PurColor - Perceive a wider spectrum of colors than
                      traditional RGB models with PurColor. From the green turf
                      on the football field to an amazing sunset straight from
                      the big screen, you’ll enjoy true to life picture quality
                      with our innovative color technology that electronically
                      adjusts and optimizes the colors on screen.
                    </li>
                    <li className="text-sm leading-relaxed font-light text-1-dark flex gap-3 before:content-[''] before:mt-2 before:inline-block before:min-w-2 before:h-2 before:bg-no-repeat before:bg-[url('/img/list-style-rounded.svg')]  ">
                      PurColor - Perceive a wider spectrum of colors than
                      traditional RGB models with PurColor. From the green turf
                      on the football field to an amazing sunset straight from
                      the big screen, you’ll enjoy true to life picture quality
                      with our innovative color technology that electronically
                      adjusts and optimizes the colors on screen.
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel className="block border-grey3 border-b">
                <Accordion.Title className="hover:bg-white focus:ring-0 ring-0  justify-start text-start bg-white  py-5 px-6 text-xl font-medium leading-6 flex items-center gap-3  ">
                  <h2 className="text-start  text-xl font-medium leading-6 text-1-dark">
                    Specifications
                  </h2>
                </Accordion.Title>
                <Accordion.Content className="border-grey3 border-t px-0 py-0">
                  <table className=" w-full">
                    <tbody>
                      <tr className="bg-light py-2 px-6 flex  nth-child-odd:bg-black border-b border-grey3">
                        <td className="text-base font-normal leading-5 text-1-dark basis-1/4">
                          General
                        </td>
                        <td></td>
                      </tr>

                      <tr className=" py-2 px-6 flex border-b border-grey3">
                        <td className="text-sm font-normal leading-tight text-1-dark basis-1/4">
                          Model Name
                        </td>
                        <td className="text-sm font-normal leading-tight text-1-dark">
                          Crystal 4K UHD Smart TV CU7700
                        </td>
                      </tr>

                      <tr className="bg-light py-2 px-6 flex border-b border-grey3">
                        <td className="text-sm font-normal leading-tight text-1-dark basis-1/4">
                          Model Number
                        </td>
                        <td className="text-sm font-normal leading-tight text-1-dark">
                          UA65CU7700KLXL
                        </td>
                      </tr>

                      <tr className=" py-2 px-6 flex border-b border-grey3">
                        <td className="text-sm font-normal leading-tight text-1-dark basis-1/4">
                          Smart TV
                        </td>
                        <td className="text-sm font-normal leading-tight text-1-dark">
                          Yes
                        </td>
                      </tr>

                      <tr className="bg-light py-2 px-6 flex border-b border-grey3">
                        <td className="text-sm font-normal leading-tight text-1-dark basis-1/4">
                          Display Size
                        </td>
                        <td className="text-sm font-normal leading-tight text-1-dark">
                          65 Inch
                        </td>
                      </tr>

                      <tr className=" py-2 px-6 flex border-b border-grey3">
                        <td className="text-sm font-normal leading-tight text-1-dark basis-1/4">
                          Display Type
                        </td>
                        <td className="text-sm font-normal leading-tight text-1-dark">
                          LED
                        </td>
                      </tr>

                      <tr className="bg-light py-2 px-6 flex border-b border-grey3">
                        <td className="text-sm font-normal leading-tight text-1-dark basis-1/4">
                          Refresh Rate
                        </td>
                        <td className="text-sm font-normal leading-tight text-1-dark">
                          50Hz
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <a
                    href="javascript:void(0)"
                    className="  flex items-center gap-2 justify-end py-2 px-3 text-xs font-normal leading-4 text-1-dark "
                  >
                    Read more <img src="\img\readmore-arrow.svg" alt="arrow" />
                  </a>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel className="block border-grey3 border-b">
                <Accordion.Title className=" hover:bg-white focus:ring-0 ring-0 justify-start text-start bg-white  py-5 px-6 text-xl font-medium leading-6 flex items-center gap-3  ">
                  <h2 className="text-start  text-xl font-medium leading-6 text-1-dark ">
                    Size Charts
                  </h2>
                </Accordion.Title>
                <Accordion.Content className="border-grey3 border-t px-0 py-0">
                  <ul className="bg-light px-8 py-5 grid gap-3">
                    <li className="text-sm leading-relaxed font-light text-1-dark flex gap-3 before:content-[''] before:mt-2 before:inline-block before:min-w-2 before:h-2 before:bg-no-repeat before:bg-[url('/img/list-style-rounded.svg')] ">
                      PurColor - Perceive a wider spectrum of colors than
                      traditional RGB models with PurColor. From the green turf
                      on the football field to an amazing sunset straight from
                      the big screen, you’ll enjoy true to life picture quality
                      with our innovative color technology that electronically
                      adjusts and optimizes the colors on screen.
                    </li>
                    <li className="text-sm leading-relaxed font-light text-1-dark flex gap-3 before:content-[''] before:mt-2 before:inline-block before:min-w-2 before:h-2 before:bg-no-repeat before:bg-[url('/img/list-style-rounded.svg')]  ">
                      PurColor - Perceive a wider spectrum of colors than
                      traditional RGB models with PurColor. From the green turf
                      on the football field to an amazing sunset straight from
                      the big screen, you’ll enjoy true to life picture quality
                      with our innovative color technology that electronically
                      adjusts and optimizes the colors on screen.
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel className="block border-grey3 border-b">
                <Accordion.Title className="hover:bg-white focus:ring-0 ring-0 justify-start text-start bg-white  py-5 px-6 text-xl font-medium leading-6 flex items-center gap-3 ">
                  <h2 className="text-start  text-xl font-medium leading-6 text-1-dark">
                    Shipping & Returns
                  </h2>
                </Accordion.Title>
                <Accordion.Content className="border-grey3 border-t px-0 py-0  ">
                  <ul className="bg-light px-8 py-5 grid gap-3">
                    <li className="text-sm leading-relaxed font-light text-1-dark flex gap-3 before:content-[''] before:mt-2 before:inline-block before:min-w-2 before:h-2 before:bg-no-repeat before:bg-[url('/img/list-style-rounded.svg')] ">
                      PurColor - Perceive a wider spectrum of colors than
                      traditional RGB models with PurColor. From the green turf
                      on the football field to an amazing sunset straight from
                      the big screen, you’ll enjoy true to life picture quality
                      with our innovative color technology that electronically
                      adjusts and optimizes the colors on screen.
                    </li>
                    <li className="text-sm leading-relaxed font-light text-1-dark flex gap-3 before:content-[''] before:mt-2 before:inline-block before:min-w-2 before:h-2 before:bg-no-repeat before:bg-[url('/img/list-style-rounded.svg')]  ">
                      PurColor - Perceive a wider spectrum of colors than
                      traditional RGB models with PurColor. From the green turf
                      on the football field to an amazing sunset straight from
                      the big screen, you’ll enjoy true to life picture quality
                      with our innovative color technology that electronically
                      adjusts and optimizes the colors on screen.
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel className="block ">
                <Accordion.Title className=" hover:bg-white focus:ring-0 ring-0 justify-start text-start bg-white py-5 px-6 text-xl font-medium leading-6 flex items-center gap-3 ">
                  <h2 className="text-start  text-xl font-medium leading-6 text-1-dark">
                  
                    Q&A
                  </h2>
                </Accordion.Title>
                <Accordion.Content className="border-grey3 border-t px-0 py-0 ">
                  <ul className="bg-light px-8 py-5 grid gap-3">
                    <li className="text-sm leading-relaxed font-light text-1-dark flex gap-3 before:content-[''] before:mt-2 before:inline-block before:min-w-2 before:h-2 before:bg-no-repeat before:bg-[url('/img/list-style-rounded.svg')] ">
                      PurColor - Perceive a wider spectrum of colors than
                      traditional RGB models with PurColor. From the green turf
                      on the football field to an amazing sunset straight from
                      the big screen, you’ll enjoy true to life picture quality
                      with our innovative color technology that electronically
                      adjusts and optimizes the colors on screen.
                    </li>
                    <li className="text-sm leading-relaxed font-light text-1-dark flex gap-3 before:content-[''] before:mt-2 before:inline-block before:min-w-2 before:h-2 before:bg-no-repeat before:bg-[url('/img/list-style-rounded.svg')]  ">
                      PurColor - Perceive a wider spectrum of colors than
                      traditional RGB models with PurColor. From the green turf
                      on the football field to an amazing sunset straight from
                      the big screen, you’ll enjoy true to life picture quality
                      with our innovative color technology that electronically
                      adjusts and optimizes the colors on screen.
                    </li>
                  </ul>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>

        <div className="flex flex-col  gap-6">
          <div className="flex justify-between items-center">
            <h2 className=" text-2xl font-medium leading-8 text-1-dark  ">
              Related Product
            </h2>
            <a
              href="javascript:void(0)"
              className="text-3-light font-normal text-xs leading-4 underline"
            >
              See All
            </a>
          </div>

          {/* card container */}
          <div class=" grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 border-t border-s border-grey rounded-5 overflow-hidden">
            {/* card */}
            <div class=" p-5 transition-shadow border-e border-b border-grey">
              <a href="javascript:void(0)" className="grid place-items-center">
                <img src="\img\product-1.svg" alt="card-img" />
              </a>
              <div className="text-center">
                <a
                  href="javascript:void(0)"
                  className=" text-base text-black font-light leading-5 mt-5 block"
                >
                  Apple iPhone 15 Pro Max
                </a>

                <p className="text-sm font-light leading-4 text-1-light mt-2 ">
                  Black Titanium, 256GB
                </p>
                <div className="flex gap-2 items-center justify-center mt-3">
                  <strong className="flex gap-1 items-center text-base font-semibold leading-5 text-black before:content-[''] before:inline-block before:w-2 before:h-3 before:bg-[url('/img/rupee.svg')]   ">
                    83,990
                  </strong>
                  <del className="text-xs font-normal text-1-light leading-4   ">
                    89,990
                  </del>
                </div>
              </div>
            </div>

            {/* card */}
            <div class=" p-5  transition-shadow border-e border-b border-grey">
              <a href="javascript:void(0)" className="grid place-items-center">
                <img src="\img\product-2.svg" alt="card-img" />
              </a>
              <div className="text-center">
                <a
                  href="javascript:void(0)"
                  className=" text-base text-black font-light leading-5 mt-5 block"
                >
                  Apple iPhone 15 Pro Max
                </a>

                <p className="text-sm font-light leading-4 text-1-light mt-2 ">
                  Black Titanium, 256GB
                </p>
                <div className="flex gap-2 items-center justify-center mt-3">
                  <strong className="flex gap-1 items-center text-base font-semibold leading-5 text-black before:content-[''] before:inline-block before:w-2 before:h-3 before:bg-[url('/img/rupee.svg')]   ">
                    83,990
                  </strong>
                  <del className="text-xs font-normal text-1-light leading-4   ">
                    89,990
                  </del>
                </div>
              </div>
            </div>

            {/* card */}
            <div class=" p-5  transition-shadow border-e border-b border-grey">
              <a href="javascript:void(0)" className="grid place-items-center">
                <img src="\img\product-3.svg" alt="card-img" />
              </a>
              <div className="text-center">
                <a
                  href="javascript:void(0)"
                  className=" text-base text-black font-light leading-5 mt-5 block"
                >
                  Apple iPhone 15 Pro Max
                </a>

                <p className="text-sm font-light leading-4 text-1-light mt-2 ">
                  Black Titanium, 256GB
                </p>
                <div className="flex gap-2 items-center justify-center mt-3">
                  <strong className="flex gap-1 items-center text-base font-semibold leading-5 text-black before:content-[''] before:inline-block before:w-2 before:h-3 before:bg-[url('/img/rupee.svg')]   ">
                    83,990
                  </strong>
                  <del className="text-xs font-normal text-1-light leading-4   ">
                    89,990
                  </del>
                </div>
              </div>
            </div>

            {/* card */}
            <div class=" p-5 transition-shadow border-e border-b border-grey">
              <a href="javascript:void(0)" className="grid place-items-center">
                <img src="\img\product-4.svg" alt="card-img" />
              </a>
              <div className="text-center">
                <a
                  href="javascript:void(0)"
                  className=" text-base text-black font-light leading-5 mt-5 block"
                >
                  Apple iPhone 15 Pro Max
                </a>

                <p className="text-sm font-light leading-4 text-1-light mt-2 ">
                  Black Titanium, 256GB
                </p>
                <div className="flex gap-2 items-center justify-center mt-3">
                  <strong className="flex gap-1 items-center text-base font-semibold leading-5 text-black before:content-[''] before:inline-block before:w-2 before:h-3 before:bg-[url('/img/rupee.svg')]   ">
                    83,990
                  </strong>
                  <del className="text-xs font-normal text-1-light leading-4   ">
                    89,990
                  </del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* offcanvas */}
      <>
        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-dark-1 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto relative w-screen sm:max-w-md ">
                      <div className="flex h-full flex-col overflow-y-scroll bg-white  shadow-xl">
                        <div className="sticky top-0 z-10 bg-white">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 flex justify-between p-4 border-b border-grey items-center ">
                            <h1 className=" text-xl font-normal text-black leading-6 ">
                              Cart
                            </h1>

                            <Transition.Child
                              as={Fragment}
                              enter="ease-in-out duration-500"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="ease-in-out duration-500"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <button
                                type="button"
                                className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                onClick={() => setOpen(false)}
                              >
                                <img
                                  src="\img\cancel.svg"
                                  alt=" close"
                                  className=" w-8 h-8"
                                />
                              </button>
                            </Transition.Child>
                          </Dialog.Title>
                        </div>
                        <div className="relative flex-1 px-4 pb-4">
                          <div class="border-grey border-b  py-4 flex justify-between">
                            <div class="flex gap-3 items-center">
                              <div>
                                <img
                                  src="\img\checkList-product1.svg"
                                  alt="television"
                                  className=" min-w-40"
                                />
                              </div>
                              <div class="flex flex-col justify-between h-full gap-2">
                                <div className="block">
                                  <p class="text-base font-normal leading-5 text-black">
                                    Samsung 65" class CU7000 Crystal UHD 4K
                                    Smart TV - Titan Gray (UN65CU7000)
                                  </p>
                                  <span className="text-1-light  text-sm font-light leading-tight mt-2 block">
                                    Black Titanium, 256GB
                                  </span>
                                </div>
                                <div class="flex gap-4 items-center justify-between">
                                  <strong class=" text-base font-semibold leading-5 text-black flex gap-1 items-center before:content-[''] before:inline-block before:w-2 before:bg-no-repeat before:h-3 before:bg-[url('/img/rupee-sm.svg')]  h-fit ">
                                    15,299
                                  </strong>
                                  <a
                                    href="javascript:void(0)"
                                    class="flex items-center gap-2 min-w-17 h-8 w-fit justify-center border rounded-5 border-grey1 "
                                  >
                                    <span class="text-3-light text-xs">
                                      Qty
                                    </span>
                                    <span class="text-3-light text-xs">1</span>
                                    <img src="\img\qty-arrow.svg" alt="arrow" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="border-grey border-b  py-4 flex justify-between">
                            <div class="flex gap-3 items-center">
                              <div>
                                <img
                                  src="\img\checkList-product2.svg"
                                  alt="television"
                                  className=" min-w-40"
                                />
                              </div>
                              <div class="flex flex-col justify-between h-full gap-2">
                                <div className="block">
                                  <p class="text-base font-normal leading-5 text-black">
                                    Samsung 65" class CU7000 Crystal UHD 4K
                                    Smart TV - Titan Gray (UN65CU7000)
                                  </p>
                                  <span className="text-1-light  text-sm font-light leading-tight mt-2 block">
                                    Black Titanium, 256GB
                                  </span>
                                </div>
                                <div class="flex gap-4 items-center justify-between">
                                  <strong class=" text-base font-semibold leading-5 text-black flex gap-1 items-center before:content-[''] before:inline-block before:w-2 before:bg-no-repeat before:h-3 before:bg-[url('/img/rupee-sm.svg')]  h-fit ">
                                    15,299
                                  </strong>
                                  <a
                                    href="javascript:void(0)"
                                    class="flex items-center gap-2 min-w-17 h-8 w-fit justify-center border rounded-5 border-grey1 "
                                  >
                                    <span class="text-3-light text-xs">
                                      Qty
                                    </span>
                                    <span class="text-3-light text-xs">1</span>
                                    <img src="\img\qty-arrow.svg" alt="arrow" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="flex flex-col gap-3 mt-6">
                            <a
                              href="/productCart"
                              class="grid place-items-center text-base font-normal leading-5  text-white bg-black rounded-5 h-11 w-full "
                            >
                              Checkout
                            </a>
                            <a
                              href="#"
                              class="border grid place-items-center border-black rounded-5  text-base font-normal leading-5 bg-white text-black h-11 w-full"
                            >
                              View detailed cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </>
    </>
  );
}
