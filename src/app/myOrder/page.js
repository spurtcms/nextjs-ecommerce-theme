"use client";

import { Accordion } from "flowbite-react";

export default function myOrder() {
  return (
    <>
      <section className=" px-5 lg:px-10 pb-10 grid lg:grid-cols-4  gap-8">
        <div className=" lg:col-span-3">
          <div className=" py-6">
            <div className=" mb-6">
              <h1 className="text-1xl font-normal leading-7 ">My orders</h1>
              <a
                href=""
                className=" flex justify-between items-center leading-tight font-normal text-sm text-3-light mt-1"
              >
                Track your order history
              </a>
            </div>

            <Accordion className="shadow-4xl rounded-lg overflow-hidden">
              <Accordion.Panel className=" ">
                <Accordion.Title className="flex justify-between items-center  text-lg font-normal leading-relaxed text-black  bg-white hover:bg-white focus:ring-0 ring-0  p-4 ">
                  <h2 className="text-lg font-normal leading-relaxed text-black ">
                    Order Shipped
                  </h2>
                </Accordion.Title>

                <Accordion.Content className=" border-y border-grey py-6 px-4">
                  <div class=" md:w-9/12 gap-3 grid md:grid-cols-[auto,1fr] items-end">
                    <div className="block">
                      <img
                        src="\img\checkList-product2.svg"
                        alt="television"
                        class=" min-w-40"
                      />
                    </div>
                    <div class="flex flex-col justify-between h-fit gap-7">
                      <div class="block">
                        <p class="text-base font-normal leading-5 text-black">
                          Samsung 65" class CU7000 Crystal UHD 4K Smart TV -
                          Titan Gray (UN65CU7000)
                        </p>
                        <span class="text-1-light  text-sm font-light leading-tight mt-2 block">
                          Black Titanium, 256GB
                        </span>
                      </div>
                      <div class="flex gap-4 items-center w-full">
                        <a
                          href=""
                          className="text-center basis-full h-10 border border-5 border-grey3 font-normal text-xs leading-4 text-black p-3"
                        >
                          Cancel
                        </a>
                        <a
                          href=""
                          className="text-center basis-full h-10 border border-5 border-grey3 font-normal text-xs leading-4 text-black p-3"
                        >
                          Track
                        </a>
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel className=" p-4   border-grey border-b ">
                <Accordion.Title className="flex justify-between items-center text-black   text-lg font-normal leading-relaxed  bg-white hover:bg-white focus:ring-0 ring-0 p-4">
                  <h2 className="text-lg font-normal leading-relaxed text-black">
                    Order Shipped
                  </h2>
                  {/* <img src="\img\accord-arrow-order.svg" alt="arrow" /> */}
                </Accordion.Title>

                <Accordion.Content className=" border-y border-grey py-6 px-4">
                  <div class=" md:w-9/12 gap-3 grid md:grid-cols-[auto,1fr] items-end">
                    <div className="block">
                      <img
                        src="\img\checkList-product1.svg"
                        alt="television"
                        class=" min-w-40"
                      />
                    </div>
                    <div class="flex flex-col justify-between h-fit gap-7">
                      <div class="block">
                        <p class="text-base font-normal leading-5 text-black">
                          Samsung 65" class CU7000 Crystal UHD 4K Smart TV -
                          Titan Gray (UN65CU7000)
                        </p>
                        <span class="text-1-light  text-sm font-light leading-tight mt-2 block">
                          Black Titanium, 256GB
                        </span>
                      </div>
                      <div class="flex gap-4 items-center w-full">
                        <a
                          href=""
                          className="text-center basis-full h-10 border border-5 border-grey3 font-normal text-xs leading-4 text-black p-3"
                        >
                          Cancel
                        </a>
                        <a
                          href=""
                          className="text-center basis-full h-10 border border-5 border-grey3 font-normal text-xs leading-4 text-black p-3"
                        >
                          Track
                        </a>
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel className=" p-4  border-grey border-b ">
                <Accordion.Title className="flex items-center justify-between text-black   text-lg font-normal leading-relaxed button-img  bg-white hover:bg-white focus:ring-0 ring-0 p-4">
                  <h2 className="text-lg font-normal leading-relaxed  text-black">
                    Order Received
                  </h2>
                  {/* <img src="\img\accord-arrow-order.svg" alt="arrow" /> */}
                </Accordion.Title>

                <Accordion.Content className=" border-y border-grey py-6 px-4">
                  <div class=" md:w-9/12 gap-3 grid md:grid-cols-[auto,1fr] items-end">
                    <div className="block">
                      <img
                        src="\img\checkList-product1.svg"
                        alt="television"
                        class=" min-w-40"
                      />
                    </div>
                    <div class="flex flex-col justify-between h-fit gap-7">
                      <div class="block">
                        <p class="text-base font-normal leading-5 text-black">
                          Samsung 65" class CU7000 Crystal UHD 4K Smart TV -
                          Titan Gray (UN65CU7000)
                        </p>
                        <span class="text-1-light  text-sm font-light leading-tight mt-2 block">
                          Black Titanium, 256GB
                        </span>
                      </div>
                      <div class="flex gap-4 items-center w-full">
                        <a
                          href=""
                          className="text-center basis-full h-10 border border-5 border-grey3 font-normal text-xs leading-4 text-black p-3"
                        >
                          Cancel
                        </a>
                        <a
                          href=""
                          className="text-center basis-full h-10 border border-5 border-grey3 font-normal text-xs leading-4 text-black p-3"
                        >
                          Track
                        </a>
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>

              <Accordion.Panel>
                <Accordion.Title className="flex items-center justify-between text-black   text-lg font-normal leading-relaxed button-img  bg-white hover:bg-white focus:ring-0 ring-0 p-4">
                  <h2 className="text-lg font-normal leading-relaxed  text-black">
                    Order Cancelled
                  </h2>
                </Accordion.Title>

                <Accordion.Content className=" border-y border-grey py-6 px-4">
                  <div class=" md:w-9/12 gap-3 grid md:grid-cols-[auto,1fr] items-end">
                    <div className="block">
                      <img
                        src="\img\checkList-product2.svg"
                        alt="television"
                        class=" min-w-40"
                      />
                    </div>
                    <div class="flex flex-col justify-between h-fit gap-7">
                      <div class="block">
                        <p class="text-base font-normal leading-5 text-black">
                          Samsung 65" class CU7000 Crystal UHD 4K Smart TV -
                          Titan Gray (UN65CU7000)
                        </p>
                        <span class="text-1-light  text-sm font-light leading-tight mt-2 block">
                          Black Titanium, 256GB
                        </span>
                      </div>
                      <div class="flex gap-4 items-center w-full">
                        <a
                          href=""
                          className="text-center basis-full h-10 border border-5 border-grey3 font-normal text-xs leading-4 text-black p-3"
                        >
                          Cancel
                        </a>
                        <a
                          href=""
                          className="text-center basis-full h-10 border border-5 border-grey3 font-normal text-xs leading-4 text-black p-3"
                        >
                          Track
                        </a>
                      </div>
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>
      </section>
    </>
  );
}
