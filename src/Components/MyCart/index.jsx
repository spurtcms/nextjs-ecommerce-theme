import { fetchGraphQl } from '@/api/graphicql';
import MyCartPage from './MyCartPage';
import { GET_MY_CART_QUERY } from '@/api/query';

export default async function MyCartServerActions() {
    let variable={
        "limit":10,
        "offset":0,
        "id": 1
      }
      let mycartlist=await fetchGraphQl(GET_MY_CART_QUERY,variable)
      mycartlist=mycartlist.ecommerceCartList
      console.log(mycartlist,'8999999');
  return (
    <>
   <MyCartPage  mycartlist={mycartlist}/>
    </>
  )
}
