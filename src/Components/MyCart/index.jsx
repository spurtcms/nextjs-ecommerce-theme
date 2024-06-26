import MyCartPage from './MyCartPage';
import { cookies } from 'next/headers';


export default async function MyCartServerActions() {
        let tokenCheck=cookies().get("Token")
       
       
  return (
    <>
   <MyCartPage tokenCheck={tokenCheck?.value}/>
    </>
  )
}
