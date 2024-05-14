import Link from 'next/link'
import React from 'react'
import MyOrderDetailSeverActions from './MyOrderDetailSeverActions'

export default function MyOrderDetail({params}) {
  
    return (
        <>
          <MyOrderDetailSeverActions params={params}/>
        </>
    )
}
