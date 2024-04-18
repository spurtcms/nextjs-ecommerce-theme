"use client";

import { Accordion } from "flowbite-react";

export default function ProductOrder() {
  return (
    <>
      <section className="px-5 lg:px-10 pb-10 grid lg:grid-cols-4  gap-8">
        <div className=" lg:col-span-3">
          <div className=" py-6">
            <div className=" mb-6">
              <h1 className="text-1xl font-normal leading-7 ">Place Order</h1>
              <p className="flex gap-2 items-center mt-2">
                <span className="text-base font-semibold text-1-light leading-5 flex gap-1 items-center before:content-[''] before:inline-block before:w-2 before:bg-no-repeat before:h-3 before:bg-[url('/img/rupee-sm-light.svg')] ">
                  99,999
                </span>{" "}
                <span className=" text-base flex items-center gap-2 font-medium text-1-light leading-5 after:content-[''] after:inline-block after:min-w-1 after:bg-no-repeat after:min-h-1 after:bg-contain rounded-full after:bg-[url('/img/circle.svg')] ">
                  subtotal
                </span>
                <span className=" text-base font-medium text-1-light leading-5">
                  2 items
                </span>
              </p>
            </div>

            <Accordion className="shadow-4xl rounded-lg">
              <Accordion.Panel className="">
                <div className=" px-4  border-grey border-b ">
                  <Accordion.Title className="flex justify-between items-center text-black   text-lg font-normal leading-relaxed  bg-white hover:bg-white focus:ring-0 ring-0 py-4 px-0">
                    <h2 className="text-lg font-normal leading-relaxed text-black">
                      Delivery Address
                    </h2>
                    {/* <img src="\img\accord-arrow-order.svg" alt="arrow" /> */}
                  </Accordion.Title>

                  <Accordion.Content className="p-0 pb-6">
                    <form className="grid  md:grid-cols-2 items-center  gap-6 md:w-3/4">
                      <div>
                        <input
                          type="text"
                          placeholder="Name"
                          className="border-grey3  border rounded-5 w-full h-10 p-4 focus:outline-none text-xs font-light leading-4 focus:ring-0 focus:border-grey3"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="border-grey3 border rounded-5 w-full h-10 p-4  focus:outline-none text-xs font-light leading-4 focus:ring-0 focus:border-grey3"
                        />
                      </div>

                      <div>
                        <input
                          type="text"
                          placeholder="Address"
                          className="border-grey3 border rounded-5 w-full h-10  p-4 focus:outline-none text-xs font-light leading-4 focus:ring-0 focus:border-grey3"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Pincode"
                          className="border-grey3 border rounded-5 w-full h-10 p-4 focus:outline-none text-xs font-light leading-4 focus:ring-0 focus:border-grey3" 
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Town"
                          className="border-grey3 border rounded-5 w-full h-10  p-4 focus:outline-none text-xs font-light leading-4 focus:ring-0 focus:border-grey3"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="City"
                          className="border-grey3 border rounded-5 w-full h-10 p-4 focus:outline-none  text-xs font-light leading-4 focus:ring-0 focus:border-grey3"
                        />
                      </div>

                      <div className="flex gap-2 items-center">
                        <input
                          type="text"
                          placeholder="State"
                          className="border-grey3 border w-full rounded-5 h-10  p-4 focus:outline-none text-xs font-light leading-4  focus:ring-0 focus:border-grey3"
                        />
                      </div>
                      <div className=" flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="check"
                          className=" accent-black border-grey3 rounded-5 focus:ring-0 foucs:outline-none focus:border-grey3 "
                        />
                        <label
                          for="check"
                          className="border-grey1 text-xs font-light leading-4 "
                        >
                          Make this my default address
                        </label>
                      </div>

                      <button
                        href="#"
                        class=" md:col-span-2  bg-black text-white  font-normal text-base grid place-items-center rounded-5 leading-5  min-h-9 px-4"
                      >
                        Add Address
                      </button>
                    </form>
                  </Accordion.Content>
                </div>
              </Accordion.Panel>

              <Accordion.Panel className=" p-4 pb-6 border-grey border-b ">
                <div className=" px-4 border-grey border-b ">
                  <Accordion.Title className="flex justify-between items-center text-black   text-lg font-normal leading-relaxed  bg-white hover:bg-white focus:ring-0 ring-0 py-4 px-0">
                    <h2 className="text-lg font-normal leading-relaxed text-black">
                      Order Received
                    </h2>

                    {/* <img src="\img\accord-arrow-order.svg" alt="arrow" /> */}
                  </Accordion.Title>

                  <Accordion.Content className="p-0  pb-6">
                    <div className=" grid gap-4 md:w-3/4">
                      <a
                        href=""
                        className="group group border border-grey3 flex justify-between items-center rounded-5 h-10 md:max-w-72 w-full px-4 py-3 "
                      >
                        <span className="text-xs font-light text-black">
                          Debit Card
                        </span>
                        <img
                          src="\img\payment-arrow.svg"
                          alt="arrow"
                          className="group-hover:translate-x-1 transition-all duration-300"
                        />
                      </a>
                      <a
                        href=""
                        className="group border border-grey3 flex justify-between  items-center rounded-5 h-10 md:max-w-72 w-full px-4 py-3"
                      >
                        <span className="text-xs font-light text-black">
                          Credit Card
                        </span>
                        <img
                          src="\img\payment-arrow.svg"
                          alt="arrow"
                          className="group-hover:translate-x-1 transition-all duration-300"
                        />
                      </a>
                      <a
                        href=""
                        className="group border border-grey3 flex justify-between items-center rounded-5 h-10 md:max-w-72 w-full px-4 py-3"
                      >
                        <span className="text-xs font-light text-black">
                          UPI
                        </span>
                        <img
                          src="\img\payment-arrow.svg"
                          alt="arrow"
                          className="group-hover:translate-x-1 transition-all duration-300"
                        />
                      </a>
                      <a
                        href=""
                        className="group border border-grey3 h-10 flex justify-between items-center rounded-5 md:max-w-72 w-full px-4 py-3"
                      >
                        <span className="text-xs font-light text-black">
                          Net Banking
                        </span>
                        <img
                          src="\img\payment-arrow.svg"
                          alt="arrow"
                          className="group-hover:translate-x-1 transition-all duration-300"
                        />
                      </a>

                      <div>
                        <button
                          href="#"
                          class="  bg-black text-white  font-normal text-base grid place-items-center rounded-5 leading-5  min-h-9 w-full px-4"
                        >
                          Check Out
                        </button>
                        <a
                          href=""
                          className=" text-center block mt-2  leading-4 text-xs font-normal"
                        >
                          Cancel
                        </a>
                      </div>
                    </div>
                  </Accordion.Content>
                </div>
              </Accordion.Panel>
            </Accordion>
          </div>
        </div>

        <div>
          <div className=" mt-6 ">
            <h2 className="text-1xl font-medium leading-7 text-black">
              Price Details
            </h2>
            <strong class=" mt-6 flex gap-1 items-center text-2xl font-medium leading-8 text-black before:content-[''] before:inline-block before:w-3 before:bg-no-repeat before:h-4 before:bg-[url('/img/rupee-md.svg')]   ">
              99,999
            </strong>
          </div>
          <span className="text-xs font-light leading-4 border-grey1 mt-2 block">
            2 item
          </span>

          <table className="w-full">
            <tbody>
              <tr className="">
                <th className=" text-start text-base font-light  text-black pt-3">
                  Subtotal (1item)
                </th>
                <td className="pt-3">
                  <strong class="flex gap-1  justify-end text-base font-light  text-black items-center before:content-[''] before:inline-block before:w-2 before:bg-no-repeat before:h-3 before:bg-[url('/img/rupee-8-12.svg')]   ">
                    99,999
                  </strong>
                </td>
              </tr>
              <tr>
                <th className=" text-start text-base font-light  text-black pt-3">
                  Shipping
                </th>
                <td className="pt-3">
                  <strong class="flex gap-1 justify-end text-base font-light  text-black items-center before:content-[''] before:inline-block before:w-2 before:bg-no-repeat before:h-3 before:bg-[url('/img/rupee-8-12.svg')]   ">
                    60
                  </strong>
                </td>
              </tr>
              <tr>
                <th className=" text-start text-base font-light  text-black pt-3">
                  Estimated taxes
                </th>
                <td className="pt-3">
                  {" "}
                  <strong class="flex gap-1 justify-end text-base font-light  text-black items-center before:content-[''] before:inline-block before:w-2 before:bg-no-repeat before:h-3 before:bg-[url('/img/rupee-8-12.svg')]   ">
                    1500.52
                  </strong>
                </td>
              </tr>
              <tr className="border-b border-grey">
                <th className=" text-start text-base font-medium  text-black pt-3 pb-4">
                  Total
                </th>
                <td className=" text-end text-base font-medium  text-black pt-3 pb-4">
                  99,999
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
