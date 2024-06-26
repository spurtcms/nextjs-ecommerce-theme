import MyOrders from '@/Components/Account/Orders/MyOrders'

export const metadata = {
  title: "My History"
};

export default function myHistory() {
    return (
        <>
          <MyOrders />
        </>
    )
}
