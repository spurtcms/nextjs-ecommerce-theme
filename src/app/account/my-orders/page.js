import MyOrders from '@/Components/Account/Orders/MyOrders'

export const metadata = {
    title: "My Orders"
  };

export default function myUpcomingOrder({router}) {

    return (
        <>
         <MyOrders router={router}/>
        </>
    )
}
