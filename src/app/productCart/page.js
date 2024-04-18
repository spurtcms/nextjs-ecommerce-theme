import React from "react";

function page() {
  return (
    <section className=" px-5 lg:px-10 pb-10 grid lg:grid-cols-4  gap-8">
      <div className=" lg:col-span-3">
        <div className=" py-6">
          <h1 className="text-1xl font-normal leading-7 ">Cart</h1>
          <p className="flex gap-2 items-center mt-2">
            <span className="text-base font-semibold text-1-light leading-5 flex gap-1 items-center before:content-[''] before:inline-block before:w-2 before:bg-no-repeat before:h-3 before:bg-[url('/img/rupee-sm-light.svg')] ">
              99,999
            </span>{" "}
            <span className=" text-base font-medium text-1-light leading-5 ">
              subtotal
            </span>
            <span className=" text-base font-medium text-1-light leading-5">
              2 items
            </span>
          </p>
        </div>
        <div className="shadow-4xl px-4 rounded-lg overflow-hidden ">
          <h3 className="text-lg font-normal leading-relaxed text-black flex items-center gap-2 py-4">
            <img src="\img\package.svg" alt="package" /> Shipping
          </h3>

          <div className="border-grey border-t py-6 flex gap-4 justify-between">
            <div className="grid lg:grid-cols-[auto,1fr] gap-3 items-start grid-cols-1 h-fit ">
              <div>
                <img src="\img\checkList-product1.svg" alt="television" />
              </div>
              <div className=" grid-cols-1 grid lg:grid-cols-[1fr,auto] h-full lg:gap-10 gap-3">
                <div className="flex flex-col justify-between gap-3">
                  <div>
                    <p className="text-base font-normal leading-5 text-black">
                      Samsung 65" class CU7000 Crystal UHD 4K Smart TV - Titan
                      Gray (UN65CU7000)
                    </p>
                  </div>

                  <div className="flex gap-4 items-center">
                    <a
                      href=""
                      class="flex items-center gap-2 min-w-20 h-8 w-fit justify-center border rounded-5 border-grey1 "
                    >
                      <span class="text-3-light text-xs">Qty</span>
                      <span class="text-3-light text-xs">1</span>{" "}
                      <img src="\img\qty-arrow.svg" alt="arrow" />
                    </a>

                    <a
                      href=""
                      className="text-xs font-light leading-4 min-w-24 text-3-light border rounded-5 border-grey1 h-8 px-3 items-center inline-flex"
                    >
                      {" "}
                      Save for later
                    </a>
                  </div>
                </div>

                <strong class=" row-start-1 lg:row-auto  text-base font-semibold leading-5 text-black flex gap-1 items-center before:content-[''] before:inline-block before:w-2 before:bg-no-repeat before:h-3 before:bg-[url('/img/rupee-sm.svg')]  h-fit ">
                  15,299
                </strong>
              </div>
            </div>

            <a href="" className=" min-w-6">
              <img src="\img\cancel.svg" alt="cancel" />
            </a>
          </div>

          <div className="border-grey border-t py-6 flex gap-4 justify-between">
            <div className="grid lg:grid-cols-[auto,1fr] gap-3 items-start grid-cols-1 h-fit ">
              <div>
                <img src="\img\checkList-product2.svg" alt="mobile" />
              </div>
              <div className=" grid-cols-1 grid lg:grid-cols-[1fr,auto] h-full lg:gap-10 gap-3">
                <div className="flex flex-col justify-between gap-3">
                  <div>
                    <p className="text-base font-normal leading-5 text-black">
                      Samsung 65" class CU7000 Crystal UHD 4K Smart TV - Titan
                      Gray (UN65CU7000)
                    </p>
                    <span class="text-1-light  text-sm font-light leading-tight mt-2 block">
                      Black Titanium, 256GB
                    </span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <a
                      href=""
                      class="flex items-center gap-2 min-w-20 h-8 w-fit justify-center border rounded-5 border-grey1 "
                    >
                      <span class="text-3-light text-xs">Qty</span>
                      <span class="text-3-light text-xs">1</span>{" "}
                      <img src="\img\qty-arrow.svg" alt="arrow" />
                    </a>

                    <a
                      href=""
                      className="text-xs font-light leading-4 min-w-24 text-3-light border rounded-5 border-grey1 h-8 px-3 items-center inline-flex"
                    >
                      {" "}
                      Save for later
                    </a>
                  </div>
                </div>

                <strong class=" row-start-1 lg:row-auto  text-base font-semibold leading-5 text-black flex gap-1 items-center before:content-[''] before:inline-block before:w-2 before:bg-no-repeat before:h-3 before:bg-[url('/img/rupee-sm.svg')]  h-fit ">
                  15,299
                </strong>
              </div>
            </div>

            <a href="" className=" min-w-6">
              <img src="\img\cancel.svg" alt="cancel" />
            </a>
          </div>
        </div>
      </div>

      <div>
        <div className=" mt-6 ">
          <h2 className="text-1xl font-medium leading-7 text-black">
            Order summary
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

        <div className="flex flex-col gap-3 mt-6">
          <a
            href="/placeOrder"
            className="grid place-items-center text-base font-normal leading-5  text-white bg-black rounded-5 h-11 w-full "
          >
            Place Order
          </a>
          <a
            href="#"
            className="grid place-items-center border  border-black rounded-5  text-base font-normal leading-5 bg-white text-black h-11 w-full"
          >
            Promo Code?
          </a>
        </div>
      </div>
    </section>
  );
}

export default page;
