import { fetchGraphQl } from '@/api/graphicql';
import MyCartPage from './MyCartPage';
import { GET_MY_CART_QUERY } from '@/api/query';
import { cookies } from 'next/headers';

export default async function MyCartServerActions() {
        let tokenCheck=cookies().get("Token")
       
          let variable={
            "limit":10,
            "offset":0,
          }
         let mycartlist=tokenCheck?.value?await fetchGraphQl(GET_MY_CART_QUERY,variable):[]
          mycartlist=mycartlist?.ecommerceCartList?.cartList
          mycartlist?.map((sdata)=>{
            sdata.quantity=sdata.ecommerceCart.quantity

          })
  return (
    <>
   <MyCartPage  mycartlist={mycartlist} tokenCheck={tokenCheck?.value}/>
    </>
  )
}
