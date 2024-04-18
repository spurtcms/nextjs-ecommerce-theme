"use client";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import ImageComponets from "../ImageComponent";

const navigation = [
  { name: "Electronics", href: "#", current: true },
  { name: "TVs & Appliances", href: "#", current: false },
  { name: "Mens", href: "#", current: false },
  { name: "Women", href: "#", current: false },
  { name: "Baby & kids", href: "#", current: false },
  { name: "Home & Furniture", href: "#", current: false },
  { name: "Offer Zone", href: "#", current: false },
];


export default function Header() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
     <Disclosure as="nav" className="bg-white border-b border-1-light">
        {({ open }) => (
          <>
            {/* header */}

            <div className="  lg::px-10 px-5 ">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 gap-4 items-center justify-center sm:justify-between ">
                  <Link href={'/'}
                    
                    className="flex flex-shrink-0 items-center w-1/3  sm:w-auto"
                  >
                    <ImageComponets path={"/img/logo.svg"} alt={"spurtCMS logo"} w={157} h={20}/>
                   
                  </Link>

                  <div className="hidden sm:ml-6 lg:block">
                    <div className="flex gap-6 ">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="font-light xl:text-sm text-xs  text-black text-nowrap leading-tight flex flex-col gap-1 items-center hover:text-primary  after:content-[''] after:inline-block after:w-1 after:h-1  hover:after:bg-[url('/img/active-dot.svg')]  transition-all"
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className=" flex gap-4 items-center lg:ms-0 ms-auto">
                    <button type="button" className="">
                      <img src="\img\search.svg" alt="search" />
                    </button>


                    <button type="button" className="">
                      <img src="\img\cart.svg" alt="search" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="relative">
                      <div>
                        <Menu.Button className="relative flex rounded-full text-sm ">
                          <img
                            className="w-6 h-6 rounded-full"
                            src="\img\profile.svg"
                            alt="profile"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none  py-1 rounded-md  ">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="javascript:void(0)"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img
                                  src="\img\profile-drop.svg"
                                  alt="profile"
                                />{" "}
                                My Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/myOrder"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img src="\img\order.svg" alt="order" /> My
                                Orders
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="javascript:void(0)"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img
                                  src="\img\notification.svg"
                                  alt="notification"
                                />{" "}
                                Notifications
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="javascript:void(0)"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img src="\img\coupons.svg" alt="coupons" />
                                Coupons
                              </a>
                            )}
                          </Menu.Item>

                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="javascript:void(0)"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "flex gap-4 px-3 py-2 text-sm font-light text-black leading-tight"
                                )}
                              >
                                <img src="\img\logout.svg" alt="logout" />
                                Logout
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  <div className=" lg:hidden flex items-center ">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rotate-180 ">
                      <img src="\img\menu.svg" alt="menu" />
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="lg:hidden">
                <div className="space-y-1 pb-2 pt-2 ">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className=" block font-normal text-black  text-sm hover:text-primary text-primar text-nowrap leading-tigh mt-0 p-1 "
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  )
}
