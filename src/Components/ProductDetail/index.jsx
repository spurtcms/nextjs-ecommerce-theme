import { fetchGraphQl } from "@/api/graphicql";
import ProductDetailPage from "./ProductDetailPage";
import { GET_POSTS_SLUG_QUERY } from "@/api/query";

export default async function ProductDeatilServerActions({params}) {
  let variable={
    "productId":params.slug
  }
  let productDetail=await fetchGraphQl(GET_POSTS_SLUG_QUERY,variable)
  // cardlist=cardlist?.ecommerceProductList
  // console.log(cardlist,'cardlist323232');
  return (
   <>
   <ProductDetailPage productDetail={productDetail.ecommerceProductDetails}/>
   </>
  )
}
