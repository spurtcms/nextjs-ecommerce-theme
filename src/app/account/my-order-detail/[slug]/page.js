import MyOrderDetail from '@/Components/Account/Orders/MyOrderDetail'
import { fetchGraphQLDa } from '@/api/clientGraphicql';
import { GET_PRODUCT_DETAIL } from '@/api/query';
import { notFound } from 'next/navigation';

export const metadata = {
    title: "My Order Details"
  };

export default async function viewDetails({params}) {

  let detail_var={"pslug":params?.slug}
  let postData= await fetchGraphQLDa(GET_PRODUCT_DETAIL,detail_var)

if(!postData){
return notFound();
}


    return(<>
    
    <MyOrderDetail params={params}/>
    
    </>)
}
