import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

export default function CheckoutRoutes() {
  const shippRoute=useSelector((state)=>state.cartReducer.shippRoute)

   const pathname =usePathname()
  return (
    <div className="p-4 flex border-b border-grey gap-2 items-center">
    <p className="flex items-center text-base leading-5 font-normal gap-2 text-primary">
  
        <img src="/img/Complete-product.svg" />
          Accounts
       </p>
    <div className="bg-primary w-4 h-px"></div>
    <Link href="/account/checkout-shipping" prefetch className="flex items-center text-base leading-5 font-normal gap-2 text-primary">

        <img src="/img/active-product.svg" className="hidden" />
        <img src="/img/in-active-product.svg" className="hidden" />
        <img src="/img/Complete-product.svg" />
        Shipping
    </Link>
    <div className="bg-primary w-4 h-px"></div>
    {shippRoute==true?

        <Link href="/account/checkout-payment" className={`flex items-center text-base leading-5 font-normal gap-2 ${pathname==="/account/checkout-payment"?"text-primary":"text-grey-300"} `}>
            {pathname==="/account/checkout-payment"? <><img src="/img/active-product.svg" /></>:<>
                                    <img src="/img/in-active-product.svg" /></>}
                              
            Payment
        </Link>
        :
        <div className={`flex items-center text-base leading-5 font-normal gap-2 ${pathname==="/account/checkout-payment"?"text-primary":"text-grey-300"} `}>
            {pathname==="/account/checkout-payment"? <><img src="/img/active-product.svg" /></>:<>
                                    <img src="/img/in-active-product.svg" /></>}
                              
            Payment
        </div>

    }
</div>
  )
}
