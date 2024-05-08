import ProductDeatilServerActions from '@/Components/ProductDetail'
import { fetchGraphQl } from '@/api/graphicql';
import { GET_POSTS_SLUG_QUERY } from '@/api/query';
import React from 'react'

export async function generateMetadata({params}) {

  let variable={
    "productSlug":params?.slug
  }
  let metaTata=await fetchGraphQl(GET_POSTS_SLUG_QUERY,variable)
  return {
    title:metaTata?.ecommerceProductDetails?.productName,
    
  }
 
}

export default function ProductDetail({params}) {
  return (
   <ProductDeatilServerActions params={params}/>
  )
}
