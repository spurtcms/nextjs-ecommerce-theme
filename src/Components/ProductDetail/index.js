import { fetchGraphQl } from "@/api/graphicql";
import ProductDetailPage from "./ProductDetailPage";
import { GET_POSTS_SLUG_QUERY } from "@/api/query";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";


export default async function ProductDeatilServerActions({params}) {
  console.log(params,'params')
  let tokenCheck=cookies().get("Token")
  let variable={
    "productSlug":params?.slug
  }
  let productDetail=await fetchGraphQl(GET_POSTS_SLUG_QUERY,variable)
  console.log(productDetail?.ecommerceProductDetails?.productSlug,'productDetail')
  if(productDetail?.ecommerceProductDetails?.productSlug!=params?.slug){
    return notFound();
  }
  return (
   <>
   <ProductDetailPage productDetail={productDetail?.ecommerceProductDetails} tokenCheck={tokenCheck?.value} slug={params?.slug}/>
   </>
  )
}
