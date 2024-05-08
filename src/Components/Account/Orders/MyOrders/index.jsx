import React, { Suspense } from 'react'
import MyOrderServerActions from './MyOrderServerActions'

export default function MyOrders({router}) {
    
    return (
        <>
        <Suspense fallback={null}>
         <MyOrderServerActions routers={router}/>
         </Suspense>
        </>
    )
}
